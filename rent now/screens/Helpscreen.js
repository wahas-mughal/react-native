import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Content, Container, Button } from "native-base";
import * as MailComposer from "expo-mail-composer";

const HelpScreen = (props) => {
  const sendEmailHandler = async () => {
    const response = await MailComposer.composeAsync({
      recipients: ["suppot@rentnow.com"],
      subject: "Query",
    });
    console.log(response);
  };

  return (
    <Container>
      <Content style={{ margin: 10 }}>
        <Card style={{ padding: 10 }}>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 10 }}>
              RENT NOW BOOKINGS
            </Text>
            <Text style={{ fontSize: 15 }}>
              This app's core feature is users booking through the app, you can
              book a car of your choice from the dealer's listing for upto 30
              days at once. Before booking your profile information and
              documents has to be verified.
            </Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 10 }}>
              DOCUMENTS VERIFICATION
            </Text>
            <Text style={{ fontSize: 15 }}>
              Documents verification <Text style = {{fontWeight: 'bold', color: '#03c4ff'}}> i.e. License, Identity Card and Selfie with
              Identity Card </Text> has be to submitted at the time of sign up. It is
              imporrtant because dealers will not trust on your booking until
              you provide clear pictures of the documents.
            </Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 10 }}>
              PAYMENT PROCEDURE
            </Text>
            <Text style={{ fontSize: 15 }}>
              Right now, we are providing only cash on delivery model for the
              MVC of this app. users will pay 50% amount of the total rent in
              advance to the dealers at the time of taking the vehicle
            </Text>
          </View>
          <Text style={{ fontSize: 15, marginTop: 10 }}>
            Need more help? or have any questions tab on the button below to get
            in touch with us.
          </Text>
          <Button
            block
            style={{ marginVertical: 20, backgroundColor: "#03c4ff" }}
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

export default HelpScreen;
