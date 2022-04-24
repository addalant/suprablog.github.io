// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGbDJQzjQnhpEkLJLL3p4AfZCuCIf1Dd4",
  authDomain: "blogsupra-c0280.firebaseapp.com",
  projectId: "blogsupra-c0280",
  storageBucket: "blogsupra-c0280.appspot.com",
  messagingSenderId: "782467825326",
  appId: "1:782467825326:web:e323ca6ad09c24eaa9373f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
