import { Stack } from "expo-router";
import { useEffect } from "react";
import { useProductStore } from "../store/productStore";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="details"
        options={{
        }}
      />
    </Stack>
  );
}