import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React, { useEffect } from "react";
import DealerProfile from "../screens/HomeStackScreens/DealerProfile";
import AvailableCars from "../screens/HomeStackScreens/AvailableCars";
import CarDetails from "../screens/HomeStackScreens/CarDetails";
import BookedCars from "../screens/HomeStackScreens/BookedCars";
import Homescreen from "../screens/HomeStackScreens/Homescreen";
import Bankdetailsscreen from "../screens/AccountStackScreens/Bankdetailsscreen";
import PaymentMethod from "../screens/HomeStackScreens/PaymentStackScreens/PaymentMethod";
import SelectCreditCard from "../screens/HomeStackScreens/PaymentStackScreens/SelectCreditCard";
import ConfirmPayment from "../screens/HomeStackScreens/PaymentStackScreens/ConfirmPayment";
import ConfirmBooking from "../screens/HomeStackScreens/PaymentStackScreens/ConfirmBooking";
import Header from "../shared/Header";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { createSwitchNavigator } from "react-navigation";
import MapScreen from "../screens/Google Maps/MapScreen";

const defaultNavOptions = {
  headerTitleStyle: {
    fontSize: 18,
  },
  headerTitleAlign: "center",
  headerTintColor: "#03c4ff",
};

const confirmbookingStack = createStackNavigator(
  {
    confirmBooking: ConfirmBooking,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const availableCarsStack = createStackNavigator(
  {
    carsAvaialble: AvailableCars,
    carDetails: CarDetails,
    paymentMethod: PaymentMethod,
    selectCreditCard: SelectCreditCard,
    confirmPayment: ConfirmPayment,
    "Bank Details": Bankdetailsscreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const mainAvailableCarStack = createSwitchNavigator({
  availableCarsScreens: availableCarsStack,
  confirmation: confirmbookingStack,
});

const bookedCarsStack = createStackNavigator(
  {
    carsBooked: BookedCars,
    carDetails: CarDetails,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const dealerHomeStack = createStackNavigator({
  Home: {
    screen: Homescreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Home" />,
        headerStyle: {
          backgroundColor: "#03c4ff",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 18,
        },
        headerTitleAlign: "center",
      };
    },
  },

  MapScreen: {
    screen: MapScreen,
    navigationOptions: () => {
      return {
        headerTitle: "Select Your Location",
        headerStyle: {
          backgroundColor: "#03c4ff",
        },
        headerTintColor: "#fff",
        headerTintStyle: {
          fontSize: 18,
        },
        headerTitleAlign: "center",
      };
    },
  },
  "Dealer Profile": {
    screen: DealerProfile,
    navigationOptions: {
      headerTitleAlign: "center",
      tabBarIcon: () => {
        return <AntDesign name="profile" size={21} color="#fff" />;
      },
      tabBarColor: "#03c4ff",
      headerTintColor: "#03c4ff",
      headerTitleStyle: {
        fontSize: 18,
      },
      headerTitleAlign: "center",
    },
  },
});

// hide the bottom tab bar in Home screen
dealerHomeStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === "Home") {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

//hide the bottom tab bar in Map screen
dealerHomeStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === "MapScreen") {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

const bottomTabScreens = {
  "Dealer Profile": {
    screen: dealerHomeStack,
    navigationOptions: {
      tabBarIcon: () => {
        return <AntDesign name="profile" size={21} color="#fff" />;
      },
      tabBarColor: "#03c4ff",
      // tabBarVisible: false
    },
  },
  "Available Cars": {
    screen: mainAvailableCarStack,
    navigationOptions: {
      tabBarIcon: () => {
        return <MaterialIcons name="event-available" size={21} color="#fff" />;
      },
      tabBarColor: "#03c4ff",
    },
  },
  "Booked Cars": {
    screen: bookedCarsStack,
    navigationOptions: {
      tabBarIcon: () => {
        return <MaterialIcons name="event-busy" size={21} color="#fff" />;
      },
      tabBarColor: "#03c4ff",
    },
  },
};

const homeDealerStack = createMaterialBottomTabNavigator(bottomTabScreens, {
  activeColor: "#fff",
  barStyle: {
    backgroundColor: "#03c4ff",
  },
});

export default homeDealerStack;
