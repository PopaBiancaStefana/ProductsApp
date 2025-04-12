import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

const CustomText = (props: TextProps) => {
  return <Text {...props} style={[styles.text, props.style]} />;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Bilo",
  },
});

export default CustomText;
