import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  return (
    <View style={styles.header}>
      <AntDesign
        name="menu-unfold"
        size={28}
        onPress={() => navigation.openDrawer()}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}> {title} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: 330,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    left: 16,
    color: "#fff",
  },
  headerText: {
    color: "#fff",
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});
