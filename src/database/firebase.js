// import firebase from 'firebase/app';
import {getAuth} from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLsCPmK4dMydOPTp8ixT6OaLmEz6D9ZtY",
  authDomain: "furni-store-75ca8.firebaseapp.com",
  projectId: "furni-store-75ca8",
  storageBucket: "furni-store-75ca8.appspot.com",
  messagingSenderId: "423598680316",
  appId: "1:423598680316:web:ddb3542002ea245b4e4f79",
  measurementId: "G-D0B37HNT6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);