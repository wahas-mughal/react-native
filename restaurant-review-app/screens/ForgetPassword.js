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
import { View, TouchableOpacity, Alert } from "react-native";
import * as firebase from "firebase";

//reset firebase password
const ForgetPassword = (props) => {
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
    <Container style={{ backgroundColor: "#0065ff" }}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Icon
          name="arrow-back-circle-outline"
          style={{ color: "#fff", fontSize: 60, marginTop: 50, marginLeft: 20 }}
        />
      </TouchableOpacity>
      <Content
        contentContainerStyle={{
          justifyContent: "center",
          flex: 1,
          margin: 20,
        }}
      >
        <View style={{ alignSelf: "center", marginBottom: 30 }}>
          <Text style={{ color: "#fff", fontSize: 25 }}> Reset Password</Text>
        </View>
        <Card style={{ padding: 10 }}>
          <CardItem cardBody style={{ height: 80 }}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(text) => setEmail(text)} />
            </Item>
          </CardItem>
        </Card>
        <Button
          style={{
            backgroundColor: "#fff",
            alignSelf: "flex-end",
            marginTop: 10,
          }}
          onPress={() => forgetPassword(email)}
        >
          <Text style={{ color: "c203f#c" }}> Reset </Text>
        </Button>
      </Content>
    </Container>
  );
};

export default ForgetPassword;
