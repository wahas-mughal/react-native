import React, { useState } from "react";
import AppNavigator from "./Routes/drawer";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import dealersReducer from "./store/reducers/dealers";
import carReducer from "./store/reducers/cars";
import { AppLoading } from "expo";
import * as Font from "expo-font";

//firebase setup
import * as firebase from "firebase";
import "@firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB1CxkIfZpxlp-_bY8G25MvdDdrEqOWAXQ",
  authDomain: "rent-a-car-app-211bf.firebaseapp.com",
  databaseURL: "https://rent-a-car-app-211bf.firebaseio.com",
  projectId: "rent-a-car-app-211bf",
  storageBucket: "rent-a-car-app-211bf.appspot.com",
  messagingSenderId: "343530227842",
  appId: "1:343530227842:web:075c3ca04fe9f70b14cc9b",
};

firebase.initializeApp(firebaseConfig);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};


// combine the reducers
const rootReducer = combineReducers({
  dealers: dealersReducer,
  cars: carReducer
});

//initialize redux store
const store = createStore(rootReducer);


export default function App() {
  const [fonts, setFonts] = useState(false);
  if (!fonts) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFonts(true)} />;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
