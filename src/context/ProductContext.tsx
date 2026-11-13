import { createContext, useContext, useState, type ReactNode } from "react";
import type { productType } from "../types/productType";

interface ProductContextType {
  /* Provider value-jába biztos be kell írni */
  productsList: productType[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [productsList, sertProductsList] = useState<productType[]>([]);

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
