// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "notes-e725d.firebaseapp.com",
  projectId: "notes-e725d",
  storageBucket: "notes-e725d.firebasestorage.app",
  messagingSenderId: "424038777159",
  appId: "1:424038777159:web:8994258fc691354b9d8c62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
