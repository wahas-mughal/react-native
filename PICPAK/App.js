import React, { useState } from "react";
import AppNavigator from "./navigation/AppNavigator";
import { Provider, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import feedReducer from "./store/reducers";
import galleryReducer from "./store/reducers";
import likesNotificationReducer from "./store/reducers";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClWz_hZ3Xu6xgQr8fzJpsWg1Dqfz0ZGMw",
  authDomain: "pic-pak.firebaseapp.com",
  projectId: "pic-pak",
  storageBucket: "pic-pak.appspot.com",
  messagingSenderId: "729768859921",
  appId: "1:729768859921:web:e2a257a8b1e8fb3d2b14b0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//load native base default fonts
const loadFonts = () => {
  return Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const rootReducers = combineReducers({
    feed: feedReducer,
    gallery: galleryReducer,
    likesNot: likesNotificationReducer,
  });

  const store = createStore(rootReducers, applyMiddleware(ReduxThunk));

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setFontLoaded(true)} />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
