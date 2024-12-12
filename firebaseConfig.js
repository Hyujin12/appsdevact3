import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB1iLVZ5gnZ8I53_n5sYMUkbaMLktu3uiM",
  authDomain: "appsdevxhci-finals-project.firebaseapp.com",
  databaseURL: "https://appsdevxhci-finals-project-default-rtdb.firebaseio.com",
  projectId: "appsdevxhci-finals-project",
  storageBucket: "appsdevxhci-finals-project.firebasestorage.app",
  messagingSenderId: "484556920052",
  appId: "1:484556920052:web:c41bde716923e81381faa1",
  measurementId: "G-HLZFQVNZHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);
export const auth = getAuth(app);

export { db, rtdb };
