import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MantineProvider } from "@mantine/core";

import { ProductCard } from "./ProductCard";
import { CartProvider } from "../../../app/providers/CartProvider";

const product = {
  id: 1,
  name: "Apple",
  price: 10,
  image: "test.jpg",
};

describe("ProductCard", () => {
  it("should show the name of the product", () => {
    render(
      <MantineProvider>
        <CartProvider>
          <ProductCard product={product} />
        </CartProvider>
      </MantineProvider>
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
  });

  it("should show the product price", () => {
    render(
      <MantineProvider>
        <CartProvider>
          <ProductCard product={product} />
        </CartProvider>
      </MantineProvider>
    );

    expect(screen.getByText(`$ ${product.price}`)).toBeInTheDocument();
  });

  it("should increase quantity after clicking plus button", async () => {
    render(
      <MantineProvider>
        <CartProvider>
          <ProductCard product={product} />
        </CartProvider>
      </MantineProvider>
    );

    await userEvent.click(screen.getByText("+"));

    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should decrease quantity after clicking minus button", async () => {
    render(
      <MantineProvider>
        <CartProvider>
          <ProductCard product={product} />
        </CartProvider>
      </MantineProvider>
    );

    await userEvent.click(screen.getByText("+"));
    await userEvent.click(screen.getByText("−"));

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should not decrease quantity below 1", async () => {
    render(
      <MantineProvider>
        <CartProvider>
          <ProductCard product={product} />
        </CartProvider>
      </MantineProvider>
    );

    await userEvent.click(screen.getByText("−"));

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});