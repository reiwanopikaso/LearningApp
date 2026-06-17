import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5r6Cl9OF44jOx6q-EUUe7ogotarZ7Cl4",
  authDomain: "target1900-59762.firebaseapp.com",
  projectId: "target1900-59762",
  storageBucket: "target1900-59762.firebasestorage.app",
  messagingSenderId: "413512538501",
  appId: "1:413512538501:web:bc0e72b39d5bd06bd14cec"
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);

// Firestore（データベース）の機能をエクスポート
export const db = getFirestore(app);