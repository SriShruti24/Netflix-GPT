// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIRU5Cp1WB9TN2EFguYt3Yd7X1XTNL7uY",
  authDomain: "netflixgpt-eb3d2.firebaseapp.com",
  projectId: "netflixgpt-eb3d2",
  storageBucket: "netflixgpt-eb3d2.firebasestorage.app",
  messagingSenderId: "602013418059",
  appId: "1:602013418059:web:7b64daef6d3d2d8253c3ce",
  measurementId: "G-WH042J13EG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
