import type { productType } from "../types/productType";

const API_URL = "https://fakestoreapi.com/products  ";

export function getProducts() {
  return fetch(API_URL)
  .then((response) => {
    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }
    return response.json() as Promise<productType[]>;
  }); 
}
