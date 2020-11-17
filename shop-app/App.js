
import React, {useState} from "react";
import { StyleSheet, Text, View} from "react-native";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from 'redux-thunk';
// import ShopNavigator from './navigation/ShopNavigator';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';
import NavigationContainer from './navigation/NavigationContainer';
import * as Notifications from 'expo-notifications';

import productsReducer from "./store/reducers/products";



//load custom fonts
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans-bold': require('./assets/font/OpenSans-Bold.ttf'),
    'open-sans-regular': require('./assets/font/OpenSans-Regular.ttf'),
  });
}

// will show push notification locally on the foreground
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true
    }
  }
})


//Reducers
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

//initialize the Redux store and ReduxThunk
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(!fontsLoaded){
    return <AppLoading startAsync = {fetchFonts} onFinish = {() => {
      setFontsLoaded(true);
    }}/>
  }

  return (
    //Redux Wrapper over routes i.e NavigationContainer
    <Provider store = {store}>
      <NavigationContainer/>
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
