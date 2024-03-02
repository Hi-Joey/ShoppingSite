// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

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

  me.getProducts = async () => {
    console.log("getProducts");
    const productsRef = collection(db, "Products");
    // https://stackoverflow.com/questions/46590155/firestore-permission-denied-missing-or-insufficient-permissions
    const querySnapshot = await getDocs(productsRef);

    const products = querySnapshot.docs.map((doc) => {
      return doc.data();
    });

    return products;

    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });
  };

  //select a range of products
  me.getProductsRange = async (start, end) => {
    console.log("getProductsRange");
    const productsRef = collection(db, "Products");
    const querySnapshot = await getDocs(productsRef);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });

    return [products.slice(start, end), products.length];
  };

  return me;
}

export const myFirebase = new MyFirebase();
