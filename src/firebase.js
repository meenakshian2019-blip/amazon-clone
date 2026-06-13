import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGxB5uNlz7WlW_5b-JzA-mFbICjjkfrpA",
  authDomain: "challenge-ac109.firebaseapp.com",
  projectId: "challenge-ac109",
  storageBucket: "challenge-ac109.firebasestorage.app",
  messagingSenderId: "458165004336",
  appId: "1:458165004336:web:966524e6b0886cb82fe5f5",
  measurementId: "G-CL7Y20MDEZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };