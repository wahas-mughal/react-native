import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { globalstyles } from "../../style/global";
import * as firebase from "firebase";
import '@firebase/firestore';
import * as authActions from '../../store/actions/auth';
import {useDispatch} from 'react-redux';

export default function SignUp({ navigation }) {

  const db = firebase.firestore();  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState('');
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  console.log(token);

  // Creates user in firebase and creates a collection of the user's information with reference to the uid generated by firebase
  const userSignUp = (email, pass) => {
      firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then((credentials) => {
        credentials.user.getIdToken().then(function(idToken){
          dispatch(authActions.auth(idToken, credentials.user.uid));
          console.log("token at the time of login " +idToken);
          console.log("user id at the time of login "+credentials.user.uid);
          navigation.navigate("Spinner");
        });
        return db.collection('users').doc(credentials.user.uid).set({
            firstname: firstName,
            lastname: lastName
        })
      })
      
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  return (
    <ImageBackground
      style={globalstyles.container}
      source={require("../../assets/images/car-rental.jpg")}
    >
        
      <View style={globalstyles.SignUpcontent}>
        <TextInput
          style={globalstyles.inputBox}
          placeholder="FIRST NAME"
          placeholderTextColor="#fff"
          onChangeText = {(text) => setFirstName(text)}
        />
        <TextInput
          style={globalstyles.inputBox}
          placeholder="LAST NAME"
          placeholderTextColor="#fff"
          onChangeText = {(text) => setLastName(text)}
        />
        <TextInput
          style={globalstyles.inputBox}
          placeholder="EMAIL "
          placeholderTextColor="#fff"
          onChangeText = {(text) => setEmail(text)}
        />
        <TextInput
          style={globalstyles.inputBox}
          placeholder="PASSWORD"
          placeholderTextColor="#fff"
          secureTextEntry = {true}
          onChangeText = {(text) => setPassword(text)}
        />
        <TextInput
          style={globalstyles.inputBox}
          placeholder="CONFIRM PASSWORD"
          placeholderTextColor="#fff"
          secureTextEntry = {true}
        />
      </View>
      <View style={globalstyles.SignUpfooter}>
        <TouchableOpacity
          onPress={() => userSignUp(email, password)}
        >
          <View style={globalstyles.button}>
            <Text style={globalstyles.buttonText}>Create Account</Text>
          </View>
        </TouchableOpacity>
        <Text style={{ color: "white" }}>
          By Clicking Create Account you agreed{" "}
        </Text>
        <Text style={{ color: "white" }}>with our Terms and Services</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={globalstyles.BackScreen}> Return to Login </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
