import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert, Platform, TouchableNativeFeedback} from "react-native";
import { globalstyles } from "../../style/global";
import Card from "../../shared/Card";
import { Foundation } from "@expo/vector-icons";
import * as firebase from "firebase";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";

export default function IdentityScreen2({ navigation }) {
  const [imageUri, setImageUri] = useState(null);
  const uid = useSelector((state) => state.auth.userId);

  const imagePickHandler = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const imageURI = result.uri;
    setImageUri(imageURI);

    if (!result.cancelled) {
      uploadImage(imageURI)
        .then(() => {
          Alert.alert("Your ID Card photo is uploaded successfully!");
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  //upload images to firebase storage bucket
  const uploadImage = async (imageURI) => {
    const res = await fetch(imageURI);
    const blob = await res.blob();
    firebase.storage().ref().child(`users/${uid}/idcard-photo`).put(blob);
  };

  let TouchableNativeOpacity = TouchableOpacity;

  if(Platform.OS === 'android' && Platform.Version >= 21){
    TouchableNativeOpacity = TouchableNativeFeedback
  }

  return (
    <View style={globalstyles.container}>
      {imageUri ? (
        <View style={{ height: "60%", width: "100%" }}>
          <Card style={globalstyles.IdentityCameraContent}>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
            >
              Thank you! please proceed forward.
            </Text>
          </Card>
        </View>
      ) : (
        <TouchableNativeOpacity
          onPress={imagePickHandler}
        >
          <View style={{ height: "60%", width: "100%" }}>
            <Card style={globalstyles.IdentityCameraContent}>
              <Image
                style={{ width: 150, height: 150, }}
                source={require("../../assets/images/addphoto.png")}
              />
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                ADD ID PHOTO
              </Text>
              <Text style={{ color: "black", marginTop: 5, textAlign: 'center'}}>
                Tap here to upload your ID Card photo, make sure that the photo
                is clear.
              </Text>
            </Card>
          </View>
        </TouchableNativeOpacity>
      )}

      <View style={globalstyles.cameraContent}>
        <Text style={{ fontSize: 18, fontStyle: "italic", color: "black" }}>
          ID Card photo is for verification purposes only and will not be shown
          publicly. Photo should be four sided corner.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#03c4ff",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Identification (3/3)")}
        >
          <View style={globalstyles.ForwardIcon}>
            <Foundation name="next" size={35} color="white" />
            <Text style={{ color: "white" }}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
