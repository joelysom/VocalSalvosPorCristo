import type { User } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp as firestoreServerTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  onDisconnect,
  onValue,
  ref as databaseRef,
  serverTimestamp as realtimeServerTimestamp,
  set,
} from "firebase/database";
import { firestoreDb, realtimeDb } from "../config/firebase";
import {
  GENERAL_PERMISSIONS,
  normalizeAccessLevel,
  normalizePermissions,
} from "../data/access";
import type { FormState } from "../data/mock";
import { uploadProfileAvatar } from "./storageMedia";

export type MemberProfile = {
  uid: string;
  email: string;
  name: string;
  phone: string;
  phoneNormalized: string;
  cep: string;
  neighborhood: string;
  city: string;
  street: string;
  houseNumber: string;
  maritalStatus: string;
  gender: string;
  vocalRange: string;
  availability: string;
  avatarDataUrl: string;
  accountLevel?: string;
  leadershipRole?: string;
  permissions?: string[];
};

export type ManagedMemberProfileUpdate = {
  name: string;
  phone: string;
  cep: string;
  neighborhood: string;
  city: string;
  street: string;
  houseNumber: string;
  maritalStatus: string;
  gender: string;
  vocalRange: string;
  availability: string;
  accountLevel: string;
  leadershipRole: string;
  permissions: string[];
};

export type OwnMemberProfileUpdate = {
  name: string;
  phone: string;
  cep: string;
  neighborhood: string;
  city: string;
  street: string;
  houseNumber: string;
  maritalStatus: string;
  gender: string;
  vocalRange: string;
  availability: string;
};

export type MemberDirectoryProfile = {
  uid: string;
  name: string;
  phone: string;
  phoneNormalized: string;
  avatarDataUrl: string;
  vocalRange: string;
  leadershipRole: string;
  accountLevel: string;
  availability: string;
  updatedAt?: unknown;
};

const MAX_AVATAR_DIMENSION = 320;
const MAX_AVATAR_DATA_URL_LENGTH = 700000;

type AvatarSource = File | string | null | undefined;

function isRemotePhotoUrl(value: string | null | undefined) {
  return Boolean(value && (value.startsWith("https://") || value.startsWith("http://")));
}

async function syncAuthProfile(user: User, name: string, avatarDataUrl: string) {
  const authProfileUpdate: Parameters<typeof updateProfile>[1] = {
    displayName: name,
  };

  if (isRemotePhotoUrl(avatarDataUrl)) {
    authProfileUpdate.photoURL = avatarDataUrl;
  }

  try {
    await updateProfile(user, authProfileUpdate);
  } catch (error) {
    console.warn("Falha ao sincronizar o perfil no Firebase Auth.", error);
  }
}

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

function mapMemberToDirectory(profile: Pick<
  MemberProfile,
  "uid" | "name" | "phone" | "phoneNormalized" | "avatarDataUrl" | "vocalRange" | "leadershipRole" | "accountLevel" | "availability"
>) {
  return {
    uid: profile.uid,
    name: profile.name,
    phone: profile.phone,
    phoneNormalized: profile.phoneNormalized,
    avatarDataUrl: profile.avatarDataUrl,
    vocalRange: profile.vocalRange,
    leadershipRole: profile.leadershipRole || "",
    accountLevel: profile.accountLevel || "member",
    availability: profile.availability,
    updatedAt: firestoreServerTimestamp(),
  };
}

async function syncMemberDirectory(profile: Pick<
  MemberProfile,
  "uid" | "name" | "phone" | "phoneNormalized" | "avatarDataUrl" | "vocalRange" | "leadershipRole" | "accountLevel" | "availability"
>) {
  await setDoc(
    doc(firestoreDb, "memberDirectory", profile.uid),
    mapMemberToDirectory(profile),
    { merge: true },
  );
}

export async function ensureMemberDirectoryEntry(profile: Pick<
  MemberProfile,
  "uid" | "name" | "phone" | "phoneNormalized" | "avatarDataUrl" | "vocalRange" | "leadershipRole" | "accountLevel" | "availability"
>) {
  await syncMemberDirectory(profile);
}

export async function backfillMemberDirectoryFromMembers() {
  const members = await listMemberProfiles();
  const syncResults = await Promise.allSettled(
    members.map((member) => syncMemberDirectory(member)),
  );

  const syncedCount = syncResults.filter((result) => result.status === "fulfilled").length;
  const failedCount = syncResults.length - syncedCount;

  return {
    total: members.length,
    synced: syncedCount,
    failed: failedCount,
  };
}

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(String(reader.result || ""));
    };

    reader.onerror = () => {
      reject(new Error("Não foi possível ler a imagem selecionada."));
    };

    reader.readAsDataURL(file);
  });
}

function loadImage(dataUrl: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Não foi possível processar a imagem do perfil."));
    image.src = dataUrl;
  });
}

async function convertAvatarToDataUrl(file: File) {
  const fileDataUrl = await readFileAsDataUrl(file);
  return compressAvatarDataUrl(fileDataUrl);
}

