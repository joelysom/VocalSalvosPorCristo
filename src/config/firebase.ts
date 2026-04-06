import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA1SSHyqPe0qUodvjLEsLof0mUN-Z70Hqc",
  authDomain: "vocalsalvosporcristo-70e5f.firebaseapp.com",
  databaseURL: "https://vocalsalvosporcristo-70e5f-default-rtdb.firebaseio.com",
  projectId: "vocalsalvosporcristo-70e5f",
  storageBucket: "vocalsalvosporcristo-70e5f.firebasestorage.app",
  messagingSenderId: "867220919903",
  appId: "1:867220919903:web:b769416ea3d76bb508adea",
  measurementId: "G-MPT7K3FKVL",
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestoreDb = getFirestore(firebaseApp);
export const realtimeDb = getDatabase(firebaseApp);

void setPersistence(firebaseAuth, browserLocalPersistence).catch(() => undefined);

export const firebaseAnalyticsPromise =
  typeof window === "undefined"
    ? Promise.resolve(null)
    : ["localhost", "127.0.0.1"].includes(window.location.hostname)
      ? Promise.resolve(null)
    : isSupported()
        .then((supported) => (supported ? getAnalytics(firebaseApp) : null))
        .catch(() => null);

export { firebaseConfig };