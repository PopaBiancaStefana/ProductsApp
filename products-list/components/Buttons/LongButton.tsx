import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

type LongButtonProps = {
  title: string;
  onPress: () => void;
  style?: {};
};

const LongButton = ({ title, onPress, style }: LongButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title.toUpperCase()}</Text>
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