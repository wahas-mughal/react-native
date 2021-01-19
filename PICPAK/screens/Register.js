import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
  Dimensions,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";
import { Swing } from "react-native-animated-spinkit";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as firebase from 'firebase';


const Register = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [imagePicked, setImagePicked] = useState(null);
  const dispatch = useDispatch();

  const [imageBase64, setImageBase64] = useState("");
  const getNumber = props.navigation.getParam("number");
  const getUid = props.navigation.getParam("uid");

  //verify permisssions specifically for iOS
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (result.status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Permissions to access the camera is denied",
        [
          {
            text: "Okay",
          },
        ]
      );
      return false;
    }
    return true;
  };

  const imagePickHandler = async () => {
    const hasPermission = verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
      base64: true
    });
    
    const imageURL = image.uri;
    const base64String = image.base64;
    setImagePicked(imageURL);
    setImageBase64(base64String)
  };

  const submitUserData = async () => {
    try {
      setIsLoading(true);
      await dispatch(
        actions.SignUp(
          getUid,
          firstName,
          lastName,
          imageBase64,
          email,
          getNumber,
          "12/12/20",
          "10:00"
        )
      );
      await dispatch(actions.auth(getUid));
      props.navigation.navigate("intro");
    } catch (err) {
      throw err;
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Swing size={45} color="orange"></Swing>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../assets/Images/bgImage.jpg")}
      style={styles.bgImage}
    >
      <Card style={styles.inputContainer}>
        <TouchableOpacity onPress = {imagePickHandler} style={styles.trademarkView}>
            <Image
              style={styles.cameraImg}
              source = {{uri: imagePicked ? imagePicked : "https://www.cmu.edu/chemistry/people/staff/images/no-image.png" }}
              resizeMode = 'contain'
            />
        </TouchableOpacity>
        <TextInput
          placeholder="First Name"
          style={styles.input}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          placeholder="Last Name"
          style={styles.input}
          onChangeText={(text) => setlastName(text)}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
        <CustomButton
          title="SIGN UP"
          onPress={submitUserData}
          style={styles.btn}
        />
      </Card>
      <View style={styles.fbTextContainer}>
        <Text style={styles.mainText}> Try Signing With: </Text>
        <Image
          source={require("../assets/Images/facebook-512.png")}
          style={styles.fbImage}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: "orange",
    width: 250,
    height: 40,
    textAlign: "center",
    fontSize: 19,
    padding: 8,
    marginVertical: 7,
  },
  inputContainer: {
    padding: 20,
    width: 300,
    height: 285,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: Dimensions.get("window").height / 5,
    elevation: 8,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "black",
    shadowRadius: 6,
  },
  btn: {
    width: 220,
    height: 40,
    borderRadius: 10,
    position: "absolute",
    top: 265,
  },
  trademarkView: {
    borderColor: "#ff6600",
    borderWidth: 4,
    borderRadius: 100,
    backgroundColor: "#fff",
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    position: "absolute",
    top: -50,
    overflow: 'hidden'
  },
  trademarkText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  fbImage: {
    width: 40,
    height: 40,
  },
  fbTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: Dimensions.get("window").height / 15,
  },
  mainText: {
    marginBottom: 30,
    color: "#fff",
    fontSize: 18,
  },
  cameraImg: {
    width: '100%',
    height: '100%',
  },
});

export default Register;
