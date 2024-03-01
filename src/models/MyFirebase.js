// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function MyFirebase() {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAvEpU6_CjAmWwnf2s6guawjWI6brPOwT4",
    authDomain: "shoppingcart-79404.firebaseapp.com",
    projectId: "shoppingcart-79404",
    storageBucket: "shoppingcart-79404.appspot.com",
    messagingSenderId: "984852353278",
    appId: "1:984852353278:web:f3850b3cf7890a552b95af",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const me = {};

  me.app = app;
}

const MyFirebase = new MyFirebase();

export default MyFirebase;
