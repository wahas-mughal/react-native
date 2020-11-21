import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import Header from "./components/Header";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mainReducer from "./store/reducer";
import { MenuProvider } from "react-native-popup-menu";

//initializing redux store
const rootReducer = combineReducers({
  main: mainReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MenuProvider>
        <View style={styles.container}>
          <Header />

          <AppNavigator />
        </View>
      </MenuProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
