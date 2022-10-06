import { useEffect } from "react";
import ProfloU from './pages/proflou/Home'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGxR_y5n_14w3RujLkHx76NnHrzEk9wSM",
  authDomain: "proflou-chic-website.firebaseapp.com",
  projectId: "proflou-chic-website",
  storageBucket: "proflou-chic-website.appspot.com",
  messagingSenderId: "333285904099",
  appId: "1:333285904099:web:8c90b20da7c1a7df26bfd6",
  measurementId: "G-BRJZ72ZJ70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Performance Monitoring and get a reference to the service
const perf = getPerformance(app);

function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])

  return <ProfloU />
}

export default App;
