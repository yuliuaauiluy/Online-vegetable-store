import { useEffect, useState } from "react";
import { getProducts } from "../../../entities/product/api/getProducts";
import { ProductList } from "../../../widgets/product-list/ui/ProductList";
import type { Product } from "../../../entities/product/model/types";

export const VegetableCatalogPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error(error);
        } finally {setIsLoading(false);}
    };

    loadProducts();
  }, []);

  return (
  <div>
    <ProductList isLoading={isLoading} products={products}/>
  </div>
);
};
