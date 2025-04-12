import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onClick: () => void;
  size?: number;
  style?: {};
};

const IconButton = ({
  icon,
  color,
  onClick,
  size = 22,
  style,
}: IconButtonProps) => {

  const handlePress = () => {
    onClick();
  };

  return (
      <TouchableOpacity onPress={handlePress}>
        <View style={[styles.iconButton, style]}>
          <Ionicons
            name={icon}
            size={size}
            color={color}
          />
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    padding: 8,
    borderRadius: 50,
  },
});

export default IconButton;
