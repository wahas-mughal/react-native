import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { globalstyles } from "../../style/global";
import Card from "../../shared/Card";
import { Foundation } from "@expo/vector-icons";

export default function IdentityScreen3({ navigation }) {
  return (
    <View style={globalstyles.container}>
      <Card style={globalstyles.IdentityCameraContent}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../../assets/images/addphoto.png")}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            ADD YOUR PHOTO WITH LICENSE
          </Text>
          <Text style={{ color: "black" }}>
            Unable to upload your picture? Tap Here
          </Text>
      </Card>
      <View style={globalstyles.cameraContent}>
        <Text style={{ fontSize: 18, fontStyle: "italic", color: "black" }}>
          NOTED!!! This photos are for verification purposes only and will not
          be shown publicly.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#03c4ff",
          paddingTop: 5,
          height: '14%'
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
