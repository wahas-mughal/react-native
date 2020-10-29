import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer} from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import CategoryScreen from "../screens/CategoryScreen";
import CategoryMeals from "../screens/CategoryMeals";
import MealsDetail from "../screens/MealsDetail";
import FavoriteMeals from "../screens/FavoriteMeals";
import FilterMeals from "../screens/FilterMeals";

import { Platform, Text} from "react-native";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";

const defaultMealFavNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTitleStyle : {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle : {
    fontFamily: 'open-sans-regular'
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

// Meal Stack Navigator
const MealNavigation = createStackNavigator(
  {
    MainCategoryScreen: {
      screen: CategoryScreen,
    },
    CategoryMealScreen: CategoryMeals,
    MealsDetailScreen: MealsDetail,
  },
  {
    defaultNavigationOptions: defaultMealFavNavOptions,
  }
);

// Favourite Stack Navigator

const FavouriteNavigator = createStackNavigator(
  {
    Favourites: FavoriteMeals,
    MealsDetailScreen: MealsDetail,
  },
  {
    defaultNavigationOptions: defaultMealFavNavOptions,
  }
);

//Bottom Tab Navigation
const BottomTabConfig = {
  "All Meals": {
    screen: MealNavigation,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={23} color={tabInfo.tintColor} />
        )
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style = {{fontFamily: 'open-sans-bold'}}> All Meals </Text> : 'All Meals'
    },
  },
  Favourites: {
    screen: FavouriteNavigator,
    navigationOptions: {
      // tabBarLabel: 'Favourites!',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={23} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style = {{fontFamily: 'open-sans-bold'}}> Favourites </Text> : 'Favourites'
    },
  },
};

const AllMealsFavourites =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(BottomTabConfig, {
        activeColor: "#fff",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(BottomTabConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primaryColor,
          labelStyle: {
            fontFamily: 'open-san-bold'
          }
          // activeBackgroundColor: Colors.primaryColor,
        },
      });

//Filter Stack (use for having a header only)
const FilteredMeals = createStackNavigator({
  Filter: FilterMeals,
},
{
  navigationOptions: {
    drawerLabel: 'Filtered Meals'
  },
  defaultNavigationOptions: defaultMealFavNavOptions
});

// Main Drawer Navigation
const MainDrawerNavigator = createDrawerNavigator({
   MainMeals:  {
    screen: AllMealsFavourites,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filter: FilteredMeals,
}, {
  contentOptions: {
    activeTintColor: Colors.primaryColor,
    labelStyle: {
      fontFamily: 'open-sans-bold',
      fontSize: 17
    }
  }
});

// const filterSwitchNavigator = createSwitchNavigator({
// Main: AllMealsFavourites,
// Filter: FilteredMeals
// });


export default createAppContainer(MainDrawerNavigator);
