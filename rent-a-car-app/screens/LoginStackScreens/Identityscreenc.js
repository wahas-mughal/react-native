import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { globalstyles } from "../../style/global";
import Card from "../../shared/Card";
import { Foundation } from "@expo/vector-icons";
import * as firebase from "firebase";
import * as ImagePicker from "expo-image-picker";

export default function IdentityScreen3({ navigation }) {

  const imagePickHandler = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      uploadImage(result.uri, "Selfie with ID Card")
      .then(() => {
          Alert.alert("Your selfie is uploaded successfully!");
      })
      .catch((err) => {
          throw err;
      })
    }
  };

  const uploadImage = async (imageURI, LicenseImage) => {
    const res = await fetch(imageURI);
    const blob = await res.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("verification-documents/selfies/" + LicenseImage);
    return ref.put(blob);
  };

  return (
    <View style={globalstyles.container}>
      <TouchableOpacity onPress={imagePickHandler} style = {{height: '60%', width: '100%'}}>
        <View>
          <Card style={globalstyles.IdentityCameraContent}>
            <Image
              style={{ width: 150, height: 150 }}
              source={require("../../assets/images/addphoto.png")}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>ADD YOUR PHOTO WITH LICENSE
            </Text>
            <Text style={{ color: "black", marginTop:5 }}>Tap here to upload your selfie with the ID Card, make sure that the photo is clear.
            </Text>
          </Card>
        </View>
      </TouchableOpacity>

      <View style={globalstyles.cameraContent}>
        <Text style={{ fontSize: 18, fontStyle: "italic", color: "black" }}>
       Your selfie with ID Card is for verification purposes only and will
          not be shown publicly. Photo should be four sided corner.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#03c4ff",
          paddingTop: 5,
          height: "14%",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={globalstyles.BackwardIcon}>
            <Foundation name="previous" size={35} color="white" />
            <Text style={{ color: "white" }}>Prev</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Identification (3/1)")}
        >
          <View style={globalstyles.smallbutton}>
            <Text style={globalstyles.smallbuttonText}>SKIP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={globalstyles.ForwardIcon}>
            <Foundation name="next" size={35} color="white" />
            <Text style={{ color: "white" }}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
