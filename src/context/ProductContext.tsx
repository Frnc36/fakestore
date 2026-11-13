import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { productType } from "../types/productType";
import { getProducts } from "../services/ProductsSevice";

interface ProductContextType {
  /* Provider value-jába biztos be kell írni */
  productsList: productType[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [productsList, setProductsList] = useState<productType[]>([]);

  //useEffect Hook - megtudod mondani hogy mikor fusson le
  useEffect(() => {
    getProducts().then((data) => setProductsList(data));
  }, []); //,[] mellék hatásokat kezeli

  return (
    <ProductContext.Provider value={{ productsList }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("Csak a productProvider-en belül használható");
  }
  return context;
}
