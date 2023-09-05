// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVhtlRQmXwNpEKedmbeo3pOvZmsgM6bwg",
  authDomain: "sidetwit-b222a.firebaseapp.com",
  projectId: "sidetwit-b222a",
  storageBucket: "sidetwit-b222a.appspot.com",
  messagingSenderId: "896350204760",
  appId: "1:896350204760:web:94aeb21802ef2a87eaab2d",
  measurementId: "G-4KNVMR84ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
}