import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkOqmlN0rX4c3_HZdQDw0Vmy9MXuPE9Ro",
  authDomain: "kmovies-e9291.firebaseapp.com",
  projectId: "kmovies-e9291",
  storageBucket: "kmovies-e9291.appspot.com",
  messagingSenderId: "1745708850",
  appId: "1:1745708850:web:f3817bf292a5b8d256d92b",
};

// init app
initializeApp(firebaseConfig);

export const auth = getAuth();
