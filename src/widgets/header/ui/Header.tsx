import { Button, Group, Box } from "@mantine/core";
import { useState } from "react";
import { useCartContext } from "../../../features/cart/model/useCartContext";
import { CartPopup } from "../../cart-popup/ui/CartPopup";
import { Logo } from "./Logo";
import cartIcon from "../../../assets/cart.svg";

export const Header = () => {
  const { totalCount } = useCartContext();
  const [opened, setOpened] = useState(false);

  return (
    <Box bg="white" h={59} pos="sticky" top={0} style={{ zIndex: 10 }}>
      <Group justify="space-between">
        <Logo />

        <Button
          onClick={() => setOpened(true)}
          radius="md"
          color="#54B46A"
          h={44}
          w={174}
          rightSection={<img src={cartIcon} alt="" />}
        >
          {totalCount > 0 && (
            <Box
              mr={8}
              bg="white"
              c="#54B46A"
              w={20}
              h={20}
              style={{
                borderRadius: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              {totalCount}
            </Box>
          )}
          Cart
        </Button>
      </Group>

      <CartPopup opened={opened} onClose={() => setOpened(false)} />
    </Box>
  );
};
