// import firebase from "firebase/app";
import "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsox1XZN_iEdfC9mpQgolB1A_OHcQ2vMU",
    authDomain: "goweather-56e5a.firebaseapp.com",
    projectId: "goweather-56e5a",
    storageBucket: "goweather-56e5a.appspot.com",
    messagingSenderId: "1017479253893",
    appId: "1:1017479253893:web:7cb7304dcce03159867eec"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();