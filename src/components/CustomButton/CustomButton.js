import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <Pressable
      style={[styles.container, styles[`container_${type}`]]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: "#30AFD3",
  },
  container_SECONDARY: {
    backgroundColor: "#E0E66E",
  },
  container_TERTIARY: {},
  text: {
    fontWeight: "bold",
    color: "white",
  },
  container_QUARTERY: {
    BoderColor: "#3B71F3",
    borderWidth: 2,
  },
  text_TERTIARY: {
    color: "gray",
  },
  text_QUARTERY: {
    color: "gray",
    color: "#30AFD3",
  },
});
export default CustomButton;
