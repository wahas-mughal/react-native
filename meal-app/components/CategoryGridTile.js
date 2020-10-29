import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../constants/Colors";

const CategoryGridTile = (props) => {
  let OpacityTouchable = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    OpacityTouchable = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItems}>
      <OpacityTouchable style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title}> {props.title} </Text>
        </View>
      </OpacityTouchable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItems: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  container: {
    flex: 1,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 19,
    textAlign: "right",
    color: Colors.primaryColor,
  },
});

export default CategoryGridTile;
