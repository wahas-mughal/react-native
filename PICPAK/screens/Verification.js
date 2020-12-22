import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView
} from "react-native";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import * as firebase from 'firebase';

const Verification = (props) => {
  // const [code, setCode] = useState("");
  // const confirm = props.navigation.getParam('confirmation');

  // const confirmCode = async () => {
  //   try {
  //     await confirm.confirm(code)
  //   } catch (err) {
  //     throw err;
  //   }
  // };
  const [isLoading, setIsloading] = useState(false);
  const verificationID = props.navigation.getParam('verificationId');
  console.log(verificationID)
  const [verificationCode, setVerificationCode] = useState();

  const confirmCodeHandler = async () => {
    try {
      setIsloading(true);
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationID,
        verificationCode
      );
      console.log(credential);
      const res = await firebase.auth().signInWithCredential(credential);
      console.log(res);
      setIsloading(false);
      props.navigation.navigate('register');
    } catch (err) {
      throw err;
    }
  }

  if(isLoading){
    return(
      <View style = {{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color = 'orange' size = {28}/>
      </View>
    )
  }

    return (
      <ImageBackground
        style={styles.container}
        source={require("../assets/Images/bgImage.jpg")}
      >
        <KeyboardAvoidingView behavior = 'padding' keyboardVerticalOffset = {60}>
        <Card style={styles.inputContainer}>
          <TextInput
            placeholder="Verification Code"
            style={styles.input}
            onChangeText={(text) => setVerificationCode(text)}
          />
          <CustomButton
            title="Confirm"
            onPress={confirmCodeHandler}
            style={styles.btn}
          />
        </Card>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }

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
    textAlign: 'center',
    fontSize: 19,
    padding:8
  },
  inputContainer: {
    padding: 20,
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  btn: {
    width: 220,
    height: 40,
    borderRadius: 10,
    position: 'absolute',
    top: 180
  },
});

export default Verification;
