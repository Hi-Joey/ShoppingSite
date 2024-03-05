import PropTypes from "prop-types";
import React, { useState } from "react";
import UpdateModal from "./UpdateModal";

export default function Product({
  product,
  onAddProductToBuy,
  onDeleteProduct,
  onUpdateProduct,
}) {
  const [showEditModal, setShowEditModal] = useState(false);
  const onAddToCart = () => {
    onAddProductToBuy(product);
  };

  const onDelete = () => {
    onDeleteProduct(product.id);
  };

  const toggleUpdateProductModal = () => {
    setShowEditModal(!showEditModal);
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
        {/* edit product */}
        <button
          className="btn btn-outline-warning btn-sm mt-2"
          onClick={toggleUpdateProductModal}
        >
          Edit Product
        </button>
        {showEditModal && (
          <UpdateModal
            product={product}
            toggleUpdateProductModal={toggleUpdateProductModal}
            onUpdateProduct={onUpdateProduct}
          />
        )}
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  onAddProductToBuy: PropTypes.func.isRequired,
};
