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
  KeyboardAvoidingView
} from "react-native";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";
import * as firebase from "firebase";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";

const Login = (props) => {
  // const screenWidth = Dimensions.get('window').width;
  // const screenHeight = Dimensions.get('window').height;

  // const [confirm, setConfirm] = useState(null);
  // const [input, setInput] = useState("");

  // const signInWithPhoneNumber = async (phoneNumber) => {
  //   const confirmation = await firebase.auth().signInWithPhoneNumber(phoneNumber);
  //   setConfirm(confirmation);
  // };

  // const handlerPhoneVerification = () => {
  //   signInWithPhoneNumber(input);
  //   props.navigation.navigate("verification", {
  //     confirmation: confirm,
  //   });
  // };

  //firebase phone authentication
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();
  // const [verificationId, setVerificationId] = useState();
  const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
  // const [message, showMessage] = useState('');

  const attemptInvisibleVerification = false;

  const sendVerificationCode = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const id = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );

      console.log(id);
      // setVerificationId(id);
      Alert.alert("Verification code has been sent to your phone.");
      // showMessage({
      //   text: 'Verification code has been sent to your phone.',
      // });
      props.navigation.navigate("verification", {
        verificationId: id,
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
      <KeyboardAvoidingView behavior = 'padding' keyboardVerticalOffset = {60}> 
      <Card style={styles.inputContainer}>
        <View style={styles.trademarkView}>
          <Text style={styles.trademarkText}> PIC </Text>
          <Text style={styles.trademarkText}> PAK </Text>
        </View>
        {/* <View> */}
          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
            attemptInvisibleVerification={attemptInvisibleVerification}
          />
          <TextInput
            placeholder="Mobile Number"
            style={styles.input}
            onChangeText={(text) => setPhoneNumber(text)}
          />
          <CustomButton
            title="SIGN IN"
            onPress={sendVerificationCode}
            style={styles.btn}
          />
          {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
        {/* </View> */}
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute'
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: "orange",
    width: 250,
    height: 40,
    textAlign: "center",
    fontSize: 19,
    padding: 8,
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
