import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={{ ...styles.btn, ...props.style }} onPress={props.onPress}>
      <View>
        <Text style={styles.title}> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#cf4242",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
});

export default CustomButton;
