import React, { useRef, useEffect } from "react";
import AuthShopNavigator from "./ShopNavigator";
import { useSelector } from "react-redux";
import { NavigationActions }  from "react-navigation";


// Wrapper component around ShopNavigator to access the navigations with the help of useRef.
//because redux can't directly communicate with the navigations

//this container is used to check the auth token status when the app is mounted: App.js always remains mounted
const NavigationContainer = (props) => {
  const navRef = useRef();
  //get the token from the auth reducer and see whether its true or false
  const isAuth = useSelector((state) => !!state.auth.token);

  useEffect(() => {
    //if auth is not set then navigate to auth screens
    //dispatch here is not supplied by redux, its supplied by the react-navigation
    if (!isAuth) {
      navRef.current.dispatch(
        NavigationActions.navigate({ routeName: 'AuthNav' })
      );
      console.log("Navigation executed!");
    }
  }, [isAuth]);

  //give a ref to the AuthShopNavigator of AuthNav navigation
  return <AuthShopNavigator ref={navRef} />;
};

export default NavigationContainer;
