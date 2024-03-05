import React, { useState } from "react";

const UpdateModal = ({
  product,
  toggleUpdateProductModal,
  onUpdateProduct,
}) => {
  const [currentProduct, setCurrentProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProduct(currentProduct);
    toggleUpdateProductModal();
  };

  return (
    <div>
      <div className="mb-3">
        {/* <label htmlFor="exampleFormControlInput1" className="form-label">
          Edit Product
        </label> */}
        <input
          type="text"
          className="form-control mt-3"
          name="name"
          placeholder="Product Name"
          value={currentProduct.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        {/* <label htmlFor="exampleFormControlInput1" className="form-label">
          Product price
        </label> */}
        <input
          type="number"
          className="form-control"
          name="price"
          placeholder="Product price"
          value={currentProduct.price}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        {/* <label htmlFor="exampleFormControlInput1" className="form-label">
          Image url
        </label> */}
        <input
          type="text"
          className="form-control"
          name="image"
          placeholder="Image url"
          value={currentProduct.image}
          onChange={handleChange}
        />
      </div>
      {/*evenly distribute this two button*/}
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-secondary col-5"
          onClick={toggleUpdateProductModal}
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-primary col-5"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UpdateModal;
