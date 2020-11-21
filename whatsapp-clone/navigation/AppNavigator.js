import Home from "../screens/WhatsappHome/Home";
import React from "react";
import { View } from "react-native";
import Status from "../screens/WhatsappHome/Status";
import OpenChat from "../screens/WhatsappHome/OpenChat";
import CallsLog from "../screens/WhatsappHome/CallsLog";
import ChatList from "../screens/WhatsappHome/ChatList";
import OpenStatus from "../screens/WhatsappHome/OpenStatus";
import OpenCallLog from "../screens/WhatsappHome/OpenCallLog";
import Camera from "../screens/WhatsappHome/Camera";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Colors from "../constants/Color";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Color from "../constants/Color";
import { FontAwesome } from "@expo/vector-icons";
import TabBar from "../components/TabBar";

// const homeNavigator = createStackNavigator(
//   {
//     home: Home,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Colors.primary,
//       },
//     },
//   }
// );

const chatStack = createStackNavigator({
  chatlist: {
    screen: ChatList,
    navigationOptions: {
      headerShown: false,
    },
  },
  openChat: OpenChat,
});
const statusStack = createStackNavigator({
  status: {
    screen: Status,
    navigationOptions: {
      headerShown: false,
    },
  },
  openStatus: OpenStatus,
});
const callsLogStack = createStackNavigator({
  callsLog: {
    screen: CallsLog,
    navigationOptions: {
      headerShown: false,
    },
  },
  openCallLog: OpenCallLog,
});

const topTabNavigator = createMaterialTopTabNavigator(
  {
    camera: {
      screen: Camera,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome name="camera" size={21} color={tabInfo.tintColor} />
          );
        },
      },
    },
    chat: {
      screen: chatStack,
    },
    status: {
      screen: statusStack,
    },
    calls: {
      screen: callsLogStack,
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions:{
      activeTintColor: '#fff',
      inactiveTintColor: 'rgba(204, 204, 204, 0.7)',
      indicatorStyle: {
        backgroundColor: '#fff'
      }
    },

    // tabBarOptions: {
    //   style: {
    //     backgroundColor: Color.primary,
    //   },
    //   labelStyle: {
    //     fontSize: 15,
    //     fontWeight: "bold",
    //   },
    //   indicatorStyle: {
    //     backgroundColor: Colors.secondary,
    //   },
    //   // showIcon: true,
    // },
    initialRouteName: "chat",
  }
);

export default createAppContainer(topTabNavigator);
