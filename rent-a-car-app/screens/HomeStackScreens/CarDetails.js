import React, {useState} from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  FlatList,
  Button,
} from "react-native";
import { useSelector } from "react-redux";
import { Picker } from "@react-native-community/picker";

export default function CarDetails({ navigation }) {
  const carID = navigation.getParam("id");

  const [selectedValue, setSelectedValue] = useState("1");

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
              <View style = {{marginVertical: 10, }}>
                <Text style = {styles.descriptionText}>Duration</Text>
                <Picker
                  selectedValue={selectedValue}
                  style={{ width: 150, height: 50 }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }
                >
                  <Picker.Item label="1 Day" value="1" />
                  <Picker.Item label="2 Days" value="2" />
                  <Picker.Item label="3 Days" value="3" />
                  <Picker.Item label="4 Days" value="4" />
                  <Picker.Item label="5 Days" value="5" />
                  <Picker.Item label="6 Days" value="6" />
                  <Picker.Item label="7 Days" value="7" />
                  <Picker.Item label="8 Days" value="8" />
                  <Picker.Item label="9 Days" value="9" />
                  <Picker.Item label="10 Days" value="10" />
                  <Picker.Item label="11 Days" value="11" />
                  <Picker.Item label="12 Days" value="12" />
                  <Picker.Item label="13 Days" value="13" />
                  <Picker.Item label="14 Days" value="14" />
                  <Picker.Item label="15 Days" value="15" />
                  <Picker.Item label="16 Days" value="16" />
                  <Picker.Item label="17 Days" value="17" />
                  <Picker.Item label="18 Days" value="18" />
                  <Picker.Item label="19 Days" value="19" />
                  <Picker.Item label="20 Days" value="20" />
                   <Picker.Item label="21 Days" value="21" />
                  <Picker.Item label="22 Days" value="22" />
                  <Picker.Item label="23 Days" value="23" />
                  <Picker.Item label="24 Days" value="24" />
                  <Picker.Item label="25 Days" value="25" />
                  <Picker.Item label="26 Days" value="26" />
                  <Picker.Item label="27 Days" value="27" />
                  <Picker.Item label="28 Days" value="28" />
                  <Picker.Item label="29 Days" value="29" />
                  <Picker.Item label="30 Days" value="30" />
                </Picker>
              </View>
              <View style={styles.btn}>
                <Button
                  title="Book Now"
                  color="#03c4ff"
                  onPress={() =>
                    navigation.navigate("paymentMethod", {
                      title: itemData.item.title,
                      rent: itemData.item.rent,
                      duration: selectedValue
                    })
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
