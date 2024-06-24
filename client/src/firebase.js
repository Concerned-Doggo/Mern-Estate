// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a3fb1.firebaseapp.com",
  projectId: "mern-estate-a3fb1",
  storageBucket: "mern-estate-a3fb1.appspot.com",
  messagingSenderId: "1046299034385",
  appId: "1:1046299034385:web:72b1cda416360c7a1e82b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
