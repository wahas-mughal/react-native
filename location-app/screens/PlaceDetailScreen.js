import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import MapPreview from "../components/MapPreview";
import Colors from '../constants/Color';

const PlaceDetailScreen = (props) => {
  const placeId = props.navigation.getParam("id");
  const selLocation = useSelector((state) =>
    state.places.places.find((place) => place.id === placeId)
  );

  const locPicked = {lat: selLocation.lat, lng: selLocation.lng}
  const readOnlyMapHandler = () => {
    props.navigation.navigate('MapScreen', {readonly: true, initialLocation: locPicked });
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selLocation.imageUri}} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}> {selLocation.address} </Text>
        </View>
        <MapPreview
          style={styles.mapPreview}
          location={locPicked}
          openMap = {readOnlyMapHandler}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
    backgroundColor: "#ccc",
  },
  locationContainer: {
    marginVertical: 20,
    width: "90%",
    maxWidth: 350,
    marginHorizontal: 17,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary,
    textAlign: "center",
  },
  mapPreview: {
    width: "100%",
    maxWidth: 350,
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});

PlaceDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("title"),
  };
};

export default PlaceDetailScreen;
