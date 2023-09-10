// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHwEhmSPj5S58mb4i9X4gLjrSrOcy458I",
    authDomain: "reactproject-25c2c.firebaseapp.com",
    databaseURL: "https://reactproject-25c2c-default-rtdb.firebaseio.com",
    projectId: "reactproject-25c2c",
    storageBucket: "reactproject-25c2c.appspot.com",
    messagingSenderId: "331951857231",
    appId: "1:331951857231:web:47b76044d451aced9bd43a"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const Db = getFirestore(App);
export default Db;