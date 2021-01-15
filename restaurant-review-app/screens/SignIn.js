import React, { useState } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
} from "native-base";
import { View, Alert, ActivityIndicator, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import * as authActions from "../store/action/auth";
import { useDispatch } from "react-redux";
import {Bounce} from 'react-native-animated-spinkit';

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // user sign in with firebase
  const userSignIn = async (email, password) => {
    try {
      setIsLoading(true);
      const credentials = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      credentials.user.getIdToken().then(function (idToken) {
        dispatch(authActions.auth(idToken, credentials.user.uid));
        console.log("token at the time of login " + idToken);
        console.log("user id at the time of login " + credentials.user.uid);
        props.navigation.navigate("homeAfterAuth");
      });
    } catch (err) {
      Alert.alert(err.message);
    }
    setIsLoading(false);
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
        <View style={{ alignSelf: "center", marginBottom: 60 }}>
          <Text style={{ color: "#fff", fontSize: 30 }}> Sign In </Text>
        </View>
        <Card style={{ padding: 10 }}>
          <CardItem cardBody style={{ height: 100 }}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(text) => setEmail(text)} />
            </Item>
          </CardItem>
          <CardItem cardBody style={{ height: 100 }}>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input onChangeText={(text) => setPassword(text)} />
            </Item>
          </CardItem>
        </Card>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            style={{
              backgroundColor: "#fff",
              alignSelf: "flex-start",
              marginTop: 10,
            }}
            onPress={() => props.navigation.navigate("forgetPassword")}
          >
            <Text style={{ color: "#0065ff" }}> Forget Password </Text>
          </Button>
          <Button
            style={{
              backgroundColor: "#fff",
              alignSelf: "flex-end",
              marginTop: 10,
            }}
            onPress={() => userSignIn(email, password)}
          >
            <Text style={{ color: "#0065ff" }}> Sign In </Text>
          </Button>
        </View>
        <View style = {{width: '100%', alignItems: 'center', marginTop: 50}}>
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

export default SignIn;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
