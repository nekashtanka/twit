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
const db = getFirestore(app);
const auth = getAuth();

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
}

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
}

export async function getPosts() {
  const querySnapshot = await getDocs(collection(db, "posts"));
  const posts = [];
  querySnapshot.forEach((doc) => {
    posts.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  return posts;
}

export async function createPost(text, user) {
  try {
      const docRef = await addDoc(collection(db, "posts"), {
        user: user,
        text: text,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}




// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log('Пользователь аутентифицирован, можно выполнять запросы к Firestore')
//   } else {
//     console.log('Пользователь не аутентифицирован, требуется аутентификация')
//   }
// });
