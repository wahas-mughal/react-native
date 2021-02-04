import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import { Input } from "react-native-elements";
import MyButton from "../../shared/MyButton";
import { globalstyles } from "../../style/global";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import * as firebase from "firebase";
import * as authActions from "../../store/actions/auth";
import { useDispatch } from "react-redux";
import { Flow } from "react-native-animated-spinkit";

export default function Login({ navigation }) {
  // const [token, setToken] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  // user sign in with firebase
  const userSignIn = async (email, pass) => {
    try {
      setIsLoading(true);
      const credentials = await firebase
        .auth()
        .signInWithEmailAndPassword(email, pass);
      credentials.user.getIdToken().then(function (idToken) {
        dispatch(authActions.auth(idToken, credentials.user.uid));
        console.log("token at the time of login " + idToken);
        console.log("user id at the time of login " + credentials.user.uid);
      });
      // uids from the database
      const res = await fetch(
        "https://rent-a-car-app-211bf.firebaseio.com/users/userIds.json"
      );
      const resData = await res.json();
      const uidsArray = [];
      for (const key in resData) {
        uidsArray.push(resData[key].uid);
      }
      // match the uid of the existing user and navigate accordingly
      const matchedUid = uidsArray.find(
        (user) => user === credentials.user.uid
      );

      if (credentials.user.uid === matchedUid) {
        navigation.navigate("drawerStack");
      } else {
        navigation.navigate("identityStack");
      }
    } catch (err) {
      Alert.alert(err.message);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Flow size={40} color="#03c4ff" />
      </View>
    );
  }

  return (
    <View style={globalstyles.container}>
      <View style={globalstyles.loginContent}>
        <Image
          source={require("../../assets/adaptive-icon.png")}
          style={{ width: 300, height: 140, marginTop: 40}}
        />
        <View style={globalstyles.InputContainer}>
          <Input
            placeholder="Email"
            placeholderTextColor="#fff"
            inputStyle={{ color: "#fff" }}
            onChangeText={(text) => setEmail(text)}
            leftIcon={
              <MaterialCommunityIcons
                name="email"
                size={20}
                style={{ paddingRight: 10 }}
                color="#fff"
              />
            }
          />

          <Input
            placeholder="Password"
            placeholderTextColor="#fff"
            inputStyle={{ color: "#fff" }}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            leftIcon={
              <AntDesign
                name="lock"
                size={20}
                style={{ paddingRight: 10 }}
                color="#fff"
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
                Forget your Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <MyButton text="LOGIN" onPress={() => userSignIn(email, password)} />
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
