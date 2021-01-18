import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  Card,
  Content,
  Container,
  Left,
  Right,
  Icon,
  Body,
  Header,
  Button,
} from "native-base";
import * as MailComposer from "expo-mail-composer";

const Help = (props) => {
  const { width } = Dimensions.get("window");

  const sendEmailHandler = async () => {
    const response = await MailComposer.composeAsync({
      recipients: ["reviewsinn5@gmail.com"],
      subject: "Query",
    });
    console.log(response);
  };

  return (
    <Container>
      <Header style={{ backgroundColor: "#0065ff" }}>
        <Left>
          <Icon
            name="ios-menu"
            style={{ fontSize: 28, color: "#fff" }}
            onPress={() => props.navigation.openDrawer()}
          />
        </Left>
        <Body>
          <View style={{ width: width / 1.6, alignItems: "center" }}>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              Help
            </Text>
          </View>
        </Body>
        <Right />
      </Header>
      <Content style={{ margin: 10 }}>
        <Card style={{ padding: 10 }}>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 10 }}>
              In App User Reviews
            </Text>
            <Text style={{ fontSize: 15 }}>
              This app's core feature is In App User Reviews, you can give a
              review of any nearby restaurant you have visisted. Your review
              will help us to have faithful opinion about the restaurants
            </Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 10 }}>
              Google Reviews{" "}
            </Text>
            <Text style={{ fontSize: 15 }}>
              You can not only give In App Reviews about a particular restaurant
              but also see Google Reviews about that restaurant. Amazing right?
            </Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 10 }}>
              Posting a Review
            </Text>
            <Text style={{ fontSize: 15 }}>
              Want to give an honest review about a nearby restaurant? you need
              to create an account before posting a review, once sign up
              navigate to the restaurant review profile screen and tab{" "}
              <Text style={{ color: "#0065ff", fontWeight: "bold" }}>
                Post Review
              </Text>{" "}
              from top right to post a review.
            </Text>
          </View>
          <Text style={{ fontSize: 15, marginTop: 10 }}>
            Need more help? or have any questions tab on the button below to get
            in touch with us.
          </Text>
          <Button
            block
            style={{ marginVertical: 20, backgroundColor: "#0065ff" }}
            onPress={sendEmailHandler}
          >
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 17 }}>
              Contact Us
            </Text>
          </Button>
        </Card>
      </Content>
    </Container>
  );
};

export default Help;
