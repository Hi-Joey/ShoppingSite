import React from "react";
import Product from "./Product";

export default function ShoppingCart({ productsToBuy }) {
  return (
    <>
      <h2>ShoppingCart Detail</h2>
      <div className="shoppintcart row">
        {productsToBuy.map((s, i) => (
          <Product key={i} shoppingcart={s}></Product>
        ))}
      </div>
    </>
  );
}
