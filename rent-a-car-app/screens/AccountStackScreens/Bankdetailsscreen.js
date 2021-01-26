import React from "react";
import {
  Text,
  StyleSheet,
  View,
  LayoutAnimation,
  TextInput,
  Button,
  Image,
} from "react-native";
import Card from "../../shared/Card";

export default class BankDetails extends React.Component {
  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>
        <Card style={styles.cardSection}>
          <View behavior="position" style={styles.containerView}>
            <TextInput
              style={styles.input}
              placeholder="Enter your name on the card"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your debit card number"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your PIN number"
            />
            <TextInput style={styles.input} placeholder="Enter your CVC" />
            <View style={styles.buttonView}>
              <Button title="Save" color="#03c4ff" />
            </View>
          </View>

          <View style={styles.imagesSection}>
            <View style={styles.imageView}>
              <Image
                style={styles.imageMastercard}
                source={require("../../assets/images/master-card.png")}
              />
              <Image
                style={styles.imageVisa}
                source={require("../../assets/images/visa-card.png")}
              />
            </View>
            <Text style={styles.text}> safe and secure transactions!</Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 30,
  },
  input: {
    width: 250,
    borderBottomColor: "#03c4ff",
    borderBottomWidth: 1,
    marginVertical: 20,
    fontSize: 17
  },
  cardSection: {
    padding: 20,
  },
  buttonView: {
    width: 120,
  },
  containerView: {
    alignItems: "center",
  },
  imageView: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250,
  },
  imageMastercard: {
    width: 60,
    height: 45,
    marginTop: 5,
    borderRadius: 10
  },
  imageVisa: {
    width: 60,
    height: 60,
  },
  imagesSection: {
    marginTop: 30,
  },
  text: {
    marginTop: 10,
    marginLeft: 28,
  },
});
