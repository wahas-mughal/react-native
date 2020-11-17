import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PLatform,
  Platform,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Colors from "../constants/Color";

const MapScreen = (props) => {

  const choosenLocation = props.navigation.getParam('initialLocation');
  console.log(choosenLocation);
  const readPermission = props.navigation.getParam('readonly');
  const [selectedLocation, setSelectedLocation] = useState(choosenLocation);

  const initalRegion = {
    latitude: choosenLocation ? choosenLocation.lat : 24.860966,
    longitude: choosenLocation ? choosenLocation.lng : 66.990501,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    console.log(event);
    if (readPermission) {
      return;
    }
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  //pick the saved location
  const savePickedLocHandler = useCallback(() => {
    if (!selectedLocation) {
      return;
    }
    props.navigation.navigate("NewPlace", {
      selLocation: selectedLocation,
    });
  }, [selectedLocation]);

  useEffect(() => {
    props.navigation.setParams({ saveLocHandler: savePickedLocHandler });
  }, [savePickedLocHandler]);

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

  return (
    <MapView
      style={styles.map}
      region={initalRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinates && (
        <Marker title="Picked Location" coordinate={markerCoordinates} />
      )}
    </MapView>
  );
};

MapScreen.navigationOptions = (navData) => {
  const saveHandlerFunc = navData.navigation.getParam("saveLocHandler");
  const readPermission = navData.navigation.getParam("readonly");

  if (readPermission) {
    return {};
  }

  return {
    headerRight: () => (
      <TouchableOpacity style={styles.saveTextView} onPress={saveHandlerFunc}>
        <Text style={styles.saveText}> Save </Text>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  saveTextView: {
    marginHorizontal: 20,
  },
  saveText: {
    fontSize: 17,
    color: Platform.OS === "android" ? Colors.secondary : Colors.primary,
  },
});

export default MapScreen;
