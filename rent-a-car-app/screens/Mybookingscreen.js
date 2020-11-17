import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Card from "../shared/Card";

export default function MyBookings({ navigation }) {
  return (
      <ScrollView style={styles.container}>
        <Text style={styles.headingText}> Bookings Overview</Text>
          <Card style = {{padding: 15, margin: 10}}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("BookingHistory")}
            >
              <View style={styles.historyView}>
                <Text style={styles.carTitle}>Suzuki Liana </Text>
                <View style={styles.onGoingStatusView}>
                  <Text style={styles.statusText}>On-Going</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Card>
          <Card style = {{padding: 15, margin: 10}}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("BookingHistory")}
            >
              <View style={styles.historyView}>
                <Text style={styles.carTitle}>Suzuki Liana </Text>
                <View style={styles.completedStatusView}>
                  <Text style={styles.statusText}>Completed</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Card>

      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    marginLeft: 4,
    marginTop: 10
  },
  historyView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
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
    marginRight: 10
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
    marginHorizontal: 10
  },
  carTitle: {
    fontSize: 16,
    fontWeight: "900",
  },
});
