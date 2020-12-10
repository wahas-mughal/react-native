import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";

const Help = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 30 }}>
        <TouchableOpacity onPress = {() => props.navigation.navigate('report') }>
          <Text style={styles.mainText}>Report a problem</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress = {() => props.navigation.navigate('privacyandsecurity') }>
          <Text style={styles.mainText}>Privacy and Security Help</Text>
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
  mainText: {
    marginBottom: 30,
    color: "#fff",
    fontSize: RFPercentage(3),
  },
});

export default Help;
