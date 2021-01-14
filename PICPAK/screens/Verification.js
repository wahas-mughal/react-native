import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import * as firebase from "firebase";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";

const Verification = (props) => {
  const [isLoading, setIsloading] = useState(false);
  const verificationID = props.navigation.getParam("verificationId");
  const phoneNumber = props.navigation.getParam("phoneNumber");
  console.log(phoneNumber);
  const [validVerificationID, setValidVerificationID] = useState(
    verificationID
  );
  console.log(verificationID);
  const [verificationCode, setVerificationCode] = useState();

  const recaptchaVerifier = useRef(null);
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;

  const attemptInvisibleVerification = false;

  //send verification code
  const resendVerificationCode = async () => {
    try {
      setVerificationCode("");
      setResendButtonTime(resendOPTTime);
      startOPTTimer();
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const id = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setValidVerificationID(id);
      console.log(id);
      Alert.alert("Verification code has been sent to your phone.");
    } catch (err) {
      Alert.alert("Please enter a valid verification code.");
      throw err;
    }
  };

  //time interval
  const resendOPTTime = 60;
  let timeInterval;
  const [resendButtonTime, setResendButtonTime] = useState(resendOPTTime);

  //start resend timer
  const startOPTTimer = () => {
    //if timer is running then clear it
    if (timeInterval) {
      clearInterval(timeInterval);
    }
    timeInterval = setInterval(() => {
      //if the timer reached to 0 then clear it else -1 the timer time with 1 second
      if (resendButtonTime <= 0) {
        clearInterval(timeInterval);
      } else {
        setResendButtonTime(resendButtonTime - 1);
      }
    }, 1000);
  };

  //start timer on screen on launch
  useEffect(() => {
    startOPTTimer();
    return () => {
      if (timeInterval) {
        clearInterval(timeInterval);
      }
    };
  }, [resendButtonTime]);

  const confirmCodeHandler = async () => {
    try {
      if (resendButtonTime <= 0) {
        setValidVerificationID(null);
        Alert.alert("Please verify the valid OTP!");
      } else {
        setIsloading(true);
        const credential = firebase.auth.PhoneAuthProvider.credential(
          validVerificationID,
          verificationCode
        );
        // console.log(credential);
        const res = await firebase.auth().signInWithCredential(credential);
        console.log(res);
        const uID = res.user.uid
        props.navigation.navigate("register", { 
          number: phoneNumber,
          uid: uID
        });
      }
    } catch (err) {
      Alert.alert("Please enter a valid OTP!");
    }
    setIsloading(false);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="orange" size={28} />
      </View>
    );
  }

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/Images/bgImage.jpg")}
    >
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={60}>
        <Card style={styles.inputContainer}>
          <TextInput
            placeholder="Verification Code"
            placeholderTextColor = '#888'
            style={styles.input}
            onChangeText={(text) => setVerificationCode(text)}
          />

          <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
            attemptInvisibleVerification={attemptInvisibleVerification}
          />

          {resendButtonTime > 0 ? (
            <View
              style={[
                styles.otpResendView,
                { justifyContent: "space-between" },
              ]}
            >
              <Text style={styles.optText}>
                OPT expires in: {resendButtonTime}
              </Text>
              <Text style={styles.optText}> Resend </Text>
            </View>
          ) : (
            <View style={styles.otpResendView}>
              <TouchableOpacity onPress={resendVerificationCode}>
                <Text style={[styles.optText, { color: "orange" }]}>
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          )}

          <CustomButton
            title="Confirm"
            onPress={confirmCodeHandler}
            style={styles.btn}
          />
          {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
        </Card>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: "orange",
    width: 250,
    height: 40,
    textAlign: "center",
    fontSize: 18,
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
  optText: {
    color: "#888",
    fontSize: RFPercentage(2.5),
  },
  otpResendView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: 250,
    marginTop: 20,
  },
});

export default Verification;
