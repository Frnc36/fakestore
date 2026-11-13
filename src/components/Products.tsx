import { useProductContext } from "../context/ProductContext";
import Product from "./Product";

function Products() {
  const { productsList, load, error } = useProductContext();

  if (load) {
    return <p>Termékek betöltése...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  
  /* MÉ nem ez?
   {productsList.map((e,i)=>{
        return(
            <Product elem={e} index={i} key={i}/>
        )
  })} */
  return (
    <div className="products">
      {productsList.map((product, i) => {
        return <Product product={product} key={i} />;
      })}
    </div>
  );
}

export default Products;
