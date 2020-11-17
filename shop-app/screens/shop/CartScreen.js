import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  Button,
  ActivityIndicator,
} from "react-native";
import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import CartsItem from "../../components/shop/CartsItem";
import * as cartActions from "../../store/actions/cart";
import * as orderActions from "../../store/actions/order";
import Card from "../../components/UI/Card";

const CartScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const cartItemAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => {
    const updatedCartItems = [];
    for (const key in state.cart.items) {
      updatedCartItems.push({
        id: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        total: state.cart.items[key].total,
        cartPushToken: state.cart.items[key].pushToken
      });
    }
    return updatedCartItems.sort((a, b) => (a.id > b.id ? 1 : -1));
  });

  const orderSendHandler = async () => {
    setIsLoading(true);
    await dispatch(orderActions.addOrders(cartItem, cartItemAmount));
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.actions}>
        <Text style={styles.actionsText}>
          Total:
          <Text style={styles.amount}>
            {" "}
            ${Math.round((cartItemAmount.toFixed(2) * 100) / 100)}
          </Text>
        </Text>

        {isLoading ? (
          <ActivityIndicator size = 'small' color = {Colors.primary} />
        ) : (
          <Button
            title="Order Now"
            color={Colors.primary}
            disabled={cartItem.length === 0}
            onPress={orderSendHandler}
          />
        )}
      </Card>
      <View style={{ paddingBottom: 10 }}>
        <FlatList
          data={cartItem}
          renderItem={(itemData) => (
            <CartsItem
              quantity={itemData.item.quantity}
              title={itemData.item.productTitle}
              price={itemData.item.productPrice}
              deletable
              onRemove={() => {
                dispatch(cartActions.removeCartItems(itemData.item.id));
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
  actionsText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});

CartScreen.navigationOptions = {
  headerTitle: "Your Cart",
};

export default CartScreen;
