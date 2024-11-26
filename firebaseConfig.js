import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDXmGy8BiVGxPFVD-Fa6GJ1zbl4PkELtCA",
  authDomain: "bsit3cg13firebaseintegration.firebaseapp.com",
  databaseURL:
    "https://bsit3cg13firebaseintegration-default-rtdb.firebaseio.com",
  projectId: "bsit3cg13firebaseintegration",
  storageBucket: "bsit3cg13firebaseintegration.firebasestorage.app",
  messagingSenderId: "674088539688",
  appId: "1:674088539688:web:64b2bbaa90f3302f08071d",
  measurementId: "G-7080M52P62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);
export const auth = getAuth(app);

export { db, rtdb };
