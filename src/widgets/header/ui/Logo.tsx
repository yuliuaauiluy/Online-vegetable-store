import { Group, Text, Box } from "@mantine/core";

export const Logo = () => {
  return (
    <Group gap={8} bg="#F7F7F7" style={{ borderRadius: 31 }} mx={20} my={13}>
      <Text fw={600} size="lg" pt={3} pb={3} pl={12}>
        Vegetable
      </Text>

      <Box bg="#54B46A" c="white" px={12} py={4} style={{ borderRadius: 31 }}>
        <Text size="sm" fw={600}>
          SHOP
        </Text>
      </Box>
    </Group>
  );
};
