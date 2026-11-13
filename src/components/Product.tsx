import type { productType } from "../types/productType";

interface ProductProps {
  product: productType;
}

function Product({ product }: ProductProps) {
  return (
    <div className="border" >
      <p>{product.id}</p>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <img src={product.image} alt="Product" />
      <p>{product.rating.rate}</p>
      <p>{product.rating.count}</p>
    </div>
  );
}

export default Product;
