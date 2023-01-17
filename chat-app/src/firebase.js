import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCK0uM-u_kh6Q_rNEz6YzoFz9xf4od-sp4",
  authDomain: "react-chat-app-34665.firebaseapp.com",
  projectId: "react-chat-app-34665",
  storageBucket: "react-chat-app-34665.appspot.com",
  messagingSenderId: "409279498507",
  appId: "1:409279498507:web:70ec6fa6628cfff562fa0e"
};


export const app = initializeApp(firebaseConfig);


export const auth = getAuth();

export const storage = getStorage();

export const db = getFirestore();

