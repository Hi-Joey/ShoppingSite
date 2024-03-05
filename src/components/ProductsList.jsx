import PropTypes from "prop-types";

import Product from "./Product";

export default function ProductsList({
  products,
  onAddProductToBuy,
  onDeleteProduct,
  onUpdateProduct,
}) {
  return (
    <>
      <h2 className="mt-3">Products</h2>
      <div className="products row">
        {products.map((p, i) => (
          <Product
            key={i}
            product={p}
            onAddProductToBuy={onAddProductToBuy}
            onDeleteProduct={onDeleteProduct}
            onUpdateProduct={onUpdateProduct}
          ></Product>
        ))}
      </div>
    </>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  onAddProductToBuy: PropTypes.func.isRequired,
};
