import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firestoreDb } from "../config/firebase";

export type HomePostMediaKind = "image" | "video";

export type HomePostMediaRecord = {
  name: string;
  url: string;
  path: string;
  contentType: string;
  sizeBytes: number;
  kind: HomePostMediaKind;
};

export type HomeCommentRecord = {
  id: string;
  author: string;
  role: string;
  text: string;
  createdAt: string;
  createdByUid: string;
};

export type AgendaEventRecord = {
  id: string;
  kind: string;
  title: string;
  scheduledDate: string;
  time: string;
  location: string;
  note: string;
  author: string;
  createdByUid: string;
  comments: HomeCommentRecord[];
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type HomePostRecord = {
  id: string;
  category: string;
  title: string;
  content: string;
  author: string;
  role: string;
  imageUrl: string;
  mediaItems?: HomePostMediaRecord[];
  expirationDays: number;
  createdByUid: string;
  likedByUids: string[];
  comments: HomeCommentRecord[];
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type CreateAgendaEventInput = {
  kind: string;
  title: string;
  scheduledDate: string;
  time: string;
  location: string;
  note: string;
  author: string;
  createdByUid: string;
};

export type CreateHomePostInput = {
  id?: string;
  category: string;
  title: string;
  content: string;
  author: string;
  role: string;
  imageUrl: string;
  mediaItems?: HomePostMediaRecord[];
  expirationDays: number;
  createdByUid: string;
};

function getAgendaEventsCollection() {
  return collection(firestoreDb, "agendaEvents");
}

function getHomePostsCollection() {
  return collection(firestoreDb, "homePosts");
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

export async function listAgendaEvents() {
  const snapshot = await getDocs(getAgendaEventsCollection());

  return snapshot.docs
    .map((document) => document.data() as AgendaEventRecord)
    .sort((left, right) => `${left.scheduledDate}|${left.time}`.localeCompare(`${right.scheduledDate}|${right.time}`));
}

export async function listHomePosts() {
  const snapshot = await getDocs(getHomePostsCollection());

  return snapshot.docs
    .map((document) => document.data() as HomePostRecord)
    .sort((left, right) => resolveTimestampValue(right.createdAt) - resolveTimestampValue(left.createdAt));
}

export async function createAgendaEvent(input: CreateAgendaEventInput) {
  const agendaReference = doc(getAgendaEventsCollection());
  const payload: AgendaEventRecord = {
    id: agendaReference.id,
    kind: input.kind,
    title: input.title,
    scheduledDate: input.scheduledDate,
    time: input.time,
    location: input.location,
    note: input.note,
    author: input.author,
    createdByUid: input.createdByUid,
    comments: [],
  };

  await setDoc(agendaReference, {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return {
    ...payload,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export async function createHomePost(input: CreateHomePostInput) {
  const postReference = input.id ? doc(getHomePostsCollection(), input.id) : doc(getHomePostsCollection());
  const payload: HomePostRecord = {
    id: postReference.id,
    category: input.category,
    title: input.title,
    content: input.content,
    author: input.author,
    role: input.role,
    imageUrl: input.imageUrl,
    mediaItems: input.mediaItems || [],
    expirationDays: input.expirationDays,
    createdByUid: input.createdByUid,
    likedByUids: [],
    comments: [],
  };

  await setDoc(postReference, {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return {
    ...payload,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export async function addAgendaEventComment(eventId: string, comment: HomeCommentRecord) {
  await updateDoc(doc(firestoreDb, "agendaEvents", eventId), {
    comments: arrayUnion(comment),
    updatedAt: serverTimestamp(),
  });
}

export async function addHomePostComment(postId: string, comment: HomeCommentRecord) {
  await updateDoc(doc(firestoreDb, "homePosts", postId), {
    comments: arrayUnion(comment),
    updatedAt: serverTimestamp(),
  });
}

export async function toggleHomePostLike(postId: string, userUid: string, shouldLike: boolean) {
  await updateDoc(doc(firestoreDb, "homePosts", postId), {
    likedByUids: shouldLike ? arrayUnion(userUid) : arrayRemove(userUid),
    updatedAt: serverTimestamp(),
  });
}

export async function deleteAgendaEvent(eventId: string) {
  await deleteDoc(doc(firestoreDb, "agendaEvents", eventId));
}

export async function deleteHomePost(postId: string) {
  await deleteDoc(doc(firestoreDb, "homePosts", postId));
}