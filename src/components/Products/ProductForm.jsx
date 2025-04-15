import React, { useState } from "react";

const ProductForm = ({ handleProduct }) => {
  const [error, setError] = useState("");

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // validation
    if (name.length === 0) {
      setError("Please provide a product name");
      return;
    } else if (price.length === 0) {
      setError("Please provide a price");
      return;
    } else if (price < 0) {
      setError("Price can not be negative");
      return;
    } else {
      setError("");
    }

    const newProduct = {
      name,
      price,
      quantity,
    };
    // console.log(newProduct)

    handleProduct(newProduct);
  };
  return (
    <div>
      <h3>Add a Product</h3>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="Product Price" />
        <br />
        <input type="text" name="quantity" placeholder="Product Quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p className="text-red-600">
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
