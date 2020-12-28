import React, { useState } from "react";
import AppNavigator from "./Routes/drawer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import dealersReducer from "./store/reducers/dealers";
import carReducer from "./store/reducers/cars";
import bookingReducer from "./store/reducers/bookings";
import authReducer from "./store/reducers/auth";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import ReduxThunk from 'redux-thunk';
import {firebaseConfig} from './config/firebase-config';

//firebase setup
import * as firebase from "firebase";
import "@firebase/firestore";

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
  cars: carReducer,
  bookings: bookingReducer,
  auth: authReducer
});

//initialize redux store
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


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
