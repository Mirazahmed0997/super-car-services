// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwAILZ6mEmtIrTc14udORcrqjbA6qskjc",
  authDomain: "super-car-services-c1f39.firebaseapp.com",
  projectId: "super-car-services-c1f39",
  storageBucket: "super-car-services-c1f39.appspot.com",
  messagingSenderId: "115424124741",
  appId: "1:115424124741:web:7b8689ba25e833e90f682c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app