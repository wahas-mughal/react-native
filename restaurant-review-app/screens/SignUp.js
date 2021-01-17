import React, { useState } from "react";
import {
  Container,
  Content,
  Item,
  Input,
  Label,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
} from "native-base";
import { View, Alert, TouchableOpacity, Image } from "react-native";
import * as firebase from "firebase";
import "@firebase/firestore";
import { useDispatch } from "react-redux";
import * as authActions from "../store/action/auth";
import { Bounce } from "react-native-animated-spinkit";
import * as ImagePicker from "expo-image-picker";

const SignUp = (props) => {
  const db = firebase.firestore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ImageUrl, setImageUrl] = useState(null);
  const dispatch = useDispatch();

  // Creates user in firebase and creates a collection of the user's information with reference to the uid generated by firebase
  const userSignUp = async (userEmail, pass) => {
    try {
      setIsLoading(true);
      if (ImageUrl === null) {
        Alert.alert(
          "Profile photo is required!",
          "Please also upload a profile photo to continue.",
          [{ text: "Okay" }]
        );
        setIsLoading(false);
        return;
      }

      const credentials = await firebase
        .auth()
        .createUserWithEmailAndPassword(userEmail, pass);
      credentials.user.getIdToken().then(function (idToken) {
        dispatch(authActions.auth(idToken, credentials.user.uid));
        console.log("token at the time of login " + idToken);
        console.log("user id at the time of login " + credentials.user.uid);
        uploadPhoto(ImageUrl, credentials.user.uid);
        props.navigation.navigate("homeAfterSignUpAuth");
      });
      return db.collection("users").doc(credentials.user.uid).set({
        firstname: firstName,
        lastname: lastName,
      });
    } catch (err) {
      Alert.alert(err.message);
    }
    setIsLoading(false);
  };

  //launch library to pick an image from
  const launchLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setImageUrl(result.uri);
    }
  };

  //to upload an image to firebase
  const uploadPhoto = async (uri, userId) => {
    const response = await fetch(uri);
    console.log("CALLED");
    const blob = await response.blob();
    firebase.storage().ref().child(`users/${userId}/profileImage`).put(blob);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Bounce size={48} color="#0065ff"></Bounce>
      </View>
    );
  }

  return (
    <Container style={{ backgroundColor: "#0065ff" }}>
      <Content
        contentContainerStyle={{
          justifyContent: "center",
          flex: 1,
          margin: 20,
        }}
      >
        <TouchableOpacity onPress={launchLibrary}>
          <View
            style={{
              alignSelf: "center",
              marginVertical: 10,
            }}
          >
            {ImageUrl ? (
              <Image
                source={{ uri: ImageUrl }}
                style={{
                  width: 85,
                  height: 85,
                  borderColor: "#fff",
                  borderWidth: 0.7,
                  borderRadius: 50,
                }}
              />
            ) : (
              <View style={{ alignItems: "center" }}>
                <Image
                  source={{
                    uri:
                      "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
                  }}
                  style={{
                    width: 85,
                    height: 85,
                    borderColor: "#fff",
                    borderWidth: 0.7,
                    borderRadius: 50,
                  }}
                />
                <Text
                  style={{ color: "#fff", fontWeight: "bold", marginTop: 5 }}
                >
                  {" "}
                  Add a photo{" "}
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
        <Card style={{ padding: 10 }}>
          <CardItem cardBody style={{ height: 80 }}>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input onChangeText={(fname) => setFirstName(fname)} />
            </Item>
          </CardItem>
          <CardItem cardBody style={{ height: 80 }}>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input onChangeText={(lname) => setLastName(lname)} />
            </Item>
          </CardItem>
          <CardItem cardBody style={{ height: 80 }}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(email) => setEmail(email)} />
            </Item>
          </CardItem>
          <CardItem cardBody style={{ height: 80 }}>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input onChangeText={(password) => setPassword(password)} />
            </Item>
          </CardItem>
        </Card>

        <Button
          style={{
            backgroundColor: "#fff",
            alignSelf: "flex-end",
            marginTop: 10,
          }}
          onPress={() => userSignUp(email, password)}
        >
          <Text style={{ color: "#0065ff" }}> Sign Up</Text>
        </Button>
        <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("home")}>
            <Icon
              name="md-home"
              style={{ color: "#fff", fontSize: 40, marginLeft: 20 }}
            />
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};
export default SignUp;
