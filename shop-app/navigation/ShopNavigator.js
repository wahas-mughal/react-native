import { createAppContainer, createSwitchNavigator } from "react-navigation";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Platform, SafeAreaView, Button, View } from "react-native";
import Colors from "../constants/Colors";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import UserProductsScreen from "../screens/user/UserProductsScreen";
import EditProductsScreen from "../screens/user/EditProductsScreen";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import { Ionicons } from "@expo/vector-icons";
import AuthScreen from "../screens/user/AuthScreen";
import StartingScreen from "../screens/StartingScreen";
import { useDispatch } from "react-redux";
import * as authActions from "../store/actions/auth";

const defaultNavigationOpt = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? Colors.accent : Colors.primary,
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: "openn-sans-regular",
  headerTitleAlign: "center",
};

const productsNavigator = createStackNavigator(
  {
    productOverview: ProductOverviewScreen,
    productDetails: ProductDetailsScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (config) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={24}
          color={config.TintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavigationOpt,
  }
);

const ordersNavigator = createStackNavigator(
  {
    orders: OrdersScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (config) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-list" : "ios-list"}
          size={24}
          color={config.TintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavigationOpt,
  }
);

const userNavigator = createStackNavigator(
  {
    userProducts: UserProductsScreen,
    editProducts: EditProductsScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (config) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-create" : "ios-create"}
          size={24}
          color={config.TintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavigationOpt,
  }
);

const authNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOpt,
  }
);

const shopNavigator = createDrawerNavigator(
  {
    Products: productsNavigator,
    Orders: ordersNavigator,
    User: userNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
    contentComponent: (props) => {
      const dispatch = useDispatch();
      return (
        <View style={{ flex: 1, paddingTop: 35 }}>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerItems {...props} />
            <Button
              title="Logout"
              color={Colors.primary}
              onPress={() => {
                dispatch(authActions.logout());
              }}
            />
          </SafeAreaView>
        </View>
      );
    },
  }
);

const AuthShopNavigator = createSwitchNavigator({
  Starterscreen: StartingScreen,
  AuthNav: authNavigator,
  ShopNav: shopNavigator,
});

export default createAppContainer(AuthShopNavigator);
