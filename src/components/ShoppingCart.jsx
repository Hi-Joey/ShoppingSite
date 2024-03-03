import React from "react";
import PropTypes from "prop-types";

export default function ShoppingCart({ productsToBuy, onRemoveProductToBuy }) {
  const removeProductsToBuy = (index) => {
    console.log("Remove from cart:", index);
    // onAddProductToBuy(product);
    onRemoveProductToBuy(index);
  };

  const renderProductToBuy = (product, i) => (
    <li key={i} className="list-group-item">
      <div className="row">
        <div className="col-10">
          {product.name} ${product.price}{" "}
        </div>
        <div className="col-2">
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => removeProductsToBuy(i)}
          >
            -
          </button>
        </div>
      </div>
    </li>
  );
  return (
    <div className="col-8 mt-3">
      <ul class="list-group">{productsToBuy.map(renderProductToBuy)}</ul>
      <div className="mt-3 d-flex justify-content-end">
        Total: $
        {productsToBuy.reduce((acc, product) => acc + +product.price, 0)}
      </div>
    </div>
  );
}

ShoppingCart.propTypes = {
  productsToBuy: PropTypes.array.isRequired,
};
