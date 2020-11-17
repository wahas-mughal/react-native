import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  FlatList,
  Button,
} from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import Card from "../../shared/Card";

export default function CarDetails({ navigation }) {
  const carID = navigation.getParam("id");
  const carDetails = useSelector((state) =>
    state.cars.allCars.filter((car) => car.carId === carID)
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={carDetails}
      keyExtractor={(item) => item.carId}
      renderItem={(itemData) => (
        <View style={{ backgroundColor: "white" }}>
          <View style={styles.imageView}>
            <ImageBackground
              style={styles.image}
              source={{ uri: itemData.item.coverImage }}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{itemData.item.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.details}>
            <View style={styles.detailsInnerView}>
              <Text style={styles.descriptionText}>About</Text>
              <Text>{itemData.item.description}</Text>
              <Text style={styles.line}> </Text>
              <Text style={styles.detailText}>Details</Text>
              <View style={styles.carDetailsView}>
                <View style={styles.carDetail}>
                  <Text style={styles.text}>Model: </Text>
                  <Text style={{ color: "#03c4ff", fontSize: 13 }}>
                    {" "}
                    {itemData.item.model}
                  </Text>
                </View>
                <View style={styles.carDetail}>
                  <Text style={styles.text}>Fuel Average: </Text>
                  <Text style={{ color: "#03c4ff", fontSize: 13 }}>
                    {" "}
                    {itemData.item.fuelAverage}
                  </Text>
                </View>
                <View style={styles.carDetail}>
                  <Text style={styles.text}>Rent: </Text>
                  <Text style={{ color: "#03c4ff", fontSize: 13 }}>
                    {" "}
                    {itemData.item.rent}
                  </Text>
                </View>
              </View>
              <View style={styles.btn}>
                <Button
                  title="Book"
                  color="#03c4ff"
                  onPress={() =>
                    navigation.navigate({ routeName: "paymentMethod" })
                  }
                />
              </View>
            </View>
          </View>
        </View>
      )}
    />
  );
}

CarDetails.navigationOptions = (navData) => {
  const carTitle = navData.navigation.getParam("title");

  return {
    headerTitle: carTitle,
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  imageView: {
    width: "100%",
    height: 260,
  },
  descriptionText: {
    marginVertical: 15,
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "black",
  },
  detailText: {
    marginVertical: 15,
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "black",
  },
  details: {
    padding: 5,
    width: "100%",
    height: "100%",
  },
  detailsInnerView: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  line: {
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  ratingText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    color: "white",
  },
  carDetail: {
    marginVertical: 2,
    flexDirection: "row",
  },
  carDetailsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  btn: {
    marginVertical: 15,
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 13,
  },
});
