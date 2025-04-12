import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
import { useProductStore } from "../store/productStore";
import Product from "../models/Product";
import IconButton from "../components/Buttons/IconButton";

type ProductsProps = {
  item: Product;
};

const ProductCard = ({ item }: ProductsProps) => {
  const { favorites, addFavorite, removeFavorite } = useProductStore();

  const isFavorite = favorites?.some((fav) => fav.id === item.id);

  return (
    <View style={styles.product}>
      <Link href={{ pathname: "/details", params: { id: item.id } }} asChild>
        <TouchableOpacity style={styles.productContent}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>${item.price}</Text>
        </TouchableOpacity>
      </Link>

      <View style={styles.iconWrapper}>
        <IconButton
          icon={isFavorite ? "heart" : "heart-outline"}
          onClick={() => {
            if (isFavorite) {
              removeFavorite(item.id);
            } else {
              addFavorite(item);
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
