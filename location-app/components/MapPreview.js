import React from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import ENV from "../env";

const MapPreview = (props) => {
  let mapPreviewUrl;

  if (props.location) {
    mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:C%7C${props.location.lat},${props.location.lng}&key=${ENV.googleMapApiKey}`;
  }

  return (
    <TouchableOpacity style={{ ...styles.mapPreview, ...props.style }} onPress = {props.openMap}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
      ) : (
        props.children
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

export default MapPreview;
