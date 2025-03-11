// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPLguJr49wqAusfyowb-pN-eljpnx21ik",
  authDomain: "zapp-web-96b18.firebaseapp.com",
  projectId: "zapp-web-96b18",
  storageBucket: "zapp-web-96b18.firebasestorage.app",
  messagingSenderId: "7668320112",
  appId: "1:7668320112:web:6893c39b4584975c4ff1b5",
  measurementId: "G-TW40H0S3YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};

setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });