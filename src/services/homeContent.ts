import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firestoreDb } from "../config/firebase";

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

function getAgendaEventsCollection() {
  return collection(firestoreDb, "agendaEvents");
}

export async function listAgendaEvents() {
  const snapshot = await getDocs(getAgendaEventsCollection());

  return snapshot.docs
    .map((document) => document.data() as AgendaEventRecord)
    .sort((left, right) => `${left.scheduledDate}|${left.time}`.localeCompare(`${right.scheduledDate}|${right.time}`));
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

  const createdSnapshot = await getDoc(agendaReference);
  return createdSnapshot.data() as AgendaEventRecord;
}

export async function addAgendaEventComment(eventId: string, comment: HomeCommentRecord) {
  await updateDoc(doc(firestoreDb, "agendaEvents", eventId), {
    comments: arrayUnion(comment),
    updatedAt: serverTimestamp(),
  });
}