import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { useProductStore } from "../store/productStore";
import * as Font from "expo-font";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        await Font.loadAsync({
          Bilo: require("../assets/fonts/fonnts.com-Bilo.otf"),
        });
      } catch (e) {
        console.error("Error loading fonts", e);
      }
      setFontsLoaded(true);
    };

    loadAssets();
    fetchProducts();
  }, [fetchProducts]);

   if (!fontsLoaded) {
     return (
       <View style={styles.loadingContainer}>
         <ActivityIndicator size="large" color="#000" />
       </View>
     );
   }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="details" options={{}} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});