import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Card from '../UI/Card';

const CartsItem = (props) => {
  return (
    <Card style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.quantity}> {props.quantity} </Text>
        <View style = {{width: 140}}>
        <Text style={styles.mainText} numberOfLines = {1}> {props.title} </Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.mainText}> {props.price.toFixed(2)} </Text>
        {props.deletable && (
          <TouchableOpacity style={styles.deleteItem} onPress={props.onRemove}>
            {Platform.OS === "android" ? (
              <SimpleLineIcons name="trash" size={23} color={Colors.primary} />
            ) : (
              <Ionicons name="ios-trash" size={23} color={Colors.primary} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    marginBottom: 20,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "open-sans-regular",
    fontSize: 16,
    color: "#888",
  },
  mainText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  deleteItem: {
    marginLeft: 10,
  },
});

export default CartsItem;
