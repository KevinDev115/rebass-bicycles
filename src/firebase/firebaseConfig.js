import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5aoI6FD2Vt4s-oHtne5ylIZcogvEa9DY",
  authDomain: "bikeshop-a5fd3.firebaseapp.com",
  projectId: "bikeshop-a5fd3",
  storageBucket: "bikeshop-a5fd3.appspot.com",
  messagingSenderId: "401699745782",
  appId: "1:401699745782:web:ad2bbccd8ae4b3507061d7",
  measurementId: "G-6M2K9TVS7Z",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
