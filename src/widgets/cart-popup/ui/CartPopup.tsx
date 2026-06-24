import { Group, Text, Modal, ActionIcon, Image, Divider } from "@mantine/core";
import { useCartContext } from "../../../features/cart/model/useCartContext";
import emptyCart from "../../../assets/cart_content.svg";

type Props = {
  opened: boolean;
  onClose: () => void;
};
export const CartPopup = ({ opened, onClose }: Props) => {
  const { items, totalPrice, increaseQuantity, decreaseQuantity } =
    useCartContext();

  return (
    <Modal opened={opened} onClose={onClose}>
      {items.length === 0 ? (
        <Image src={emptyCart}/>
      ) : (
        <>
          {items.map((item, index) => (
            <>
            <Group justify="space-between" wrap="nowrap">
              <Group key={item.product.id} wrap="nowrap">
                <Image w={64} h={64} src={item.product.image} />
                <Text fw={500}>{item.product.name}</Text>
              </Group>
              <Text fw={500}>$ {item.product.price}</Text>
               <Group>
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
                  onClick={() => decreaseQuantity(item.product.id)}
                >
                  -
                </ActionIcon>
                <Text>{item.quantity}</Text>
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
                  onClick={() => increaseQuantity(item.product.id)}
                >
                  +
                </ActionIcon>
                </Group>
              </Group>
              {index < items.length - 1 && <Divider my="md" color="#DEE2E6" ml={80}/>}
            </>
          ))}

          <Divider my="md" color="#DEE2E6" />
          <Group justify="space-between">
            <Text fw={500}>Total</Text>
            <Text fw={500}>${totalPrice}</Text>
          </Group>
        </>
      )}
    </Modal>
  );
};
