import React from "react";
import {
  StyleSheet,
  View,
  LayoutAnimation,
  TextInput,
} from "react-native";
import Card from "../../shared/Card";
import {Button, Text} from 'native-base';

export default class Edit extends React.Component {
  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>
        <Card style={styles.cardSection}>
          <View style={styles.containerView}>
            <TextInput
              style={styles.input}
              placeholder="Edit your first name"
            />
            <TextInput style={styles.input} placeholder="Edit your last name" />
            <TextInput
              style={styles.input}
              placeholder="Edit your mobile number"
            />
            <TextInput style={styles.input} placeholder="Edit your email" />
            <View style={styles.buttonView}> 
              <Button block style = {{backgroundColor: '#03c4ff' }}>
                <Text style = {{fontSize: 17, fontWeight: 'bold'}}> Save Changes </Text>
              </Button>
            </View>
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
    margin: 30
  },
  input: {
    width: 250,
    borderBottomColor: "#03c4ff",
    borderBottomWidth: 1,
    marginVertical: 20,
    padding: 10,
    fontSize: 17
  },
  cardSection: {
    padding: 20
  },
  buttonView: {
    width: 120,
  },
  containerView: {
    alignItems: "center",
  },
});
