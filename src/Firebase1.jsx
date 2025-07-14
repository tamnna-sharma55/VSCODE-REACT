
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDPkxysTibEz9Xl3sbdCU4e2cVmp41_EdA",
  authDomain: "tamnna-c8ecf.firebaseapp.com",
  projectId: "tamnna-c8ecf",
  storageBucket: "tamnna-c8ecf.firebasestorage.app",
  messagingSenderId: "276385472642",
  appId: "1:276385472642:web:80e4e409df2c8f73ba149b",
  databaseURL:"https://tamnna-c8ecf-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);