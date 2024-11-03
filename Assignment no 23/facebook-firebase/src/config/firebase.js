import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACk6vhYArnbG9WAT9Lvr_vOtBu2T3cQ3g",
  authDomain: "social-media-app-2466a.firebaseapp.com",
  projectId: "social-media-app-2466a",
  storageBucket: "social-media-app-2466a.appspot.com",
  messagingSenderId: "567062948641",
  appId: "1:567062948641:web:cfce786a7c985d0b31ac60",
  measurementId: "G-27Y6PP2MY9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);







