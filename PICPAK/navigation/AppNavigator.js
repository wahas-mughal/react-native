import React from "react";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import LikedPost from "../screens/LikedPost";
import Register from "../screens/Register";
import Settings from "../screens/Setting/Settings";
import Follow from "../screens/Setting/Follow";
import Help from "../screens/Setting/HelpSection/Help";
import DataPolicy from "../screens/Setting/AboutSection/DataPolicy";
import TermsOfUse from "../screens/Setting/AboutSection/TermsOfUse";
import Notifications from "../screens/Setting/NotificationsSection/Notifications";
import PostsAndComments from "../screens/Setting/NotificationsSection/PostsAndComments";
import FollowersAndFollowing from "../screens/Setting/NotificationsSection/FollowersAndFollowing";
import PrivacyAndSecurity from "../screens/Setting/HelpSection/PrivacyAndSecurity";
import Report from "../screens/Setting/HelpSection/Report";
import Privacy from "../screens/Setting/PrivacySection/Privacy";
import BlockedAccounts from "../screens/Setting/PrivacySection/BlockedAccounts";
import FollowedAccounts from "../screens/Setting/PrivacySection/FollowedAccounts";
import Security from "../screens/Setting/SecuritySection/Security";
import ResetPassword from "../screens/Setting/SecuritySection/ResetPassword";
import LoginActivity from "../screens/Setting/SecuritySection/LoginActivity";
import SavedLoginInfo from "../screens/Setting/SecuritySection/SavedLoginInfo";
import About from "../screens/Setting/AboutSection/About";
import Theme from "../screens/Setting/Theme";
import Account from "../screens/Setting/AccountSection/Account";
import PersonalInformation from "../screens/Setting/AccountSection/PersonalInformation";
import Activity from "../screens/Setting/AccountSection/Activity";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Search from "../screens/Search";
import SearchScreen from "../screens/SearchScreen";
import Likes from "../screens/Likes";
import AllLikes from "../screens/AllLikes";
import FollowRequests from "../screens/FollowRequests";
import Profile from "../screens/Profile";
import AddImage from "../screens/AddImage";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AddButtonIcon from "../components/AddButtonIcon";
import Intro from "../screens/Intro";
import Verification from '../screens/Verification';
import { ScreenStack } from "react-native-screens";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: "#292929",
  },
  headerTintColor: "#fff",
};

const accountNavigator = createStackNavigator(
  {
    account: {
      screen: Account,
      navigationOptions: {
        headerTitle: "Account",
      },
    },
    personalinfo: {
      screen: PersonalInformation,
      navigationOptions: {
        headerTitle: "Personal Information",
      },
    },
    activity: {
      screen: Activity,
      navigationOptions: {
        headerTitle: "Activity",
      },
    },
    likedPost: {
      screen: LikedPost,
      navigationOptions: {
        headerTitle: "Liked Post",
      },
    },
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const securityNavigator = createStackNavigator(
  {
    security: {
      screen: Security,
      navigationOptions: {
        headerTitle: "Security",
      },
    },
    resetpassword: {
      screen: ResetPassword,
      navigationOptions: {
        headerTitle: "Reset Password",
      },
    },
    savedlogininfo: {
      screen: SavedLoginInfo,
      navigationOptions: {
        headerTitle: "Saved Login Info",
      },
    },
    loginactivity: {
      screen: LoginActivity,
      navigationOptions: {
        headerTitle: "Login Activity",
      },
    },
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const privacyNavigator = createStackNavigator(
  {
    privacyNav: {
      screen: Privacy,
      navigationOptions: {
        headerTitle: "Privacy",
      },
    },
    blockedaccounts: {
      screen: BlockedAccounts,
      navigationOptions: {
        headerTitle: "Block Accounts",
      },
    },
    followedaccounts: {
      screen: FollowedAccounts,
      navigationOptions: {
        headerTitle: "Followed Accounts",
      },
    },
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const notificationNavigator = createStackNavigator(
  {
    notificationsNav: {
      screen: Notifications,
      navigationOptions: {
        headerTitle: "Notifications",
      },
    },
    postsandcomments: {
      screen: PostsAndComments,
      navigationOptions: {
        headerTitle: "Posts And Comments",
      },
    },
    followersandfollowing: {
      screen: FollowersAndFollowing,
      navigationOptions: {
        headerTitle: "Followers And Following",
      },
    },
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const HelpNavigator = createStackNavigator(
  {
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
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const AboutNavigator = createStackNavigator(
  {
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
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

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
        headerShown: false,
      },
    },
    notifications: {
      screen: notificationNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
    privacy: {
      screen: privacyNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
    security: {
      screen: securityNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
    account: {
      screen: accountNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },

    about: {
      screen: AboutNavigator,
      navigationOptions: {
        headerTitle: "About",
        headerShown: false,
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
    defaultNavigationOptions: defaultNavOptions,
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

const likesNavigator = createStackNavigator({
  likesNav: {
    screen: Likes,
    navigationOptions: {
      headerShown: false,
    },
  },
  likedPost: {
    screen: LikedPost,
    navigationOptions:{
      headerTitle: 'Liked Post'
    }
  },
  alllikes: {
    screen: AllLikes,
    navigationOptions: {
      headerShown: false,
    },
  },
  newRequestFollowers: {
    screen: FollowRequests,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const dashboardNavigator = createStackNavigator(
  {
    dashboardNav: {
      screen: Dashboard,
      navigationOptions:{
        headerShown: false
      }
    },
    likedPost: {
      screen: LikedPost,
      navigationOptions:{
        headerTitle: 'Liked Post'
      }
    },
  },
  // {
  //   defaultNavigationOptions: {
  //     headerShown: false,
  //   },
  // }
);

const searchNavigator = createStackNavigator(
  {
    searchNav: {
      screen: Search,
      navigationOptions:{
        headerShown: false
      }
    },
    searchScreen: {
      screen: SearchScreen,
      navigationOptions:{
        headerTitle: 'Meet new people',
        headerStyle:{
          backgroundColor: 'orange'
        },
        headerTintColor: '#fff'
      }
    },
  },
);

const bottomTabNavigator = createBottomTabNavigator(
  {
    dashboard: {
      screen: dashboardNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          return <SimpleLineIcons name="home" size={30} color={tintColor} />;
        },
      },
    },
    search: {
      screen: searchNavigator,
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
      screen: likesNavigator,
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

searchNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === "search") {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

searchNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};

  if (routeName === "searchScreen") {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

const AppNavigator = createStackNavigator(
  {
    login: Login,
    verification: Verification,
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
