import React, { useState } from "react";
import AppNavigator from "./navigation/AppNavigator";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import authReducer from "./store/reducer/auth";
import detailsReducer from "./store/reducer/details";
import reviewsReducer from "./store/reducer/reviews";
import ReduxThunk from "redux-thunk";
import * as firebase from "firebase";
import { LogBox } from "react-native";

//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiMNLAYa_o9X644efR7rTko9J38KxnRTg",
  authDomain: "restaurant-review-app-edad8.firebaseapp.com",
  databaseURL:
    "https://restaurant-review-app-edad8-default-rtdb.firebaseio.com",
  projectId: "restaurant-review-app-edad8",
  storageBucket: "restaurant-review-app-edad8.appspot.com",
  messagingSenderId: "236628363912",
  appId: "1:236628363912:web:2d0dbb887fb3f14f2bed3d",
};

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
  //ignore all log warnings
  LogBox.ignoreAllLogs();

  const rootReducer = combineReducers({
    auth: authReducer,
    details: detailsReducer,
    reviews: reviewsReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  const [fontLoaded, setFontLoaded] = useState();

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log("Error loading native fonts")}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
