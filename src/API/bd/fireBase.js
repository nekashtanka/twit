// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase/compat/app";
import { collection, addDoc, getDocs } from "firebase/firestore";
// import { getSession } from "./session";

// Required for side-effects
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(app);// eslint-disable-next-line
const auth = getAuth();

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
}

export async function getPosts() { // eslint-disable-next-line
  const auth = getAuth();
  const querySnapshot = await getDocs(collection(db, "posts"));
  const posts = [];
  querySnapshot.forEach((doc, index) => {
    posts.push({
      id: doc.data().index,
      data: doc.data(),
    });
  });
  posts.sort((a, b) => b.id - a.id);
  return posts;
}

export async function createPost(text, user, index) { // eslint-disable-next-line
  const auth = getAuth();
  try { // eslint-disable-next-line
    const docRef = await addDoc(collection(db, "posts"), {
      user: user,
      index: index,
      text: text,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}