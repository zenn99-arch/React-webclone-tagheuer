// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATUIqX2HLjuIXlgZw9hQ7cIcCkrBx1OG4",
  authDomain: "proflo-u-2f600.firebaseapp.com",
  databaseURL: "https://proflo-u-2f600-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "proflo-u-2f600",
  storageBucket: "proflo-u-2f600.appspot.com",
  messagingSenderId: "409460955684",
  appId: "1:409460955684:web:8fe20b204612a3f9cc56b1",
  measurementId: "G-EVHRCESZJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);