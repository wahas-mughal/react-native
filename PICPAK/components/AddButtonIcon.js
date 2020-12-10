import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Feather } from "@expo/vector-icons";

const AddButtonIcon = (props) => {
  const SIZE = 65;
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: SIZE,
          height: SIZE,
          borderRadius: SIZE / 2,
          backgroundColor: "#fff",
          borderColor: "#ff6600",
          borderWidth: 2,
        }}
      >
        <Feather name="plus" size={42} color="#ff6600" />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -30,
    alignItems: "center",
  },
});

export default AddButtonIcon;
