import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const baseFirebaseConfig = {
  apiKey: "AIzaSyA1SSHyqPe0qUodvjLEsLof0mUN-Z70Hqc",
  authDomain: "vocalsalvosporcristo-70e5f.firebaseapp.com",
  databaseURL: "https://vocalsalvosporcristo-70e5f-default-rtdb.firebaseio.com",
  projectId: "vocalsalvosporcristo-70e5f",
  storageBucket: "vocalsalvosporcristo-70e5f.firebasestorage.app",
  messagingSenderId: "867220919903",
  appId: "1:867220919903:web:b769416ea3d76bb508adea",
  measurementId: "G-MPT7K3FKVL",
};

function normalizeStorageBucketName(value: string) {
  return value
    .trim()
    .replace(/^gs:\/\//i, "")
    .replace(/^https?:\/\/firebasestorage\.googleapis\.com\/v0\/b\//i, "")
    .replace(/^https?:\/\/storage\.googleapis\.com\//i, "")
    .replace(/\/.*$/, "");
}

function isPrivateNetworkHost(hostname: string) {
  if (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "0.0.0.0"
  ) {
    return true;
  }

  if (/^192\.168\./.test(hostname)) {
    return true;
  }

  if (/^10\./.test(hostname)) {
    return true;
  }

  const privateRange172 = hostname.match(/^172\.(\d{1,3})\./);

  if (privateRange172) {
    const subnet = Number(privateRange172[1]);
    return subnet >= 16 && subnet <= 31;
  }

  return false;
}

const firebaseConfig = {
  ...baseFirebaseConfig,
  authDomain: baseFirebaseConfig.authDomain,
};

export const firebaseStorageBuckets = Array.from(new Set([
  normalizeStorageBucketName(baseFirebaseConfig.storageBucket),
  `${baseFirebaseConfig.projectId}.appspot.com`,
  `${baseFirebaseConfig.projectId}.firebasestorage.app`,
].filter(Boolean)));

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestoreDb = getFirestore(firebaseApp);
export const realtimeDb = getDatabase(firebaseApp);

export function getFirebaseStorage(bucketName = firebaseStorageBuckets[0]) {
  return getStorage(firebaseApp, `gs://${bucketName}`);
}

export const firebaseStorage = getFirebaseStorage();

void setPersistence(firebaseAuth, browserLocalPersistence).catch(() => undefined);

export const firebaseAnalyticsPromise =
  typeof window === "undefined"
    ? Promise.resolve(null)
    : isPrivateNetworkHost(window.location.hostname)
      ? Promise.resolve(null)
    : isSupported()
        .then((supported) => (supported ? getAnalytics(firebaseApp) : null))
        .catch(() => null);

export { firebaseConfig };