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
import Card from "../../shared/Card";
import FeaturedDealers from "../../components/FeaturedDealers";
import AllDealers from "../../components/AllDealers";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Homescreen({ navigation }) {
  let TouchableNativeOpacity = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableNativeOpacity onPress={() => navigation.navigate("MapScreen")}>
        <View style={styles.locationView}>
          <Card style={styles.location}>
            <Text style={styles.locationText}>
              Current Location:{" "}
              <Text style={{ fontFamily: "open-sans-bold", color: "#03c4ff" }}>
                Nazimabad
              </Text>
            </Text>
            <FontAwesome5 name="search-location" size={24} color="black" />
          </Card>
        </View>
      </TouchableNativeOpacity>
      <FeaturedDealers navigation={navigation} />
      <Text
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          width: 330,
          marginHorizontal: 13,
        }}
      >
        {" "}
      </Text>
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
