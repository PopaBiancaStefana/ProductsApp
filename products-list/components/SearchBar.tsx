import { View, StyleSheet } from "react-native";
import React, {useState} from "react";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

type SearchBarProps = {
  placeholder: string;
  onSearch: (query: string) => void;
};

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  const [text, setText] = useState("");

  const handleChange = (newText: string) => {
    setText(newText);
    onSearch(newText);
  };

  return (
    <View style={styles.searchContainer}>
      <Ionicons
        style={styles.searchIcon}
        name="search"
        size={23}
        color={Colors.medium}
      />
      <TextInput style={styles.input} value={text} placeholder={placeholder} onChangeText={handleChange}/>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: Colors.light.background,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    fontSize: 14,
    color: Colors.mediumDark,
  },
  searchIcon: {
    paddingLeft: 20,
  },
});

export default SearchBar;
