import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyBpLI8oX8hjyDh7DIMkuo5n5qTEv2Q5Y_w",
  authDomain: "chatgptclone-2023.firebaseapp.com",
  projectId: "chatgptclone-2023",
  storageBucket: "chatgptclone-2023.appspot.com",
  messagingSenderId: "500572462335",
  appId: "1:500572462335:web:31a9af2ff50e30c4ad40ca"
};

// Initialize Firebase
const app = getApps().lenght ? getApp() : initializeApp(firebaseConfig); 
const db = getFirestore(app);

export { db }