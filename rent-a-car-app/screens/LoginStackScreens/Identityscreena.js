import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import { globalstyles } from "../../style/global";
import Card from "../../shared/Card";
import { Foundation } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";
import { useSelector } from "react-redux";

export default function IdentityScreen1({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const uid = useSelector((state) => state.auth.userId);

  let TouchableNativeOpacity = TouchableOpacity;

  if(Platform.OS === 'android' && Platform.Version >= 21){
    TouchableNativeOpacity = TouchableNativeFeedback
  }

  const imagePickHandler = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    const image = result.uri;
    setImageUri(image);
    if (!result.cancelled) {
      uploadImage(image)
        .then(() => {
          Alert.alert("Your license photo is uploaded successfully!");
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
    firebase.storage().ref().child(`users/${uid}/licence-photo`).put(blob);
  };

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={30} color="#03c4ff" />
    </View>;
  }

  return (
    <View style={globalstyles.container}>
      {imageUri ? (
        <View style={{ height: "60%", width: "100%" }}>
          <Card style={globalstyles.IdentityCameraContent}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Thank you! please proceed forward.
            </Text>
          </Card>
        </View>
      ) : (
        <TouchableNativeOpacity
          onPress={imagePickHandler}
        >
          <View  style={{ height: "60%", width: "100%" }}>
            <Card style={globalstyles.IdentityCameraContent}>
              <Image
                style={{ width: 150, height: 150 }}
                source={require("../../assets/images/addphoto.png")}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                ADD LICENSE PHOTO
              </Text>
              <Text
                style={{ color: "black", marginTop: 5, textAlign: "center" }}
              >
                Tap here to upload your license photo, make sure that the photo
                is clear
              </Text>
            </Card>
          </View>
        </TouchableNativeOpacity>
      )}
      <View style={globalstyles.cameraContent}>
        <Text style={{ fontSize: 18, fontStyle: "italic", color: "black" }}>
          License photo is for verification purposes only and will not be shown
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
          onPress={() => navigation.navigate("Identification (3/2)")}
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
