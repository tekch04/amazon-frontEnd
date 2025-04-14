
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA17i0FMpJQcFkr-nn5CFqOYfpbRFKukt8",
  authDomain: "e-clone-e8a4d.firebaseapp.com",
  projectId: "e-clone-e8a4d",
  storageBucket: "e-clone-e8a4d.firebasestorage.app",
  messagingSenderId: "789801583177",
  appId: "1:789801583177:web:2d46b59376a7beecde7598"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()