import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import Colors from "../constants/Colors";
import { useNavigation, Link } from "expo-router";

const Details = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerLeft: () => <Link href="\">Back</Link>,
      headerRight: () => <Link href="\">Favorite</Link>,
    });
  }, []);

  return (
    <View style={styles.detailsContainer}>
      <ScrollView>
        <Text style={styles.title}>Product details</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default Details;
