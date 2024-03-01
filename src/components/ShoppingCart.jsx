import React from "react";
import PropTypes from "prop-types";

export default function ShoppingCart({ productsToBuy }) {
  const renderProductToBuy = (product, i) => (
    <li key={i}>
      {product.name} ${product.price}{" "}
      <button className="btn btn-sm btn-outline-danger"> - </button>
    </li>
  );
  return (
    <div>
      <ul>{productsToBuy.map(renderProductToBuy)}</ul>
      Total: ${productsToBuy.reduce((acc, product) => acc + product.price, 0)}
    </div>
  );
}

ShoppingCart.propTypes = {
  productsToBuy: PropTypes.array.isRequired,
};
