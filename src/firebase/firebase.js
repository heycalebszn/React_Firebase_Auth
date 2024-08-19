// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5rNjQKnJ9vPEJEJadQ8p9aET8rXCGxAs",
  authDomain: "react-auth-ba567.firebaseapp.com",
  projectId: "react-auth-ba567",
  storageBucket: "react-auth-ba567.appspot.com",
  messagingSenderId: "1074207232843",
  appId: "1:1074207232843:web:7cec6e6ff0f0dc7d2bcece",
  measurementId: "G-6MVHPH4D7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };