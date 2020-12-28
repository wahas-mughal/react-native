import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import Card from "../../../shared/Card";
import { Ionicons } from "@expo/vector-icons";

export default function SelectCreditCard({ navigation }) {

  const bookingData = navigation.getParam('bookingData');
  

  let TouchableNativeOpacity = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <TouchableNativeOpacity onPress={() => navigation.navigate("Bank Details")}>
        <View style = {{ marginVertical: 10}}>
          <Card style={styles.card}>
            <Text style={styles.mainText}> Add an other credit card</Text>
            <Ionicons name="ios-add-circle-outline" size={27} color="#03c4ff" />
          </Card>
        </View>
      </TouchableNativeOpacity>
      <Text style={styles.savedCardText}> Saved Cards </Text>
      <TouchableNativeOpacity
        onPress={() => navigation.navigate("confirmPayment", {bookingData: bookingData})}
      >
        <View>
          <Card style={styles.creditCardView}>
            <Text style={styles.mainText}>Card: Wahas Ali Mughal </Text>
            <Text style={styles.mainText}>
              Card Number: XXXX-XXXX-XXXX-XXXX
            </Text>
          </Card>
        </View>
      </TouchableNativeOpacity>
    </View>
  );
}

SelectCreditCard.navigationOptions = {
  headerTitle: "Select Your Credit Card",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20
  },
  mainText: {
    fontFamily: "open-sans-regular",
    fontSize: 16,
  },
  creditCardView: {
    padding: 15,
  },
  savedCardText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginVertical: 15,
  },
});
