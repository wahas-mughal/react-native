import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import {
  Card,
  CardItem,
  Icon,
  Textarea,
  Right,
  Button,
  Text,
  Body,
  Form,
  Left,
} from "native-base";
import { RFPercentage } from "react-native-responsive-fontsize";

const AddButtonIcon = (props) => {
  const [imagePicker, setImagePicker] = useState(null);
  const [isModalTrue, setIsModalTrue] = useState(false);

  // camera permission for iOS
  const verifyPermissionsIOS = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (result.status !== "granted") {
      Alert.alert(
        "Permissions denied!",
        "Please grant permissions to use the camera",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  //open a camera and allows to pick an image
  const imagePickHandler = async () => {
    try {
      const permissionGranted = await verifyPermissionsIOS();
      if (!permissionGranted) {
        return;
      }
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        // aspect: [16, 9],
        quality: 0.5,
      });

      setImagePicker(image.uri);
      setIsModalTrue(true);
      console.log("Image path: " + image.uri);
    } catch (err) {
      throw err;
    }
  };

  const SIZE = 65;
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalTrue}
        onRequestClose={() => {
          Alert.alert("Post posted!");
        }}
      >
        <View style={{ flex: 1, marginTop: 15, margin: 10 }}>
          <Card style={{ borderRadius: 10 }}>
            <CardItem>
              <Left>
                <Text style = {{fontSize: RFPercentage(4), fontWeight: 'bold', color: 'orange', marginLeft: -10}}> Caption </Text>
              </Left>
              <Body />
              <Right>
                <Icon
                  name="md-close-circle"
                  style={{ color: "orange", fontSize: 30 }}
                  onPress={() => setIsModalTrue(false)}
                />
              </Right>
            </CardItem>
            <View style={{ margin: 10, marginTop: 0 }}>
              <Textarea
                rowSpan={3}
                bordered
                placeholder="Give caption to your photo"
              />
            </View>
            <CardItem cardBody>
              <Image
                source={{ uri: imagePicker }}
                style={{ width: "100%", height: 280 }}
                resizeMode="contain"
              />
            </CardItem>
            <CardItem>
              <Left />
              <Body />
              <Right>
                <Button
                  block
                  style={{
                    backgroundColor: "#fff",
                    borderColor: "orange",
                    borderWidth: 1,
                    borderRadius: 5,
                    marginVertical: 3
                  }}
                >
                  <Text
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                      fontSize: RFPercentage(2.6),
                    }}
                  >
                    POST
                  </Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </View>
      </Modal>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: SIZE,
          height: SIZE,
          borderRadius: SIZE / 2,
          backgroundColor: "#fff",
          borderColor: "#ff6600",
          borderWidth: 2,
          position: "absolute",
          bottom: -5,
        }}
        onPress={imagePickHandler}
      >
        <View>
          <Feather name="plus" size={42} color="#ff6600" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  // modalContainer: {
  //   height: 450,
  //   width: "100%",
  //   // padding: 20,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
});

export default AddButtonIcon;
