// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHf4HhVHn9XjqyF_E4tJk3gohj4b3sJG8",
  authDomain: "step-by-step-f90e1.firebaseapp.com",
  projectId: "step-by-step-f90e1",
  storageBucket: "step-by-step-f90e1.appspot.com",
  messagingSenderId: "255066673008",
  appId: "1:255066673008:web:bfa7060d9819aab1bc89b5",
  measurementId: "G-NR246981YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
