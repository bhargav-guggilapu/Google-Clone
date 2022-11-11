import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkw0XegnhROXU9mJemO6uLf2Bo_LAMkMc",
  authDomain: "measurement-46729.firebaseapp.com",
  databaseURL: "https://measurement-46729-default-rtdb.firebaseio.com",
  projectId: "measurement-46729",
  storageBucket: "measurement-46729.appspot.com",
  messagingSenderId: "1055170127903",
  appId: "1:1055170127903:web:b521e7bffb216bfbcc8d2a",
  measurementId: "G-VLTD5Y8JKW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
