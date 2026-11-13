import React from "react";
import { useProductContext } from "../context/ProductContext";

function Products() {
  const { productsList, load, error } = useProductContext();

  if (load) {
    return <p>Termékek betöltése...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return <div>Products</div>;
}

export default Products;
