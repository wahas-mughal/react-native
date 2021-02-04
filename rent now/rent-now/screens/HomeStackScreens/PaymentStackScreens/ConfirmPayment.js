import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Card from "../../../shared/Card";
import CustomButton from "../../../shared/CustomButton";
import {useDispatch} from 'react-redux';
import * as bookingActions from '../../../store/actions/bookings';

export default function ConfirmPayment({ navigation }) {

  const bookingData = navigation.getParam('bookingData');

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Confirm your booking!</Text>
      <Card style={styles.card}>
        <Text style={styles.bookingDetails}>
          Vehicle:
          <Text
            style={{
              color: "#03c4ff",
              fontFamily: "open-sans-regular",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {" "}
            {bookingData.title}
          </Text>
        </Text>
      </Card>
      <Card Card style={styles.card}>
        <Text style={styles.bookingDetails}>
          {" "}
          Rent:{" "}
          <Text
            style={{
              color: "#03c4ff",
              fontFamily: "open-sans-regular",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {bookingData.rent}{" "}
          </Text>
        </Text>
      </Card>
      <Card Card style={styles.card}>
        <Text style={styles.bookingDetails}>
          {" "}
          Rent duration (in days):{" "}
          <Text
            style={{
              color: "#03c4ff",
              fontFamily: "open-sans-regular",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {bookingData.duration}
            </Text>{" "}
        </Text>
      </Card>
      <Card Card style={styles.card}>
        <Text style={styles.bookingDetails}>
          {" "}
          Payment Method:{" "}
          <Text
            style={{
              color: "#03c4ff",
              fontFamily: "open-sans-regular",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {bookingData.paymentMethod}
          </Text>{" "}
        </Text>
      </Card>
      <View style={styles.btnView}>
        <CustomButton
          onPress={() => navigation.navigate("carsAvaialble")}
          text="Cancel"
          navigation={navigation}
        />
        <CustomButton
          onPress={() => {
            dispatch(bookingActions.addBooking(bookingData.title, bookingData.carImage, bookingData.rent ,bookingData.duration, bookingData.paymentMethod ))
            // console.log("Confirmed")
            navigation.navigate("confirmBooking");
          }}
          text="Confirm"
          navigation={navigation}
        />
      </View>
    </View>
  );
}

ConfirmPayment.navigationOptions = {
  headerTitle: "Confirm Payment",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    marginTop: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "#03c4ff",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  card: {
    padding: 10,
    width: "100%",
    elevation: 1,
    backgroundColor: "#fff",
    marginVertical: 8,
  },
  bookingDetails: {
    marginVertical: 10,
    fontFamily: "open-sans-regular",
    fontSize: 15,
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
