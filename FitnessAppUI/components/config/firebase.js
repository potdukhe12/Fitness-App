// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtTYoOILjaDAJIOC-yLFThn0RaNh3xsKc",
  authDomain: "testfitness-b4aee.firebaseapp.com",
  projectId: "testfitness-b4aee",
  storageBucket: "testfitness-b4aee.appspot.com",
  messagingSenderId: "715427926944",
  appId: "1:715427926944:web:c43e1166711c9d3c080ac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);