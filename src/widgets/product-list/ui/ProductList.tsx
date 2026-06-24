import { Box, SimpleGrid, Text } from "@mantine/core";
import type { Product } from "../../../entities/product/model/types";
import { ProductCard } from "../../../entities/product/ui/ProductCard";
import { Header } from "../../header/ui/Header";
import loaderImg from "../../../assets/loader.svg";

type Props = {
  products: Product[];
  isLoading?: boolean;
};

export const ProductList = ({ products, isLoading }: Props) => {
  const isEmpty = !isLoading && products.length === 0;

  return (
    <>
      <Header />

      <Box mt={60} mb={119} ml={80} mr={80}>
        <h2>Catalog</h2>

        {isLoading && (
          <SimpleGrid cols={4} spacing={24} verticalSpacing={28}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                style={{
                  height: 412,
                  border: "1px solid #E5E5E5",
                  borderRadius: 8,
                  background: "#FFFFFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={loaderImg} alt="Loading" />
              </div>
            ))}
          </SimpleGrid>
        )}

        {isEmpty && (
          <Text c="dimmed" ta="center" mt={40}>
            Товары не найдены
          </Text>
        )}

        {!isLoading && products.length > 0 && (
          <SimpleGrid cols={4} spacing={24} verticalSpacing={28}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </>
  );
};
