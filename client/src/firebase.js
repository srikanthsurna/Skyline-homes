// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lens-ce837.firebaseapp.com",
  projectId: "lens-ce837",
  storageBucket: "lens-ce837.appspot.com",
  messagingSenderId: "708163797046",
  appId: "1:708163797046:web:df863ae8cb8632ffac9897",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
