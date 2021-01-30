import React, {useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { globalstyles } from "../../style/global";
import * as firebase from 'firebase';

export default function forgotPassword({ navigation }) {

const [email, setEmail] = useState("");

const forgetPassword = (email) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert("Email has been sent. Please check your email");
      })
      .catch((err) => {
        Alert.alert("Please enter a valid email");
      });
  };


  return (
    <ImageBackground
      style={globalstyles.container}
      source={require("../../assets/images/car-rental.jpg")}
    >
      <View style={globalstyles.header}></View>
      <View style={globalstyles.ForgotContent}>
        <TextInput
          style={globalstyles.inputBox}
          placeholder="EMAIL"
          placeholderTextColor="#fff"
          onChangeText = {(text) => setEmail(text)}
        />
        <TouchableOpacity onPress = {() => forgetPassword(email)}>
          <View style={globalstyles.button}>
            <Text style={globalstyles.buttonText}>Reset Your Password</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={globalstyles.BackScreen}> Return to Login </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
