import { useState } from "react";
import type { CartItem } from "../../../entities/cart-item/model/types";
import type { Product } from "../../../entities/product/model/types";

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);

      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        );
      }

      return [...prev, { product, quantity }];
    });
  };

  const totalCount = items.reduce((sum, i) => {
    return sum + i.quantity;
  }, 0);

  const totalPrice = items.reduce((sum, i) => {
    return sum + i.quantity * i.product.price;
  }, 0);

  const increaseQuantity = (productId: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    );
  };

  const decreaseQuantity = (productId: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.product.id === productId ? { ...i, quantity: i.quantity - 1 } : i,
        )
        .filter((i) => i.quantity > 0),
    );
  };

  return {
    items,
    addToCart,
    totalCount,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
  };
};
