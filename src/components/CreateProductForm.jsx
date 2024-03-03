import React, { useRef } from "react";
import PropTypes from "prop-types";

export default function CreateProductForm({ onAddProduct }) {
  // useRef is used to get the value of the input fields
  // or we can use the data from the from input fields
  const nameRef = useRef();
  const priceRef = useRef();
  //   const imageRef = useRef();

  const onAddProductHelper = (e) => {
    e.preventDefault();

    onAddProduct({
      name: nameRef.current.value,
      price: +priceRef.current.value,
      //   image: imageRef.current.value,
      image: "https://picsum.photos/150",
    });
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input type="text" className="form-control" id="name" ref={nameRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            ref={priceRef}
          />
        </div>

        {/* <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Product Image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            ref={imageRef}
          />
        </div> */}
      </form>
      {/* // allign the button to the center */}
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary mb-3" onClick={onAddProductHelper}>
          Add Product
        </button>
      </div>
      {/* <button className="btn btn-primary mb-3" onClick={onAddProductHelper}>
        Add Product
      </button> */}
    </div>
  );
}

CreateProductForm.propTypes = {
  onAddProduct: PropTypes.func.isRequired,
};
