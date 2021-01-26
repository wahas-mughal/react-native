import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {Dimensions} from 'react-native'
import homeDealerStack from "./homeDealerstack";
import bookingStack from "./Bookingstack";
import accountStack from "./Accountstack";
import favouriteStack from "./Favouritestack";
import Helpstack from "./Helpstack";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/LoginStackScreens/Logins";
import SignUp from "../screens/LoginStackScreens/Signup";
import forgotPassword from "../screens/LoginStackScreens/Forgetpassword";
import IdentityScreen1 from "../screens/LoginStackScreens/Identityscreena";
import IdentityScreen2 from "../screens/LoginStackScreens/Identityscreenb";
import IdentityScreen3 from "../screens/LoginStackScreens/Identityscreenc";
import "@firebase/firestore";
import * as firebase from "firebase";

customSideBar = (props) => {

  const [user, setUser] = useState(null);
  const { uid } = firebase.auth().currentUser;
  const db = firebase.firestore();

  const getUserData = async () => {
    try {
      const docSnapShot = await db.collection("users").doc(uid).get();
      const userData = docSnapShot.data();
      setUser(userData);
      console.log(userData);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View>
      <View style={styles.profileView}>
        <Text
          style={{
            paddingTop: 10,
            color: "#fff",
            fontWeight: "bold",
            fontSize: 17,
            textTransform: 'uppercase'
          }}
        >
          {user && user?.firstname + " " + user?.lastname}
        </Text>
      </View>
      <DrawerItems {...props} />
    </View>
  );
};

const drawNavigation = createDrawerNavigator(
  {
    Home: {
      screen: homeDealerStack,
      navigationOptions: {
        drawerIcon: (
          <MaterialCommunityIcons
            name="home-circle"
            size={26}
            color="#03c4ff"
          />
        ),
      },
    },

    Account: {
      screen: accountStack,
      navigationOptions: {
        drawerIcon: (
          <MaterialCommunityIcons
            name="account-circle"
            size={26}
            color="#03c4ff"
          />
        ),
      },
    },

    "My Bookings": {
      screen: bookingStack,
      navigationOptions: {
        drawerIcon: <FontAwesome5 name="car-alt" size={26} color="#03c4ff" />,
      },
    },

    "My Favourites": {
      screen: favouriteStack,
      navigationOptions: {
        drawerIcon: (
          <MaterialCommunityIcons
            name="heart-circle"
            size={26}
            color="#03c4ff"
          />
        ),
      },
    },

    Help: {
      screen: Helpstack,
      navigationOptions: {
        drawerIcon: (
          <View>
            <MaterialCommunityIcons
              name="help-circle"
              size={26}
              color="#03c4ff"
            />
          </View>
        ),
      },
    },
  },

  {
    initialRouteName: "Home",
    drawerPosition: "left",
    contentComponent: customSideBar,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "drawerToggle",
    contentOptions: {
      labelStyle: {
        fontSize: 15,
        paddingVertical: 5,
      },
    },
  }
);

const identificationStack = createStackNavigator(
  {
    "Identification (3/1)": {
      screen: IdentityScreen1,
    },

    "Identification (3/2)": {
      screen: IdentityScreen2,
    },

    "Identification (3/3)": {
      screen: IdentityScreen3,
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: "center",
    },
  }
);

const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },

  Signup: {
    screen: SignUp,
    navigationOptions: {
      headerShown: false,
    },
  },

  Forgetpassword: {
    screen: forgotPassword,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const loginIdentityStack = createSwitchNavigator({
  loginStack: LoginStack,
  identityStack: identificationStack,
});

const AppNavigator = createSwitchNavigator({
  Loginstack: {
    screen: loginIdentityStack,
    navigationOptions: {
      headerShown: false,
    },
  },
  drawerStack: {
    screen: drawNavigation,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  profileView: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom: 20,
    height: Dimensions.get('window').width/2,
    backgroundColor: "#03c4ff",
  },
});
