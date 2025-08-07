
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYHtebI_cNJYkdsQ-VWoluPjyWVogMp30",
  authDomain: "headphones-e18c6.firebaseapp.com",
  projectId: "headphones-e18c6",
  storageBucket: "headphones-e18c6.firebasestorage.app",
  messagingSenderId: "932248042461",
  appId: "1:932248042461:web:0faf3d20c8f986c792d434",
  measurementId: "G-BWF0403PK4"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

