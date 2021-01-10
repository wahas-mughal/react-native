import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
  Dimensions,
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
  Content,
  Container,
} from "native-base";
import { RFPercentage } from "react-native-responsive-fontsize";
import * as FileSystem from "expo-file-system";
import FilterScreen from "../screens/FilterScreen";

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
        aspect: [8, 8],
        quality: 1,
      });

      const imageURI = image.uri;
      console.log("Image path: " + imageURI);
      const imagePath = imageURI.split("/").pop();
      const newImagePath = FileSystem.documentDirectory + imagePath;

      await FileSystem.moveAsync({
        from: imageURI,
        to: newImagePath,
      });

      console.log("New Image Path " + newImagePath);

      setImagePicker(newImagePath);
      setIsModalTrue(true);
    } catch (err) {
      throw err;
    }
  };

  const SIZE = 65;

  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={isModalTrue}>
        <Content style={{ margin: 10 }}>
          <Card>
            <CardItem>
              <Left>
                <Text
                  style={{
                    fontSize: RFPercentage(4),
                    fontWeight: "bold",
                    color: "orange",
                    marginLeft: -10,
                  }}
                >
                  Caption
                </Text>
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
            <CardItem cardBody style={{ margin: 4 }}>
              <FilterScreen source={imagePicker} />
            </CardItem>
          </Card>
        </Content>
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
  image: {
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").width / 1.1,
    flex: 1,
    backgroundColor: "white",
  },
  filterTags: {
    borderColor: "orange",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    padding: 7,
    marginBottom: 10,
    backgroundColor: "orange",
  },
});

export default AddButtonIcon;
