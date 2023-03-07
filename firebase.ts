import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1An5BCecLQmDk_4dGl7AT9e4s2apVPuA",
    authDomain: "chatgpt-messenger-clone-90e5b.firebaseapp.com",
    projectId: "chatgpt-messenger-clone-90e5b",
    storageBucket: "chatgpt-messenger-clone-90e5b.appspot.com",
    messagingSenderId: "79273662351",
    appId: "1:79273662351:web:8afdfb036d5304d5841dfa",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
