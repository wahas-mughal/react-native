import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Card from "../../../shared/Card";
import { Ionicons } from "@expo/vector-icons";

export default function PaymentMethod({ navigation }) {
  const title = navigation.getParam("title");
  const rent = navigation.getParam("rent");
  const duration = navigation.getParam("duration")

  let TouchableAndroidOpacity = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableAndroidOpacity = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        How would you like to pay for the booking?
      </Text>
      <View style={{ width: "100%" }}>
        <TouchableAndroidOpacity
          onPress={() => navigation.navigate("selectCreditCard", {bookingData: {title: title, rent: rent, duration: duration, paymentMethod: 'Credit Card'}})}
        >
          <View style={{ marginVertical: 15, marginHorizontal: 10 }}>
            <Card style={styles.card}>
              <Text style={styles.text}> Pay using credit card</Text>
              <Ionicons name="ios-checkmark-circle" size={24} color="#03c4ff" />
            </Card>
          </View>
        </TouchableAndroidOpacity>
        <TouchableAndroidOpacity
          onPress={() =>
            navigation.navigate("confirmPayment",{bookingData: {title: title, rent: rent, duration: duration, paymentMethod: 'Cash on delivery'}})
          }
        >
          <View style={{ marginVertical: 15, marginHorizontal: 10 }}>
            <Card style={styles.card}>
              <Text style={styles.text}> Pay on receiving the vehicle </Text>
              <Ionicons name="ios-checkmark-circle" size={24} color="#03c4ff" />
            </Card>
          </View>
        </TouchableAndroidOpacity>
      </View>
    </View>
  );
}

PaymentMethod.navigationOptions = {
  headerTitle: "Payment Method",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "#03c4ff",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  card: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "open-sans-regular",
    fontSize: 16,
  },
});
