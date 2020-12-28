import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";

const About = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 30 }}>
        <TouchableOpacity onPress = {() => props.navigation.navigate('datapolicy')}>
          <Text style={styles.mainText}> Data Policy </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => props.navigation.navigate('termsofuse')}>
          <Text style={styles.mainText}> Terms of Use</Text>
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

export default About;
