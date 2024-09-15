// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUSBcK0sDZcKzsQB_ekfKOp4Zu9XmfcI8",
  authDomain: "fir-1frontend.firebaseapp.com",
  projectId: "fir-1frontend",
  storageBucket: "fir-1frontend.appspot.com",
  messagingSenderId: "256325689523",
  appId: "1:256325689523:web:fc58cfda304643f43e10c6",
  measurementId: "G-YTT7Q8HQ8X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);