import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = (props) => {

  //set the location where user touches on the map
  const [selectedLocation, setSelectedLocation] = useState();

  const initialRegion = {
    latitude: 24.860966,
    longitude: 66.990501,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onSelectLocationHandler = (event) => {
    console.log(event);
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    });
  };

  return (
    <MapView
      style={styles.map}
      region={initialRegion}
      onPress={onSelectLocationHandler}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;
