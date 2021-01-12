import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const CustomButton = (props) => {
  let TouchableNativeOpacity = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  return (
      <TouchableNativeOpacity onPress={props.onPress}>
        <View  style={{ ...styles.btn, ...props.style }}>
          <Text style={styles.title}> {props.title} </Text>
        </View>
      </TouchableNativeOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#cf4242",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#cf4242",
    height: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
});

export default CustomButton;
