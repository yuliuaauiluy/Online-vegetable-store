import {
  Card,
  Stack,
  Image,
  Group,
  Text,
  Button,
  ActionIcon,
} from "@mantine/core";

import type { Product } from "../../../entities/product/model/types";
import { useCartContext } from "../../../features/cart/model/useCartContext";
import { useState } from "react";
import cartIcon from "../../../assets/cart.svg";

type Props = {
  product: Product;
};
export const ProductCard = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();

  return (
    <Card shadow="sm" radius="24" withBorder >
      <Stack >
        <Image src={product.image} />

        <Group justify="space-between">
          <Text fw={500}>{product.name}</Text>

          <Group gap="xs">
            <ActionIcon
              c="black"
              size="md"
              color="#DEE2E6"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
              }}
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              −
            </ActionIcon>

            <Text data-testid="quantity" fw={500}>{quantity}</Text>

            <ActionIcon
              c="black"
              size="md"
              color="#DEE2E6"
              radius={8}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
              }}
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </ActionIcon>
          </Group>
        </Group>

        <Group justify="space-between">
          <Text fw={500}>$ {product.price}</Text>

          <Button
            onClick={() => addToCart(product, quantity)}
            radius="md"
            color="#54B46A"
            h={44}
            w={204}
            rightSection={<img src={cartIcon} alt="" />}
          >
            Add to cart
          </Button>
        </Group>
      </Stack>
    </Card>
  );
};
