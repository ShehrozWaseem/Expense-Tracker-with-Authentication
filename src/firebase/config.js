// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyABLOqT14RSpqfyb_g76s3aYgI6OBZcBOc",
  authDomain: "myexpenses-5f9ad.firebaseapp.com",
  projectId: "myexpenses-5f9ad",
  storageBucket: "myexpenses-5f9ad.appspot.com",
  messagingSenderId: "404015996884",
  appId: "1:404015996884:web:9642339289864e930c4041"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectFirestore  = firebase.firestore()
const projAuth = firebase.auth()
const timeStamp = firebase.firestore.Timestamp

export { projectFirestore, projAuth, timeStamp}