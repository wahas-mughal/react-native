import React, { useEffect, useState, useCallback } from "react";
import {
  FlatList,
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import OrderItem from "../../components/shop/OrderItem";
import * as orderActions from "../../store/actions/order";
import Colors from "../../constants/Colors";

const OrdersScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const ordersData = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  const orderHandler = useCallback (() => {
    setIsLoading(true);
    dispatch(orderActions.setOrders()).then(() => {
      setIsLoading(false);
    }).catch((err)=> {
      err.message
    });
  }, [dispatch, setIsLoading]);


  useEffect(() => {
    const willFocus = props.navigation.addListener('willFocus', () => {
      orderHandler();
    })
    return () => {
      willFocus.remove();
    }
  }, [orderHandler])

  useEffect(() => {
    orderHandler();
  }, [dispatch, orderHandler]);



  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if(ordersData.length === 0){
    <View style = {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> No order found, please order some products! </Text>
    </View>
  }
  

  return (
    <FlatList
      data={ordersData}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem
          amount={itemData.item.sum}
          date={itemData.item.readableDate}
          productItem={itemData.item.items}
        />
      )}
    />
  );
};

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Orders",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default OrdersScreen;
