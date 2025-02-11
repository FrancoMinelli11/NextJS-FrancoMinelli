// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIVskxsNTUJPo2-uBXCtFYEtS7VCkSUlo",
  authDomain: "nextjs-francominelli.firebaseapp.com",
  projectId: "nextjs-francominelli",
  storageBucket: "nextjs-francominelli.firebasestorage.app",
  messagingSenderId: "228153379575",
  appId: "1:228153379575:web:f51c08d39420ed825661f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);