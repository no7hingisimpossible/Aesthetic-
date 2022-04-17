// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBCiuXDISPnmSmCLQTsj3AU2SfzjGg8xw",
  authDomain: "aesthetic-b24f5.firebaseapp.com",
  projectId: "aesthetic-b24f5",
  storageBucket: "aesthetic-b24f5.appspot.com",
  messagingSenderId: "775677982442",
  appId: "1:775677982442:web:7962b70f10521d81574993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app; 