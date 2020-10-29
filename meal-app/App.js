import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealNavigation from "./navigation/MealNavigator";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import mealReducer from "./store/Reducers/reducermeals";
import { Provider } from "react-redux";

// it loads the native screens for android and iOS which optimizes the performance
enableScreens();

// initialize redux store
const rootReducers = combineReducers({
  meals: mealReducer,
});

const store = createStore(rootReducers);

const LoadFont = () => {
  return Font.loadAsync({
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoad, setFontLoad] = useState(false);

  if (!fontLoad) {
    return (
      <AppLoading startAsync={LoadFont} onFinish={() => setFontLoad(true)} />
    );
  }
  return (
    //wrap the Provider on the top level component which have access to all child components
    <Provider store = {store}>
      <MealNavigation />
    </Provider>
  );
}
