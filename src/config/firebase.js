import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByd-Q18JkoZpi7ZtCH9CxSSxSMPZVDPME",
  authDomain: "klims-64594.firebaseapp.com",
  projectId: "klims-64594",
  storageBucket: "klims-64594.appspot.com",
  messagingSenderId: "1013448551924",
  appId: "1:1013448551924:web:28a0054bbee91e194edda1",
  measurementId: "G-SS0GE1F1KE",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBMDSAvDDO4gdPRg8yVeujplW14YOP58mM",
//   authDomain: "klims-fefb-befb-dev-7b4a7.firebaseapp.com",
//   projectId: "klims-fefb-befb-dev-7b4a7",
//   storageBucket: "klims-fefb-befb-dev-7b4a7.appspot.com",
//   messagingSenderId: "1027067126001",
//   appId: "1:1027067126001:web:261683d5a9345ce0f58950",
//   measurementId: "G-5WBRLEJ9R7",
// };

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBMDSAvDDO4gdPRg8yVeujplW14YOP58mM",
//   authDomain: "klims-fefb-befb-dev-7b4a7.firebaseapp.com",
//   projectId: "klims-fefb-befb-dev-7b4a7",
//   storageBucket: "klims-fefb-befb-dev-7b4a7.appspot.com",
//   messagingSenderId: "1027067126001",
//   appId: "1:1027067126001:web:261683d5a9345ce0f58950",
//   measurementId: "G-5WBRLEJ9R7",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
