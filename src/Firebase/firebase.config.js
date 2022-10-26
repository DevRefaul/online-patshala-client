// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-mFjAByg6AZ8K8vpQ9EpFEFo-d2YTX5A",
    authDomain: "online-patshala.firebaseapp.com",
    projectId: "online-patshala",
    storageBucket: "online-patshala.appspot.com",
    messagingSenderId: "398116219240",
    appId: "1:398116219240:web:27d614cde0858d5fd24edd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app