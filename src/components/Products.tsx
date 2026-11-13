import React from "react";
import { useProductContext } from "../context/ProductContext";

function Products() {
  const { productsList } = useProductContext();
  return <div>Products</div>;
}

export default Products;
