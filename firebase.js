// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9PjpXGVDdJ0uMyzUeh3I6jVy-TVezKJg",
  authDomain: "inventory-management-e672f.firebaseapp.com",
  projectId: "inventory-management-e672f",
  storageBucket: "inventory-management-e672f.appspot.com",
  messagingSenderId: "365452724511",
  appId: "1:365452724511:web:471aca538706484d95882a",
  measurementId: "G-0LXE7FWWCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
