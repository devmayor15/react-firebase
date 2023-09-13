// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyADzDFSTk7t4No9bjGn_4OqE-R-Q9a7kJw",
  authDomain: "fir-course-17bc6.firebaseapp.com",
  projectId: "fir-course-17bc6",
  storageBucket: "fir-course-17bc6.appspot.com",
  messagingSenderId: "621713474149",
  appId: "1:621713474149:web:d3c710613d229dfb09bc8c",
  measurementId: "G-GJVL4RSMJF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authentication with email
export const auth = getAuth(app);

//Auth with google
export const googleProvider = new GoogleAuthProvider();

//firestore database
export const db = getFirestore(app)

//file storage database
export const storage = getStorage(app);