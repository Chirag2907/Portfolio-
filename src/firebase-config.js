import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyCRH3p2XALhpLA99XEW0v_oqoacSxSZvNI",
    authDomain: "portfolio-a83da.firebaseapp.com",
    projectId: "portfolio-a83da",
    storageBucket: "portfolio-a83da.appspot.com",
    messagingSenderId: "21555120746",
    appId: "1:21555120746:web:2ee4a2473f314e983a9813",
    measurementId: "G-ZS908B4W2V"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
