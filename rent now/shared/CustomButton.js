import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={{ ...styles.text, ...props.style }}> {props.text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "#03c4ff",
    borderWidth: 1,
    backgroundColor: "#fff",
    marginVertical: 15,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
    color: "#03c4ff",
  },
});

export default CustomButton;
