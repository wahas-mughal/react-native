import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Input } from "react-native-elements";
import FbButton from "../../shared/FbButtons";
import GmailButton from "../../shared/GmButtons";
import MyButton from "../../shared/MyButton";
import { globalstyles } from "../../style/global";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import * as firebase from "firebase";
import * as authActions from '../../store/actions/auth';
import {useDispatch} from 'react-redux';

export default function Login({ navigation }) {
 
  // const [token, setToken] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // user sign in with firebase
  const userSignIn = (email, pass) => {
  firebase.auth().signInWithEmailAndPassword(email, pass)
      .then((credentials) => {
        // console.log(credentials);
        credentials.user.getIdToken().then(function(idToken){
          dispatch(authActions.auth(idToken, credentials.user.uid));
          console.log("token at the time of login " +idToken);
          console.log("user id at the time of login "+credentials.user.uid);
          navigation.navigate("Spinner");
        });
      
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    // <ImageBackground style={globalstyles.container} source={require('../../assets/images/car-rental.jpg')}>

    <View style={globalstyles.container}>
      <View style={globalstyles.header}></View>

      <View style={globalstyles.loginContent}>
        <FbButton text="Login with Facebook" />
        <GmailButton text="Login with Gmail" />
        <Text style={globalstyles.orText}>------OR------</Text>
        <View style={globalstyles.InputContainer}>
          <Input
            placeholder="Email"
            placeholderTextColor="black"
            inputStyle={{ color: "black" }}
            onChangeText = {(text) => setEmail(text)}
            leftIcon={
              <MaterialCommunityIcons
                name="email"
                size={20}
                style={{ paddingRight: 10 }}
                color="#03c4ff"
              />
            }
          />

          <Input
            placeholder="Password"
            placeholderTextColor="black"
            inputStyle={{ color: "black" }}
            onChangeText = {(text) => setPassword(text)}
            secureTextEntry = {true}
            leftIcon={
              <AntDesign
                name="lock"
                size={20}
                style={{ paddingRight: 10 }}
                color="#03c4ff"
              />
            }
          />

          <View style={globalstyles.forgotContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Forgetpassword")}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {" "}
                Forget your Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <MyButton text="LOGIN" onPress={() => userSignIn(email, password)}/>
          <View style={globalstyles.SignUpCont}>
            <Text style={globalstyles.SignUpText}>
              Don't have an account yet?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={globalstyles.SignUpButton}> Sign up</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}
