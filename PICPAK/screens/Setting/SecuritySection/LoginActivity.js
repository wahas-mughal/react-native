import React from "react";
import { View,  StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Container, Content, Button, Text} from 'native-base';

const LoginActivity = () => {
  return (
    <View style={styles.container}>
      <View
        style={
          (styles.row,
          { margin: 30})
        }
      >
        <Text style={styles.mainText}>Locations where you are logged in</Text>
        <View style = {{ flexDirection: 'row', marginTop: 20}}>
        <Octicons name="location" size={35} color="#fff" />
        <View style = {{marginLeft: 15}}>
        <Text style={styles.text}>Karachi, Pakistan</Text>
        <View style={styles.row}>
          <Text style={styles.text}>Samsung SM-J727T1</Text>
          <Text
            style={
              (styles.text,
              { color: "#47f550", fontWeight: "700", marginLeft: 10, fontSize: RFPercentage(2.2) })
            }
          >
            Active now
          </Text>
        </View>
        </View>
        </View>
     
            <Button block primary style = {{marginTop: 30, borderRadius: 10}}>
                <Text> Sign out from all devices</Text>
            </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  mainText: {
    fontSize: RFPercentage(2.8),
    fontWeight: "700",
    color: "#fff",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontSize: RFPercentage(2.2)
  },
});

export default LoginActivity;
