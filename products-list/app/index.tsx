import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import ProductsList from "../layout/ProductsList";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import IconButton from "../components/Buttons/IconButton";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SearchBar
          placeholder="Search product"
          onSearch={(query) => setSearchQuery(query)}
        />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Products</Text>
          <IconButton
            icon={showFavorites ? "heart" : "heart-outline"}
            onClick={() => {
              setShowFavorites(!showFavorites);
            }}
            color={Colors.dark.background}
            size={30}
          />
        </View>
        <ProductsList searchTerm={searchQuery} showFavorites={showFavorites} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  container: {
    padding: 15,
  },
});

export default Page;
