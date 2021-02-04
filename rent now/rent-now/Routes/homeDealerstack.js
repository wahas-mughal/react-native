import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import DealerProfile from "../screens/HomeStackScreens/DealerProfile";
import AvailableCars from "../screens/HomeStackScreens/AvailableCars";
import CarDetails from "../screens/HomeStackScreens/CarDetails";
import BookedCars from "../screens/HomeStackScreens/BookedCars";
import Homescreen from "../screens/HomeStackScreens/Homescreen";
import PaymentMethod from "../screens/HomeStackScreens/PaymentStackScreens/PaymentMethod";
import ConfirmPayment from "../screens/HomeStackScreens/PaymentStackScreens/ConfirmPayment";
import ConfirmBooking from "../screens/HomeStackScreens/PaymentStackScreens/ConfirmBooking";
import Header from "../shared/Header";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { createSwitchNavigator } from "react-navigation";

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
    confirmPayment: ConfirmPayment,
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
  home: {
    screen: Homescreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Dashboard" />,
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

  if (routeName === "home") {
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