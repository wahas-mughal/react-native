import React, { useState, useEffect, useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Card from "../shared/Card";
import { useSelector, useDispatch } from "react-redux";
import * as bookingActions from "../store/actions/bookings";

function BookingList({ navigation }) {
  const bookingData = useSelector((state) => state.bookings.userBookings);
  console.log(bookingData);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const fetchBookings = useCallback(async () => {
    setIsLoading(true);
    await dispatch(bookingActions.fetchBookings());
    setIsLoading(false);
  }, [dispatch, setIsLoading]);

  // // this effect runs whenver this screen is switch between other screens
  useEffect(() => {
    const willFocus = navigation.addListener("willFocus", fetchBookings);
    return () => {
      willFocus.remove();
    };
  }, [fetchBookings]);

  useEffect(() => {
    fetchBookings();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size={32} color="#03c4ff" />
      </View>
    );
  }

  return (
    <View>
      {bookingData.map((items) => (
        <View key={items.userId} style={{ margin: 10 }}>
          <Card style={{ padding: 15 }}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                navigation.navigate("BookingHistory", { id: items.bookingId })
              }
            >
              <View style={styles.historyView}>
                <View style={{ width: 170 }}>
                  <Text style={styles.carTitle} numberOfLines={1}>
                    {" "}
                    {items.vehicle}{" "}
                  </Text>
                </View>
                <View style={styles.onGoingStatusView}>
                  <Text style={styles.statusText}>On-Going</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Card>
        </View>
      ))}
    </View>
  );
}

export default function MyBookings({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={{ margin: 10 }}>
        <Text style={styles.headingText}> Bookings Overview</Text>
        <BookingList navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
    marginLeft: 4,
    marginTop: 10,
  },
  historyView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 280,
  },
  onGoingStatusView: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 20,
    width: 83,
    height: 30,
    backgroundColor: "#03c4ff",
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  statusText: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  completedStatusView: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 20,
    width: 83,
    height: 30,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  carTitle: {
    fontSize: 16,
    fontWeight: "900",
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
