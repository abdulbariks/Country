import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const Products = () => {
  const [products, setProducts] = useState([]);
  const handleProduct = (newProduct) => {
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  };
  return (
    <div className="grid grid-cols-2">
      <ProductForm handleProduct={handleProduct}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default Products;
