import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import * as authActions from "../store/actions/auth";
import Colors from "../constants/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';

const StartingScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
  
    const tryToLogin = async () => {
      //get the async data
      const userData = await AsyncStorage.getItem("userData");
      //it async data is not set then navigate to auth screens
      if (!userData) {
        props.navigation.navigate("AuthNav");
        return;
      }
      //get the data from and convert it into json object
      const tranformedDate = JSON.parse(userData);
      //destructure the values
      const { token, uId, expiration } = tranformedDate;
      //wrapp the expiration date into new expiration date object
      const expiratonDate = new Date(expiration);

      //if the expiration date is less than current date and token or uid is not set then navigate  to auth screens
      if (expiratonDate <= new Date() || !token || !uId) {
        props.navigation.navigate("AuthNav");
        return;
      }

      //to determine the time of the session minus the current date from the expiration date
      const expirationTime = expiratonDate.getTime() - new Date().getTime();

      //navigate to shopNav and then dispatch by invoking authenticate actions creator
      props.navigation.navigate("ShopNav");
      dispatch(authActions.authenticate(token, uId, expirationTime));
    };

    tryToLogin();
  }, [dispatch]);

  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartingScreen;
