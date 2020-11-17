import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import Card from "../../shared/Card";

const BookedCars = props => {
  const carData = useSelector((state) =>
    state.cars.allCars.filter((car) => car.rent > 5000)
  );
  const dealerName = useSelector((state) =>
    state.dealers.allDealers.find((dealer) => dealer.dealerId === "d1")
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={carData}
        keyExtractor={(item) => item.carId}
        renderItem={(itemData) => (
            <View>
              <Card style={styles.card}>
                <View style={{ width: 220 }}>
                  <Text style={styles.carTitle} numberOfLines={1}>
                    {itemData.item.title}
                  </Text>
                </View>
                <Text style={styles.carRent}>Rs.{itemData.item.rent}</Text>
              </Card>
            </View>
        )}
      />
    </View>
  );
}

BookedCars.navigationOptions = {
  headerTitle: 'Booked Cars'
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  carTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
  },
  carRent: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
    color: "#03c4ff",
  },
});

export default BookedCars;