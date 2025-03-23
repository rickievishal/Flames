// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 🔥 Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZvYistine6EgWhQ7Q4PdMZpj4A5egLL8",
  authDomain: "loveometer-acb2e.firebaseapp.com",
  projectId: "loveometer-acb2e",
  storageBucket: "loveometer-acb2e.firebasestorage.app",
  messagingSenderId: "413271806917",
  appId: "1:413271806917:web:07855821f0a72d2b66b1ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
const db = getFirestore(app);

export { db }; // 👈 Now you can import `db` anywhere in your app
