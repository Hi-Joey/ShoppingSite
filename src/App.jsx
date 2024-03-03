import "./App.css";

import React, { useEffect, useState } from "react";

import ProductsList from "./components/ProductsList.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import Pagination from "./components/Pagination.jsx";

import CreateProductForm from "./components/CreateProductForm.jsx";
import { myFirebase } from "./models/MyFirebase";

export default function App() {
  const pageSize = 6;

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [productsLength, setProductsLength] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [productsToBuy, setProductsToBuy] = useState([]);

  const onAddProduct = async (product) => {
    console.log("On add product", product);
    await myFirebase.addProduct(product);

    // refresh the products
    await myFirebase.getProducts();
    setProductPage(currentPage);
  };

  const onAddProductToBuy = (product) => {
    console.log(product);
    setProductsToBuy([...productsToBuy, product]);
  };

  // remove product from the shopping cart
  const onRemoveProductToBuy = (index) => {
    setProductsToBuy(productsToBuy.filter((p, i) => index !== i));
  };

  // load products from firebase when the component is loaded
  useEffect(() => {
    const getProductsRange = async () => {
      await myFirebase.getProducts();
      const [products, length] = myFirebase.getProductsRange(0, pageSize);

      console.log("App products length", length);
      setProducts(products);
      setProductsLength(length);
    };

    // getProducts();
    getProductsRange();
  }, []);

  const setProductPage = async (page) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    const [products, length] = myFirebase.getProductsRange(start, end);

    console.log("page length", length);
    console.log("page", page);
    setProducts(products);
    setProductsLength(length);
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="row">
        <h1 className="d-flex justify-content-center">Yang's Shopping Site</h1>
        <div className="col-8">
          <ProductsList
            products={products}
            onAddProductToBuy={onAddProductToBuy}
          />

          <Pagination
            pageCount={Math.ceil(productsLength / pageSize)}
            currentPage={currentPage}
            setProductPage={setProductPage}
          />

          {/*Add a new form */}

          <CreateProductForm onAddProduct={onAddProduct} />
        </div>
        {/* col-8 */}

        <div className="col-4 mt-3">
          <h2>Shopping Cart</h2>
          <ShoppingCart
            productsToBuy={productsToBuy}
            onRemoveProductToBuy={onRemoveProductToBuy}
          />
        </div>

        {/* <button
          onClick={async () => {
            const products = await myFirebase.getProducts();
            console.log(products);
          }}
        >
          Get Documents
        </button> */}

        {/* <Pagination
          pageCount={Math.ceil(productsLength / pageSize)}
          currentPage={currentPage}
          setProductPage={setProductPage}
        /> */}
      </div>
    </div>
  );
}
