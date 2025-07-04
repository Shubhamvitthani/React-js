// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCDV6pbzs7Q3m0_4vFXeoBo-AVvhADlwfo",
  authDomain: "todo-firebase-storage-e5eb3.firebaseapp.com",
  databaseURL: "https://todo-firebase-storage-e5eb3-default-rtdb.firebaseio.com",
  projectId: "todo-firebase-storage-e5eb3",
  storageBucket: "todo-firebase-storage-e5eb3.firebasestorage.app",
  messagingSenderId: "492781526508",
  appId: "1:492781526508:web:4572b78139fa04b28d34c9",
  measurementId: "G-4415QTQG5N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);