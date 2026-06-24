import type { CartItem } from "../../../entities/cart-item/model/types";
import type { Product } from "../../../entities/product/model/types";

export type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  totalCount: number;
  totalPrice: number;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
};
