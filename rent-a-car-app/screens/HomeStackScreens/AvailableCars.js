import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";
import Card from "../../shared/Card";
import { ALL_DEALERS } from "../../data/dummy-data";

const AvailableCars = (props) => {
  const carData = useSelector((state) => state.cars.allCars);

  let TouchableAndroidOpacity = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableAndroidOpacity = TouchableNativeFeedback;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={carData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.carId}
        renderItem={(itemData) => (
          <TouchableAndroidOpacity
            onPress={() =>
              props.navigation.navigate("carDetails", {
                id: itemData.item.carId,
                title: itemData.item.title,
              })
            }
          >
            <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
              <Card style={styles.card}>
                <Text style={styles.carTitle} numberOfLines={1}>
                  {itemData.item.title}
                </Text>
                <Text style={styles.carRent}>Rs.{itemData.item.rent}</Text>
              </Card>
            </View>
          </TouchableAndroidOpacity>
        )}
      />
    </View>
  );
};

AvailableCars.navigationOptions = {
  headerTitle: "Available Cars",
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    // marginVertical: 10,
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

export default AvailableCars;
