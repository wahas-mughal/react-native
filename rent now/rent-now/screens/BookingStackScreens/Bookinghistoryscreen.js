import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { globalstyles } from "../../style/global";

export default function BookingHistory({navigation}) {
  const bookingID = navigation.getParam('id');
  console.log(bookingID);
  const bookingData = useSelector((state) => state.bookings.bookings.filter(booking => booking.bookingId === bookingID));
  console.log(bookingData);
  return (
    <FlatList
      data={bookingData}
      keyExtractor = {(item) => item.bookingId}
      renderItem={(itemData) => (
        <View style={styles.historyContainer}>
          <View style={globalstyles.card}>
            <Image
              source={{uri: itemData.item.carImage}}
              style={styles.coverImage}
              resizeMode="cover"
            />

            <Text style={styles.headingText}> Booking Details </Text>

            <View style={styles.textView}>
              <Text style={styles.text}>
                Car:{" "}
                <Text style={styles.innerText}> {itemData.item.vehicle} </Text>{" "}
              </Text>
              <Text style={styles.text}>
                Rent:{" "}
                <Text style={styles.innerText}> {itemData.item.rent} </Text>
              </Text>
              <Text style={styles.text}>
               Rent Duration:{" "}
                <Text style={styles.innerText}>
                  {" "}
                  {itemData.item.rentDuration} Day
                </Text>
              </Text>
              <Text style={styles.text}>
                Status: <Text style={[styles.innerText, {color: '#03c4ff', fontWeight: 'bold'}]}> On-Going </Text>{" "}
              </Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  historyContainer: {
    padding: 20,
  },
  coverImage: {
    width: 320,
    height: 200,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 3,
  },
  textView: {
    marginTop: 10,
    marginBottom: 10,
  },
  innerText: {
    fontWeight: "normal",
    fontSize: 14,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
});
