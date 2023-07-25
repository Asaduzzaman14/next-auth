// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLWJbST9NzOVOo7_cR_U9H8o8tP4j78kI",
    authDomain: "next-auth-10538.firebaseapp.com",
    projectId: "next-auth-10538",
    storageBucket: "next-auth-10538.appspot.com",
    messagingSenderId: "445332108882",
    appId: "1:445332108882:web:88b81349261d5507d2118b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)