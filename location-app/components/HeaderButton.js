import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import Colors from "../constants/Color";
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={27}
      color={Colors.secondary}
    />
  );
};

export default CustomHeaderButton;
