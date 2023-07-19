// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu6GeaNRQuvD2-qCXXiouPT1QF9bGoFLk",
  authDomain: "social-app-b8893.firebaseapp.com",
  projectId: "social-app-b8893",
  storageBucket: "social-app-b8893.appspot.com",
  messagingSenderId: "529322291561",
  appId: "1:529322291561:web:4c021283339375c26b0df8",
  measurementId: "G-L4559YCWEV"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

