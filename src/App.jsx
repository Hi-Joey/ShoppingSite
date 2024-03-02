import "./App.css";

import React, { useEffect, useState } from "react";

import ProductsList from "./components/ProductsList.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import Pagination from "./components/Pagination.jsx";

import CreateProductForm from "./components/CreateProductForm.jsx";
import { myFirebase } from "./models/MyFirebase";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [productsToBuy, setProductsToBuy] = useState([]);

  const onAddProduct = () => {
    setProducts([
      ...products,
      {
        id: products.at(-1).id + 1,
        name: `Product ${products.length + 1}`,
        price: 400,
        image: "https://via.placeholder.com/150",
      },
    ]);
  };

  const onAddProductToBuy = (product) => {
    console.log(product);
    setProductsToBuy([...productsToBuy, product]);
  };

  // load products from firebase when the component is loaded
  useEffect(() => {
    const getProducts = async () => {
      const products = await myFirebase.getProducts();
      console.log(products);
      setProducts(products);
    };

    getProducts();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h1>Basic Shopping Site</h1>

          <ProductsList
            products={products}
            onAddProductToBuy={onAddProductToBuy}
          />

          {/*Add a new form */}

          <CreateProductForm onAddProduct={onAddProduct} />
        </div>
        {/* col-8 */}

        <div className="col-4">
          <h2>Shopping Cart</h2>
          <ShoppingCart productsToBuy={productsToBuy} />
        </div>

        {/* <button
          onClick={async () => {
            const products = await myFirebase.getProducts();
            console.log(products);
          }}
        >
          Get Documents
        </button> */}

        <Pagination />
      </div>
    </div>
  );
}
