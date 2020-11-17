import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, Alert } from "react-native";
import Colors from "../constants/Color";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ImgPicker = (props) => {
  const [imagePicked, setImagePicked] = useState(null);

  console.log(imagePicked);

  //verify camera permissions for iOS camera using Permissions extra package! because permissions in iOS works differently
  //We need both CAMERA and CAMERA_ROLL permissions to access the camera in iOS although we are just need CAMERA in this app.
  
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
    if (result.status !== "granted") {
      Alert.alert(
        "Permissions Denied!",
        "You need to grant permissions to open the device camera",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const imgPickerHandler = async () => {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    }); //for android this line of code will work
    
    setImagePicked(image.uri);
    
    //pass the image to the parent component NewPlaceScreen.js
    props.imageTaken(image.uri);

  }
  return (
    <View style={styles.imgPickerContainer}>
      <View style={styles.imgPickerPreview}>
        {!imagePicked ? (
          <Text> No image picked yet! </Text>
        ) : (
          <Image source={{ uri: imagePicked }} style={styles.img} />
        )}
      </View>
      <Button
        title="Open Camera"
        onPress={imgPickerHandler}
        color={Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgPickerContainer: {
    alignItems: "center",
  },
  imgPickerPreview: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default ImgPicker;
