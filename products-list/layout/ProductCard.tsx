import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
import { useProductStore } from "../store/productStore";
import Product from "../models/Product";
import IconButton from "../components/Buttons/IconButton";
import CustomText from "../components/CustomText";

type ProductsProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductsProps) => {
  const { favorites, addFavorite, removeFavorite } = useProductStore();

  const isFavorite = favorites?.some((fav) => fav.id == product.id);

  return (
    <View style={styles.product}>
      <Link href={{ pathname: "/details", params: { id: product.id } }} asChild>
        <TouchableOpacity style={styles.productContent}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <CustomText style={styles.title}>{product.category}</CustomText>
          <CustomText style={styles.text}>{product.title}</CustomText>
          <CustomText style={styles.title}>${product.price}</CustomText>
        </TouchableOpacity>
      </Link>

      <View style={styles.iconWrapper}>
        <IconButton
          icon={isFavorite ? "heart" : "heart-outline"}
          onClick={() => {
            if (isFavorite) {
              removeFavorite(product.id);
            } else {
              addFavorite(product);
            }
          }}
          color={Colors.dark.background}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#fff",
    position: "relative",
  },
  productContent: {
    padding: 25,
    borderRadius: 15,
  },
  iconWrapper: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  image: {
    width: "100%",
    height: 110,
    marginBottom: 10,
    resizeMode: "contain",
  },
  text: {
    fontWeight: 500,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default ProductCard;
