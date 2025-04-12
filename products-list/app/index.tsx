import { View, ScrollView, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

const Page = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <ScrollView>
          <Text style={styles.header}>List of products</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    top: 25,
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default Page;