async function compressAvatarDataUrl(fileDataUrl: string) {
  const image = await loadImage(fileDataUrl);

  const scale = Math.min(1, MAX_AVATAR_DIMENSION / Math.max(image.width, image.height));
  const targetWidth = Math.max(1, Math.round(image.width * scale));
  const targetHeight = Math.max(1, Math.round(image.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Não foi possível preparar a foto do perfil.");
  }

  context.drawImage(image, 0, 0, targetWidth, targetHeight);

  const dataUrl = canvas.toDataURL("image/jpeg", 0.78);

  if (dataUrl.length > MAX_AVATAR_DATA_URL_LENGTH) {
    throw new Error("A foto ainda ficou grande para salvar. Use uma imagem menor.");
  }

  return dataUrl;
}

async function resolveAvatarDataUrl(userId: string, avatarSource: AvatarSource) {
  if (!avatarSource) {
    return "";
  }

  if (typeof avatarSource === "string") {
    if (!avatarSource.trim()) {
      return "";
    }

    if (avatarSource.startsWith("http://") || avatarSource.startsWith("https://")) {
      return avatarSource;
    }

    const compressedAvatar = await compressAvatarDataUrl(avatarSource);
    return uploadProfileAvatar(userId, compressedAvatar);
  }

  const compressedAvatar = await convertAvatarToDataUrl(avatarSource);
  return uploadProfileAvatar(userId, compressedAvatar);
}

export async function saveMemberProfile(
  user: User,
  form: FormState,
  avatarSource?: AvatarSource,
) {
  const memberReference = doc(firestoreDb, "members", user.uid);
  const existingSnapshot = await getDoc(memberReference);
  const existingData = existingSnapshot.exists()
    ? (existingSnapshot.data() as Partial<MemberProfile>)
    : null;
  const accountLevel = normalizeAccessLevel(existingData?.accountLevel);
  const permissions = normalizePermissions(existingData?.permissions, accountLevel);

  let avatarDataUrl = existingData?.avatarDataUrl || user.photoURL || "";

  if (avatarSource) {
    avatarDataUrl = await resolveAvatarDataUrl(user.uid, avatarSource);
  }

  const profilePayload = {
    uid: user.uid,
    email: (user.email || form.email).trim().toLowerCase(),
    name: form.name.trim(),
    phone: form.phone.trim(),
    phoneNormalized: normalizePhone(form.phone),
    cep: form.cep.trim(),
    neighborhood: form.neighborhood.trim(),
    city: form.city.trim(),
    street: form.street.trim(),
    houseNumber: form.houseNumber.trim(),
    maritalStatus: form.maritalStatus.trim(),
    gender: form.gender.trim(),
    vocalRange: form.vocalRange.trim(),
    availability: form.availability.trim(),
    avatarDataUrl,
    accountLevel,
    leadershipRole: existingData?.leadershipRole || "",
    permissions,
    createdAt: existingSnapshot.exists()
      ? existingSnapshot.data().createdAt
      : firestoreServerTimestamp(),
    updatedAt: firestoreServerTimestamp(),
  };

  await setDoc(memberReference, profilePayload, { merge: true });
  await syncMemberDirectory(profilePayload);
  await syncAuthProfile(user, profilePayload.name, avatarDataUrl);

  return {
    ...profilePayload,
    createdAt: undefined,
    updatedAt: undefined,
  } as MemberProfile;
}

export async function getMemberProfile(uid: string) {
  const profileSnapshot = await getDoc(doc(firestoreDb, "members", uid));

  if (!profileSnapshot.exists()) {
    return null;
  }

  return profileSnapshot.data() as MemberProfile;
}

export async function ensureAdminBootstrapProfile(user: User) {
  const memberReference = doc(firestoreDb, "members", user.uid);
  const existingSnapshot = await getDoc(memberReference);
  const existingData = existingSnapshot.exists()
    ? (existingSnapshot.data() as Partial<MemberProfile>)
    : null;

  const profilePayload = {
    uid: user.uid,
    email: (user.email || "").trim().toLowerCase(),
    name: existingData?.name || user.displayName || "Administrador do Vocal",
    phone: existingData?.phone || "",
    phoneNormalized: existingData?.phoneNormalized || "",
    cep: existingData?.cep || "",
    neighborhood: existingData?.neighborhood || "",
    city: existingData?.city || "",
    street: existingData?.street || "",
    houseNumber: existingData?.houseNumber || "",
    maritalStatus: existingData?.maritalStatus || "",
    gender: existingData?.gender || "Outro",
    vocalRange: existingData?.vocalRange || "",
    availability: existingData?.availability || "Disponibilidade administrativa",
    avatarDataUrl: existingData?.avatarDataUrl || user.photoURL || "",
    accountLevel: "administration",
    leadershipRole: existingData?.leadershipRole || "",
    permissions: normalizePermissions(existingData?.permissions || GENERAL_PERMISSIONS, "administration"),
    createdAt: existingSnapshot.exists()
      ? existingSnapshot.data().createdAt
      : firestoreServerTimestamp(),
    updatedAt: firestoreServerTimestamp(),
  };

  await setDoc(memberReference, profilePayload, { merge: true });
  await syncMemberDirectory(profilePayload);

  return {
    ...profilePayload,
    createdAt: undefined,
    updatedAt: undefined,
  } as MemberProfile;
}

export async function listMemberProfiles() {
  const membersQuery = query(collection(firestoreDb, "members"), orderBy("name"));
  const snapshot = await getDocs(membersQuery);

  return snapshot.docs.map((document) => document.data() as MemberProfile);
}

export async function listMemberDirectoryProfiles() {
  const directoryQuery = query(collection(firestoreDb, "memberDirectory"), orderBy("name"));
  const snapshot = await getDocs(directoryQuery);

  return snapshot.docs.map((document) => document.data() as MemberDirectoryProfile);
}

export async function updateOwnMemberProfile(
  user: User,
  updates: OwnMemberProfileUpdate,
  avatarSource?: AvatarSource,
  allowExtendedDetails = false,
) {
  const memberReference = doc(firestoreDb, "members", user.uid);
  const existingSnapshot = await getDoc(memberReference);

  if (!existingSnapshot.exists()) {
    throw new Error("Perfil do membro não encontrado.");
  }

  const existingData = existingSnapshot.data() as MemberProfile;
  let avatarDataUrl = existingData.avatarDataUrl || user.photoURL || "";

  if (avatarSource) {
    avatarDataUrl = await resolveAvatarDataUrl(user.uid, avatarSource);
  }

  const nextProfile: MemberProfile = {
    ...existingData,
    name: allowExtendedDetails ? updates.name.trim() : existingData.name,
    phone: updates.phone.trim(),
    phoneNormalized: normalizePhone(updates.phone),
    cep: updates.cep.trim(),
    neighborhood: updates.neighborhood.trim(),
    city: updates.city.trim(),
    street: updates.street.trim(),
    houseNumber: updates.houseNumber.trim(),
    maritalStatus: allowExtendedDetails ? updates.maritalStatus.trim() : existingData.maritalStatus,
    gender: allowExtendedDetails ? updates.gender.trim() : existingData.gender,
    vocalRange: allowExtendedDetails ? updates.vocalRange.trim() : existingData.vocalRange,
    availability: updates.availability.trim(),
    avatarDataUrl,
    accountLevel: existingData.accountLevel,
    leadershipRole: existingData.leadershipRole,
    permissions: existingData.permissions,
  };

  await updateDoc(memberReference, {
    name: nextProfile.name,
    phone: nextProfile.phone,
    phoneNormalized: nextProfile.phoneNormalized,
    cep: nextProfile.cep,
    neighborhood: nextProfile.neighborhood,
    city: nextProfile.city,
    street: nextProfile.street,
    houseNumber: nextProfile.houseNumber,
    maritalStatus: nextProfile.maritalStatus,
    gender: nextProfile.gender,
    vocalRange: nextProfile.vocalRange,
    availability: nextProfile.availability,
    avatarDataUrl: nextProfile.avatarDataUrl,
    updatedAt: firestoreServerTimestamp(),
  });

  await syncMemberDirectory(nextProfile);
  await syncAuthProfile(user, nextProfile.name, nextProfile.avatarDataUrl);

  return nextProfile;
}

export async function updateManagedMemberProfile(
  uid: string,
  updates: ManagedMemberProfileUpdate,
) {
  const memberReference = doc(firestoreDb, "members", uid);
  await updateDoc(memberReference, {
    name: updates.name.trim(),
    phone: updates.phone.trim(),
    phoneNormalized: normalizePhone(updates.phone),
    cep: updates.cep.trim(),
    neighborhood: updates.neighborhood.trim(),
    city: updates.city.trim(),
    street: updates.street.trim(),
    houseNumber: updates.houseNumber.trim(),
    maritalStatus: updates.maritalStatus.trim(),
    gender: updates.gender.trim(),
    vocalRange: updates.vocalRange.trim(),
    availability: updates.availability.trim(),
    accountLevel: normalizeAccessLevel(updates.accountLevel),
    leadershipRole: updates.leadershipRole.trim(),
    permissions: normalizePermissions(updates.permissions, updates.accountLevel),
    updatedAt: firestoreServerTimestamp(),
  });

  const updatedSnapshot = await getDoc(memberReference);

  if (updatedSnapshot.exists()) {
    await syncMemberDirectory(updatedSnapshot.data() as MemberProfile);
  }
}

export function trackMemberPresence(uid: string, displayName: string) {
  const statusReference = databaseRef(realtimeDb, `presence/${uid}`);
  const connectedReference = databaseRef(realtimeDb, ".info/connected");

  const offlineState = {
    state: "offline",
    displayName,
    lastChanged: realtimeServerTimestamp(),
  };

  const onlineState = {
    state: "online",
    displayName,
    lastChanged: realtimeServerTimestamp(),
  };

  const unsubscribe = onValue(connectedReference, (snapshot) => {
    if (snapshot.val() !== true) {
      return;
    }

    void onDisconnect(statusReference)
      .set(offlineState)
      .then(() => set(statusReference, onlineState));
  });

  return () => {
    unsubscribe();
    void set(statusReference, offlineState);
  };
}