import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import CustomText from "../CustomText";

type LongButtonProps = {
  title: string;
  onPress: () => void;
  style?: {};
};

const LongButton = ({ title, onPress, style }: LongButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <CustomText style={styles.buttonText}>{title.toUpperCase()}</CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.dark.background,
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default LongButton;