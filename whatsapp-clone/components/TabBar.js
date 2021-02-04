import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TabBar = (props) => {
  // console.log(props)
  const {
    navigationState,
    navigation,
    activeTintColor,
    inactiveTintColor,
  } = props;

  ///get the index of the active tab
  const activeTabIndex = navigation.state.index;

  return (
    <View style={styles.tabContainer}>
      {/* map the navigationState.route which recieves two arguments i.e. route and index*/}
      {navigationState.routes.map((route, index) => {
        //if the index received equals to active tab
        const isRouteActive = index === activeTabIndex;
        //if the tab is active then set the active and inactive tab colors
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
        //if the tab is active set the border bottom color
        const indicatorColor = isRouteActive ? "#fff" : "#075E54";

        return (
          <TouchableOpacity
            // navigation to the route i.e. route.routeName
            onPress={() => navigation.navigate(route.routeName)}
            key={route.routeName}
            activeOpacity={0.2}
          >
            {/* if the routeName is equals to camera then return this view */}
            {route.routeName === "camera" ? (
              <View style={{ paddingVertical: 13, paddingHorizontal: 14 }}>
                <FontAwesome
                  name="camera"
                  size={19}
                  color="rgba(204, 204, 204, 0.7)"
                />
              </View>
              // else return this view*
            ) : (
              <View>
                <View
                  style={{
                    borderBottomColor: `${indicatorColor}`,
                    borderBottomWidth: 4,
                    paddingHorizontal: 30,
                    paddingVertical: 13,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      textTransform: "uppercase",
                      color: `${tintColor}`,
                      fontWeight: "bold",
                    }}
                  >
                    {route.routeName}
                  </Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  textWhite: {
    color: "#fff",
  },
  tabContainer: {
    backgroundColor: "#075E54",
    width: "100%",
    flexDirection: "row",
    height: 50,
  },
});
export default TabBar;
