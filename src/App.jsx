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
      image: "https://via.placeholder.com/200",
    },
  ]);

  const [productsLength, setProductsLength] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [productsToBuy, setProductsToBuy] = useState([]);

  // add a new product
  const onAddProduct = async (product) => {
    await myFirebase.addProduct(product);

    // refresh the products
    await myFirebase.getProducts();
    setProductPage(currentPage);
  };

  // delete a product
  const onDeleteProduct = async (id) => {
    await myFirebase.deleteProduct(id);

    // refresh the products
    await myFirebase.getProducts();
    setProductPage(currentPage);
  };

  // update a product
  const onUpdateProduct = async (product) => {
    await myFirebase.updateProduct(product);

    // refresh the products
    await myFirebase.getProducts();
    setProductPage(currentPage);
  };

  // add product to the shopping cart
  const onAddProductToBuy = (product) => {
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

    // console.log("page length", length);
    // console.log("page", page);
    setProducts(products);
    setProductsLength(length);
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="row">
        <h1
          className="display-3 d-flex justify-content-center"
          style={{ color: "#9195F6" }}
        >
          Yang's Shopping Site
        </h1>
        <div className="col-8">
          <ProductsList
            products={products}
            onAddProductToBuy={onAddProductToBuy}
            onDeleteProduct={onDeleteProduct}
            onUpdateProduct={onUpdateProduct}
          />
          <Pagination
            pageCount={Math.ceil(productsLength / pageSize)}
            currentPage={currentPage}
            setProductPage={setProductPage}
          />

          {/*Add a new form */}
          <h2 className="mb-3">Add Product</h2>
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
