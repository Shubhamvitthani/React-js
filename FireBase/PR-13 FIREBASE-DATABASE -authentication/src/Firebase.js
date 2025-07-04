import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0C9GnV_1--sJJhhn62jFhHWFgEdKa87U",
  authDomain: "crud-firebase-database-45a2f.firebaseapp.com",
  databaseURL: "https://crud-firebase-database-45a2f-default-rtdb.firebaseio.com",
  projectId: "crud-firebase-database-45a2f",
  storageBucket: "crud-firebase-database-45a2f.appspot.com",
  messagingSenderId: "859999821269",
  appId: "1:859999821269:web:5dea31bf0aff4b05f5b15c",
  measurementId: "G-QZF80XRRNB"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleauth = new GoogleAuthProvider();
const analytics = getAnalytics(app);
