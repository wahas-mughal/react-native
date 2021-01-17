import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import ReviewHistory from "../screens/ReviewHistory";
import ReviewDetails from "../screens/ReviewDetails";
import PostReview from "../screens/PostReview";
import GoogleReviews from "../screens/GoogleReviews";
import ForgetPassword from "../screens/ForgetPassword";
import Help from "../screens/Help";
import { Button, View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import "@firebase/firestore";
import { useDispatch } from "react-redux";
import * as authActions from "../store/action/auth";

const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: "Home",
      headerTitleAlign: "center",
    },
  },
  reviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      headerTitle: "Details",
      headerTitleAlign: "center",
    },
  },
  postReview: {
    screen: PostReview,
    navigationOptions: {
      headerTitle: "Post Review",
      headerTitleAlign: "center",
    },
  },
  googleReviews: {
    screen: GoogleReviews,
    navigationOptions: {
      headerTitle: "Google Reviews",
      headerTitleAlign: "center",
    },
  },
});

const afterAuthDrawerNav = createDrawerNavigator(
  {
    afterAuthHome: {
      screen: HomeNavigator,
      navigationOptions: {
        title: "Home",
        headerTitleAlign: "center",
      },
    },
    myReviews: {
      screen: ReviewHistory,
      navigationOptions: {
        title: "My Reviews",
        headerTitleAlign: "center",
      },
    },
  },
  {
    contentComponent: (props) => {
      const [user, setUser] = useState();
      const [profilePhotoUrl, setProfilePhotoUrl] = useState(null);
      const { uid } = firebase.auth().currentUser;
      const db = firebase.firestore();
      const dispatch = useDispatch();

      const logOut = () => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            props.navigation.navigate("signInNav");
            dispatch(authActions.logOut());
          })
          .catch((err) => {
            throw err;
          });
      };

      const getUserData = async () => {
        try {
          const docSnapShot = await db.collection("users").doc(uid).get();
          const userData = docSnapShot.data();
          setUser(userData);
          firebase
            .storage()
            .ref(`users/${uid}/profileImage`)
            .getDownloadURL()
            .then((imgUrl) => {
              setProfilePhotoUrl(imgUrl);
            });
          console.log(userData);
        } catch (err) {
          throw err;
        }
      };

      useEffect(() => {
        getUserData();
      }, []);

      return (
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: "100%",
              height: 200,
              backgroundColor: "#0065ff",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Image
              source={{ uri: profilePhotoUrl }}
              style={{
                width: 90,
                height: 90,
                borderColor: "#fff",
                borderWidth: 0.7,
                borderRadius: 50,
                marginHorizontal: 20,
              }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                marginHorizontal: 20,
                marginVertical: 5,
              }}
            >
              {user && user?.firstname + " " + user?.lastname}
            </Text>
          </View>
          <DrawerItems {...props} />
          <View style={{ alignItems: "center" }}>
            <View style={{ width: "95%", height: "100%" }}>
              <Button title="Logout" color="#0065ff" onPress={logOut} />
            </View>
          </View>
        </View>
      );
    },
  }
);

const SignInNavigator = createStackNavigator({
  signin: {
    screen: SignIn,
    navigationOptions: {
      headerShown: false,
    },
  },
  forgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const authSignUpDrawer = createSwitchNavigator({
  signUp: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false,
    },
  },
  homeAfterSignUpAuth: afterAuthDrawerNav,
});

const authWithDrawer = createSwitchNavigator({
  signInNav: SignInNavigator,
  homeAfterAuth: afterAuthDrawerNav,
});

const beforeAuthDrawerNav = createDrawerNavigator(
  {
    home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: "Home",
      },
    },
    signin: {
      screen: authWithDrawer,
      navigationOptions: {
        title: "Sign In",
      },
    },
    signup: {
      screen: authSignUpDrawer,
      navigationOptions: {
        headerShown: false,
        title: "Sign Up",
      },
    },
    help: {
      screen: Help,
      navigationOptions: {
        title: "Help",
        headerTitleAlign: "center",
      },
    },
  },
  {}
);
export default createAppContainer(beforeAuthDrawerNav);
