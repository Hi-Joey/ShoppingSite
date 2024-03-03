// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  addDoc,
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
  let products = [];

  const me = {};

  me.getProducts = async () => {
    // clear the products array

    console.log("getProducts");
    console.log("firebase_start:", products.length);

    const productsRef = collection(db, "Products");
    // https://stackoverflow.com/questions/46590155/firestore-permission-denied-missing-or-insufficient-permissions

    const q = query(productsRef, orderBy("name", "asc"));
    const querySnapshot = await getDocs(q);

    products = [];
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      product.id = doc.id;
      products.push(product);
    });

    console.log("firebase_length:", products.length);
    return products;
  };

  //select a range of products
  me.getProductsRange = (start, end) => {
    // console.log("getProductsRange");
    // const productsRef = collection(db, "Products");
    // get products order by created date
    //const q = query(productsRef, orderBy("_createTime", "desc"));
    // const q = query(productsRef);
    // const querySnapshot = await getDocs(q);
    // console.log("querySnapshot", querySnapshot);
    // const products = [];

    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    //   const product = doc.data();
    //   product.id = doc.id;
    //   products.push(product);
    // });
    console.log("start", start);
    console.log("end", end);
    console.log("products_slice", products.slice(start, end));
    return [products.slice(start, end), products.length];
  };

  me.addProduct = async (product) => {
    console.log("addProduct", product);
    const docRef = await addDoc(collection(db, "Products"), product);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  };

  return me;
}

export const myFirebase = new MyFirebase();
