 import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlcndoBSCytA0ODfyQr0NUSRTOQ1vo6-8",
  authDomain: "sharekind-d85f7.firebaseapp.com",
  projectId: "sharekind-d85f7",
  storageBucket: "sharekind-d85f7.firebasestorage.app",
  messagingSenderId: "884468925932",
  appId: "1:884468925932:web:bac852085320cedbe12cc9",
  measurementId: "G-HMZ9M34PWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)