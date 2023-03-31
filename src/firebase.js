// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";    
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLxmoMCTtQ1giRhBIaLQx-nj-WCHonjrY",
  authDomain: "chat-app-with-react-js.firebaseapp.com",
  projectId: "chat-app-with-react-js",
  storageBucket: "chat-app-with-react-js.appspot.com",
  messagingSenderId: "812246114139",
  appId: "1:812246114139:web:c2f5ba547cc6bc029b047e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)