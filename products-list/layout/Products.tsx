import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
import { useProductStore } from "../store/productStore";
import Product from "../models/Product";
import IconButton from "../components/Buttons/IconButton";

const Products = () => {
  const { products, fetchProducts, addFavorite, removeFavorite } =
    useProductStore();


  const renderProduct: ListRenderItem<Product> = ({ item, index }) => (
    <Link href={{ pathname: "/details", params: { id: item.id } }} asChild>
      <TouchableOpacity style={styles.product}>
        <View style={{ flex: 1 }}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <IconButton
            icon="heart-outline"
            color={Colors.dark.background}
            link="/"
          />
          <Text>{item.title}</Text>
          <Text>${item.price}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  if(!products){
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.productsContainer}>
        <Text>{products.length} products found</Text>
        <FlatList
          data={products}
          keyExtractor={(item, index) => item.id}
          scrollEnabled={true}
          renderItem={renderProduct}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
    backgroundColor: Colors.lightGrey,
    marginBottom: 250,
  },
  product: {
    backgroundColor: "#fff",
    padding: 16,
    flexDirection: "row",
  },
  image: {
    height: 250,
  },
});

export default Products;
