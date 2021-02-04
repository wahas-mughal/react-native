import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "react-native";
import { NavigationActions } from "react-navigation";
import CustomButton from "../../../shared/CustomButton";

export default function ConfirmBooking({ navigation }) {
  return (
    <View style={styles.topContainer}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/check-mark.png")}
        />
        <Text style={styles.mainText}>
          Your booking has been confirmed! Play wait for the rent dealer to
          accept your booking.{" "}
        </Text>
        <CustomButton
          style={styles.btn}
          onPress={() => navigation.navigate("carsAvaialble")}
          text="Okay, that's great!"
        />
      </View>
    </View>
  );
}

ConfirmBooking.navigationOptions = {
  headerTitle: "Confirm Booking",
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  btn: {
    width: 170,
  },
  mainText: {
    fontFamily: "open-sans-regular",
    fontSize: 16,
    color: "black",
    marginTop: 30,
    marginBottom: 10,
  },
  topContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
