import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, Alert, ActivityIndicator} from "react-native";
import { globalstyles } from "../../style/global";
import Card from "../../shared/Card";
import { Foundation } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase";

export default function IdentityScreen1({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);

  const imagePickHandler = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      uploadImage(result.uri, "License Image")
      .then(() => {
          Alert.alert("Your license photo is uploaded successfully!");
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
      .child("verification-documents/licenses/" + LicenseImage);
    return ref.put(blob);
  };


  if(isLoading){
      <View style = {{flex:1, justifyContent:'center', alignItems: 'center'}}>
          <ActivityIndicator size= {30} color = '#03c4ff'/>
      </View>
  }

  return (
    <View style={globalstyles.container}>
      <TouchableOpacity onPress={imagePickHandler} style = {{height: '60%', width: '100%'}} >
        {/* <View> */}
          <Card style={globalstyles.IdentityCameraContent} >
            <Image
              style={{ width: 150, height: 150 }}
              source={require("../../assets/images/addphoto.png")}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              ADD LICENSE PHOTO
            </Text>
            <Text style={{ color: "black", marginTop:5}}>
              Tap here to upload your license photo, make sure that the photo is clear
            </Text>
          </Card>
        {/* </View> */}
      </TouchableOpacity>
      <View style={globalstyles.cameraContent}>
        <Text style={{ fontSize: 18, fontStyle: "italic", color: "black" }}>
          License photo is for verification purposes only and will
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
          onPress={() => navigation.navigate("Identification (3/2)")}
        >
          <View style={globalstyles.smallbutton}>
            <Text style={globalstyles.smallbuttonText}>SKIP</Text>
          </View>
        </TouchableOpacity>
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
