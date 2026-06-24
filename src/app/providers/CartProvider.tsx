import { CartContext } from "../../features/cart/model/CartContext";
import { useCart } from "../../features/cart/model/useCart";

type Props = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: Props) => {
  const cart = useCart();

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};