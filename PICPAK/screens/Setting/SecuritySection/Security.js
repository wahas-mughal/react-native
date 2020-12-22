import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { SimpleLineIcons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";

const Security = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.byshareContainer}>
        <View style={styles.byShareWay}>
          <Text style={{ color: "#fff", fontSize: 19 }}>Login</Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('resetpassword')}>
          <View
            style={[styles.byShareWay, { justifyContent: "space-between" }]}
          >
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <MaterialCommunityIcons name="lock-reset" size={28} color="#fff" />
              <Text style={styles.byShareText}> Reset Password </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('loginactivity')}>
          <View
            style={[styles.byShareWay, { justifyContent: "space-between" }]}
          >
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <Feather name="activity" size={28} color="#fff" />
              <Text style={styles.byShareText}> Login Activity </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('savedlogininfo')}>
          <View
            style={[styles.byShareWay, { justifyContent: "space-between" }]}
          >
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <Feather name="info" size={28} color="#fff" />
              <Text style={styles.byShareText}> Saved Login Info </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  byShareWay: {
    flexDirection: "row",
    marginVertical: 20,
  },
  byshareContainer: {
    margin: 20,
  },
  byShareText: {
    color: "#fff",
    fontSize: RFPercentage(3),
    marginLeft: 10,
  },
});

export default Security;
