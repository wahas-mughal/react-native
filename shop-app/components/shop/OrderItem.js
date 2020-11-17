import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../../constants/Colors";
import CartsItem from "../../components/shop/CartsItem";
import Card from '../UI/Card';

const OrderItem = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.mainText}>Total:</Text>
        <Text style={styles.mainText}> ${props.amount.toFixed(2)}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title={showDetails ? "Hide Details" : "Show Details"}
          color={Colors.primary}
          onPress={() => {
            setShowDetails((prevState) => !prevState);
          }}
        />
      </View>
      {showDetails && (
          <View>
            {props.productItem.map((cartItem) => (
              <CartsItem
                quantity={cartItem.quantity}
                title={cartItem.productTitle}
                price={cartItem.productPrice}
              />
            ))}
          </View>
        )}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 12,
    paddingHorizontal: 20,
    paddingTop: 15
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  mainText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  date: {
    fontFamily: "open-sans-regular",
    fontSize: 14,
    color: "#888",
  },
  button: {
    alignItems: "flex-end",
    marginBottom: 20
  },
});

export default OrderItem;
