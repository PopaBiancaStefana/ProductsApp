import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { useProductStore } from "../store/productStore";
import ProductCard from "./ProductCard";

type ProductsProps = {
  searchTerm: string;
  showFavorites?: boolean;
};

const ProductsList = ({ searchTerm, showFavorites }: ProductsProps) => {
  const { products, favorites } = useProductStore();
  const dataToShow = showFavorites ? favorites : products;
  const filteredProducts = dataToShow.filter((product) =>
    product.title.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  if (!products) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading products...</Text>
      </View>
    );
  }

  return (
    <View style={styles.productsContainer}>
      <Text style={styles.text}>{filteredProducts.length} products found</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        numColumns={2}
        renderItem={({ item }) => <ProductCard product={item} />}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
    backgroundColor: Colors.lightGrey,
    marginBottom: 250,
  },
  columnWrapperStyle: {
    justifyContent: "space-between",
    columnGap: 15,
  },
  contentContainerStyle: {
    gap: 15,
  },
  text: {
    fontWeight: 500,
    marginBottom: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductsList;
