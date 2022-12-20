import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5KUyZZ2wFMCl1IhV5c2_YLn0xqxytN5g",
  authDomain: "gogreen-af8e3.firebaseapp.com",
  projectId: "gogreen-af8e3",
  storageBucket: "gogreen-af8e3.appspot.com",
  messagingSenderId: "788057950952",
  appId: "1:788057950952:web:37e0a811839feae44fd75d",
  measurementId: "G-V60KLYVC78",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

const db = getFirestore();

export default db;
