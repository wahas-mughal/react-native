import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";
import * as firebase from "firebase";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import {Picker} from "@react-native-community/picker";
import {RFPercentage} from 'react-native-responsive-fontsize';

const Login = (props) => {
  // const screenWidth = Dimensions.get('window').width;
  // const screenHeight = Dimensions.get('window').height;
  const [selectedValue, setSelectedValue] = useState('+92');
  const {width} = Dimensions.get('window');

  //firebase phone authentication
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();
  console.log(phoneNumber);
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;

  const attemptInvisibleVerification = false;

 const sendVerificationCode = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const id = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );

      console.log(id);
      Alert.alert("Verification code has been sent to your phone.");
      props.navigation.navigate("verification", {
        verificationId: id,
        phoneNumber: phoneNumber
      });
    } catch (err) {
      Alert.alert("Please enter a valid number.");
      throw err;
    }
  };

  return (
    <ImageBackground
      source={require("../assets/Images/bgImage.jpg")}
      style={styles.bgImage}
    >
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={60}>
        <Card style={styles.inputContainer}>
          <View style={styles.trademarkView}>
            <Text style={styles.trademarkText}> PIC </Text>
            <Text style={styles.trademarkText}> PAK </Text>
          </View>

          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
            attemptInvisibleVerification={attemptInvisibleVerification}
          />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Picker
              selectedValue={selectedValue}
              style={{ width: width/3.9, height: 50 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="+92" value="+92" />
              <Picker.Item label="+001" value="+001" />
              <Picker.Item label="+880" value="+880" />
            </Picker>
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor = '#888'
              style={styles.input}
              onChangeText={(text) => setPhoneNumber(selectedValue +text)}
            />
          </View>

          <CustomButton
            title="SIGN IN"
            onPress={sendVerificationCode}
            style={styles.btn}
          />
          {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}

        </Card>
      </KeyboardAvoidingView>
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
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: "orange",
    width: Dimensions.get('window').width/2.4,
    height: 40,
    textAlign: "center",
    fontSize: 18,
    padding: 8,
    color: '#888'
  },
  inputContainer: {
    padding: 20,
    width: 300,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  btn: {
    width: 220,
    height: 40,
    borderRadius: 10,
    position: "absolute",
    top: 180,
  },
  trademarkView: {
    borderColor: "orange",
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
});

export default Login;
