import React from "react";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import Register from "../screens/Register";
import Settings from "../screens/Setting/Settings";
import Follow from "../screens/Setting/Follow";
import Help from "../screens/Setting/HelpSection/Help";
import DataPolicy from "../screens/Setting/AboutSection/DataPolicy";
import TermsOfUse from "../screens/Setting/AboutSection/TermsOfUse";
import Notifications from "../screens/Setting/Notifications";
import PrivacyAndSecurity from "../screens/Setting/HelpSection/PrivacyAndSecurity";
import Report from "../screens/Setting/HelpSection/Report";
import Privacy from "../screens/Setting/Privacy";
import Security from "../screens/Setting/Security";
import About from "../screens/Setting/AboutSection/About";
import Theme from "../screens/Setting/Theme";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Search from "../screens/Search";
import Likes from "../screens/Likes";
import Profile from "../screens/Profile";
import AddImage from "../screens/AddImage";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AddButtonIcon from "../components/AddButtonIcon";
import Intro from "../screens/Intro";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: "#292929",
  },
  headerTintColor: "#fff",
};

const HelpNavigator = createStackNavigator({
  helpNav: {
    screen: Help,
    navigationOptions: {
      headerTitle: "Help",
    },
  },
  privacyandsecurity: {
    screen: PrivacyAndSecurity,
    navigationOptions: {
      headerTitle: "Privacy and Security",
    },
  },
  report: {
    screen: Report,
    navigationOptions: {
      headerTitle: "Report",
    },
  },
},{
  defaultNavigationOptions: defaultNavOptions
});

const AboutNavigator = createStackNavigator({
  aboutNav: {
    screen: About,
    navigationOptions: {
      headerTitle: "About",
    },
  },
  datapolicy: {
    screen: DataPolicy,
    navigationOptions: {
      headerTitle: "Data Policy",
    },
  },
  termsofuse: {
    screen: TermsOfUse,
    navigationOptions: {
      headerTitle: "Term Of Use",
    },
  },
},{
  defaultNavigationOptions: defaultNavOptions
});

const settingsNavigator = createStackNavigator(
  {
    settings: {
      screen: Settings,
      navigationOptions: {
        headerTitle: "Settings",
      },
    },
    follow: {
      screen: Follow,
      navigationOptions: {
        headerTitle: "Follow and Invite",
      },
    },
    help: {
      screen: HelpNavigator,
      navigationOptions: {
        headerShown: false
      },
    },
    notifications: {
      screen: Notifications,
      navigationOptions: {
        headerTitle: "Notifications",
      },
    },
    privacy: {
      screen: Privacy,
      navigationOptions: {
        headerTitle: "Privacy",
      },
    },
    security: {
      screen: Security,
      navigationOptions: {
        headerTitle: "Security",
      },
    },
    about: {
      screen: AboutNavigator,
      navigationOptions: {
        headerTitle: "About",
        headerShown: false
      },
    },
    theme: {
      screen: Theme,
      navigationOptions: {
        headerTitle: "Themes",
      },
    },
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const profileNavigator = createStackNavigator({
  profile: {
    screen: Profile,
    navigationOptions: {
      headerShown: false,
    },
  },
  settingsNav: {
    screen: settingsNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const bottomTabNavigator = createBottomTabNavigator(
  {
    dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <SimpleLineIcons name="home" size={30} color={tintColor} />;
        },
      },
    },
    search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <Octicons name="search" size={30} color={tintColor} />;
        },
      },
    },
    addimage: {
      screen: AddImage,
      navigationOptions: ({ navigation }) => {
        return {
          tabBarIcon: ({ tintColor }) => {
            return <AddButtonIcon navigation={navigation} color={tintColor} />;
          },
        };
      },
    },
    likes: {
      screen: Likes,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <MaterialCommunityIcons
              name="cards-heart"
              size={30}
              color={tintColor}
            />
          );
        },
      },
    },
    profile: {
      screen: profileNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return (
            <MaterialIcons name="person-outline" size={40} color={tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#ff6600",
      keyboardHidesTabBar: true,
      style: {
        position: "absolute",
      },
    },
  }
);

profileNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === "settingsNav") {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

const AppNavigator = createStackNavigator(
  {
    login: Login,
    register: Register,
    intro: Intro,
    dashboardBottomNav: bottomTabNavigator,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(AppNavigator);
