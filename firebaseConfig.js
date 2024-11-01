import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXmGy8BiVGxPFVD-Fa6GJ1zbl4PkELtCA",
  authDomain: "bsit3cg13firebaseintegration.firebaseapp.com",
  projectId: "bsit3cg13firebaseintegration",
  storageBucket: "bsit3cg13firebaseintegration.firebasestorage.app",
  messagingSenderId: "674088539688",
  appId: "1:674088539688:web:64b2bbaa90f3302f08071d",
  measurementId: "G-7080M52P62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
