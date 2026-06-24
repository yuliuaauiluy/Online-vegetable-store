import type { Product } from "../../product/model/types"

export type CartItem = {
    product: Product;
    quantity: number;
}