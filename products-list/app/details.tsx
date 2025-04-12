import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Colors from "../constants/Colors";
import { useNavigation, useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useProductStore } from "../store/productStore";
import LongButton from "../components/Buttons/LongButton";
import IconButton from "../components/Buttons/IconButton";
import Separator from "../components/Separator";

const Details = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const numberId = Number(id);
  const product = useProductStore((state) =>
    state.products.find((p) => p.id == numberId)
  );
  const { favorites, addFavorite, removeFavorite } = useProductStore();
  const [textExpanded, setTextExpanded] = useState(false);

  const isFavorite = favorites?.some((fav) => fav.id == numberId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerLeft: () => (
        <IconButton
          icon="arrow-back-outline"
          color={Colors.light.text}
          onClick={() => router.back()}
          size={30}
        />
      ),
      headerRight: () => (
        <IconButton
          icon={isFavorite ? "heart" : "heart-outline"}
          color={Colors.light.text}
          onClick={() => {
            if (isFavorite) {
              removeFavorite(numberId);
            } else if (product) {
              addFavorite(product);
            }
          }}
          size={30}
        />
      ),
    });
  }, [isFavorite]);

  if (!product) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primary} />
        <Text>Loading product details...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.rowContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.title}>${product.price}</Text>
        </View>
        <Separator />
        <Text
          style={styles.description}
          numberOfLines={!textExpanded ? 3 : undefined}
        >
          {product.description}
        </Text>
        <TouchableOpacity onPress={() => setTextExpanded(!textExpanded)}>
          <Text style={styles.readMore}>
            {textExpanded ? "Read less" : "Read more"}
          </Text>
        </TouchableOpacity>
        <Separator />
        <View style={styles.rowContainer}>
          <Text style={styles.ratingText}>Rating</Text>
          <Text style={styles.rating}>
            {product.rating.rate} from {product.rating.count} Reviews
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <LongButton title="Add to Cart" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 70,
    height: "100%",
    backgroundColor: Colors.light.background,
  },
  contentContainerStyle: {
    paddingBottom: 100,
  },
  image: {
    alignSelf: "center",
    width: "80%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 35,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 24,
  },
  readMore: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 500,
  },
  rating: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 500,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    paddingTop: 15,
  },
});

export default Details;
