// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVmkvrpeoHlkSaTfOoYu3cbCe-eg0Svrc",
  authDomain: "stocks-a7d6d.firebaseapp.com",
  projectId: "stocks-a7d6d",
  storageBucket: "stocks-a7d6d.appspot.com",
  messagingSenderId: "101140262142",
  appId: "1:101140262142:web:8b2bf237ed0f84c61d09af",
  measurementId: "G-7V2QMND5VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);