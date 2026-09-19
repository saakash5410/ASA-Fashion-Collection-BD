// Firebase config for ASA Fashion Collection BD
// Safe to include in a browser app. Do NOT put Firebase Admin SDK/service-account keys here.
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyBmQedq3qJbjZE9CVC3CvTPT24AKG6MXM8",
  authDomain: "asa-fashion-collection-bd.firebaseapp.com",
  projectId: "asa-fashion-collection-bd",
  storageBucket: "asa-fashion-collection-bd.firebasestorage.app",
  messagingSenderId: "562630931603",
  appId: "1:562630931603:web:98f674dd8fb5d70c844966",
  measurementId: "G-PZR4CK0Z9K"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile, onAuthStateChanged, signOut, doc, setDoc, getDoc, serverTimestamp };
