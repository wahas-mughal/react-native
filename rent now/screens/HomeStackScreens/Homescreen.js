import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import AllDealers from "../../components/AllDealers";

export default function Homescreen({ navigation }) {
  let TouchableNativeOpacity = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AllDealers navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  locationView: {
    margin: 20,
  },
  location: {
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationText: {
    fontFamily: "open-sans-regular",
    fontSize: 15,
  },
});
