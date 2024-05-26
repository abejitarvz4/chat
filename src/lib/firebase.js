import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWGBENaLvsXI9Ajq2qJFryffgTJNbUN0Q",
  authDomain: "reacchat-20f62.firebaseapp.com",
  projectId: "reacchat-20f62",
  storageBucket: "reacchat-20f62.appspot.com",
  messagingSenderId: "194722137504",
  appId: "1:194722137504:web:2365ea6f11d913181750c5"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()