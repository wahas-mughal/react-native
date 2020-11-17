import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import placesReducer from "./store/places-reducer";
import PlacesNavigator from "./navigation/PlacesNavigator";
import { init } from "./helper/db";


// Initializing the SQLite database
init()
  .then(() => {
    console.log("db initialized successfully");
  })
  .catch((err) => {
    console.log("db initialized unsuccessfully");
    console.log(err);
  });

export default function App() {
  const rootReducers = combineReducers({
    places: placesReducer,
  });

  const store = createStore(rootReducers, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
