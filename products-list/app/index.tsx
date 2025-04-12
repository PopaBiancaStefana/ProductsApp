import { View, ScrollView, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import Products from "../layout/Products";

const Page = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.header}>SearchBar</Text>
        <Products />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 8,
  },
});

export default Page;
