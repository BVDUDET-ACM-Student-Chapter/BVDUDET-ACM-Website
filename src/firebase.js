// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPrlP0uZamG-PeHClTQQ5Z_55rjRdkj3o",
  authDomain: "bvdudet-acm-sc.firebaseapp.com",
  projectId: "bvdudet-acm-sc",
  storageBucket: "bvdudet-acm-sc.appspot.com",
  messagingSenderId: "1033980186632",
  appId: "1:1033980186632:web:2aca031907679bfe0ec1bd",
  measurementId: "G-8TJ4NM2HX3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
