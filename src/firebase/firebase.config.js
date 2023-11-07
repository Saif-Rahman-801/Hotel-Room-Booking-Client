// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsE6WbB-bpAodayodvCWo2B2mTRBxjWeM",
  authDomain: "the-grand-bonjour.firebaseapp.com",
  projectId: "the-grand-bonjour",
  storageBucket: "the-grand-bonjour.appspot.com",
  messagingSenderId: "318491388567",
  appId: "1:318491388567:web:b8eeeb1772cde824b897d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;