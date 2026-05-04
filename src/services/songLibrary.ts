import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firestoreDb } from "../config/firebase";
import type { StoredFileRecord } from "./storageMedia";

export const SONG_VOICE_PARTS = [
  "Geral",
  "Soprano",
  "Mezzo-soprano",
  "Contralto",
  "Tenor",
  "Barítono",
  "Baixo",
] as const;

export type SongVoicePart = (typeof SONG_VOICE_PARTS)[number];

export type SongVoiceAssetRecord = StoredFileRecord & {
  voiceType: SongVoicePart;
};

export type SongAttachmentRecord = StoredFileRecord & {
  attachmentType: "lyrics" | "score";
};

export type SongLibraryRecord = {
  id: string;
  title: string;
  artist: string;
  tone: string;
  category: string;
  notes: string;
  addedBy: string;
  createdByUid: string;
  referenceUrl: string;
  voiceAssets: SongVoiceAssetRecord[];
  lyricFile: SongAttachmentRecord | null;
  scoreFile: SongAttachmentRecord | null;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type CreateSongLibraryInput = {
  id?: string;
  title: string;
  artist: string;
  tone: string;
  category: string;
  notes: string;
  addedBy: string;
  createdByUid: string;
  referenceUrl: string;
  voiceAssets: SongVoiceAssetRecord[];
  lyricFile: SongAttachmentRecord | null;
  scoreFile: SongAttachmentRecord | null;
};

export type UpdateSongLibraryInput = Omit<CreateSongLibraryInput, "id"> & {
  createdAt: unknown;
};

function getSongLibraryCollection() {
  return collection(firestoreDb, "songLibrary");
}

function resolveTimestampValue(value: unknown) {
  if (value instanceof Date) {
    return value.getTime();
  }

  if (typeof value === "object" && value !== null) {
    if ("toDate" in value && typeof value.toDate === "function") {
      return value.toDate().getTime();
    }

    if ("seconds" in value && typeof value.seconds === "number") {
      return value.seconds * 1000;
    }
  }

  return 0;
}

function buildSongLibraryPayload(
  songId: string,
  input: Omit<CreateSongLibraryInput, "id">,
  createdAt: unknown,
) {
  return {
    id: songId,
    title: input.title,
    artist: input.artist,
    tone: input.tone,
    category: input.category,
    notes: input.notes,
    addedBy: input.addedBy,
    createdByUid: input.createdByUid,
    referenceUrl: input.referenceUrl,
    voiceAssets: input.voiceAssets,
    lyricFile: input.lyricFile,
    scoreFile: input.scoreFile,
    createdAt,
  } satisfies SongLibraryRecord;
}

export async function listSongLibrary() {
  const snapshot = await getDocs(getSongLibraryCollection());

  return snapshot.docs
    .map((document) => document.data() as SongLibraryRecord)
    .sort((left, right) => resolveTimestampValue(right.createdAt) - resolveTimestampValue(left.createdAt));
}

export async function createSongLibraryItem(input: CreateSongLibraryInput) {
  const songReference = input.id ? doc(getSongLibraryCollection(), input.id) : doc(getSongLibraryCollection());
  const payload = buildSongLibraryPayload(songReference.id, input, new Date());

  await setDoc(songReference, {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return {
    ...payload,
    createdAt: new Date(),
    updatedAt: new Date(),
  } satisfies SongLibraryRecord;
}

export async function updateSongLibraryItem(songId: string, input: UpdateSongLibraryInput) {
  const songReference = doc(getSongLibraryCollection(), songId);
  const payload = buildSongLibraryPayload(songId, input, input.createdAt);

  await updateDoc(songReference, {
    ...payload,
    updatedAt: serverTimestamp(),
  });

  return {
    ...payload,
    updatedAt: new Date(),
  } satisfies SongLibraryRecord;
}

export async function deleteSongLibraryItem(songId: string) {
  await deleteDoc(doc(firestoreDb, "songLibrary", songId));
}