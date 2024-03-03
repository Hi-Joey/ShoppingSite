import React from "react";
import PropTypes from "prop-types";

export default function Product({
  product,
  onAddProductToBuy,
  onDeleteProduct,
}) {
  const onAddToCart = () => {
    onAddProductToBuy(product);
  };

  const onDelete = () => {
    onDeleteProduct(product.id);
  };

  return (
    <div className="col-4 mt-3">
      <div className="card ">
        <img src={product.image} alt={product.name} />
        {product.name} ${product.price}
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
        <button
          className="btn btn-outline-danger btn-sm mt-2"
          onClick={onDelete}
        >
          Delete Product
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddProductToBuy: PropTypes.func.isRequired,
};
