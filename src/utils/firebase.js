// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYOxfy47gVf4IqVWf17K_uih4uFl6TlAI",
  authDomain: "netflixgpt-420b8.firebaseapp.com",
  projectId: "netflixgpt-420b8",
  storageBucket: "netflixgpt-420b8.firebasestorage.app",
  messagingSenderId: "711164889155",
  appId: "1:711164889155:web:c6b4bc342eed573254ecf6",
  measurementId: "G-5SX1NJC5S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();