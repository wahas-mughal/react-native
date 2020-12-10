import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

const PrivacyAndSecurity = (props) => {
  return (
  <ScrollView style = {styles.container}>
       <View>
        <Text>PrivacyAndSecurity</Text>
      </View>
  </ScrollView>
  );
};

export default PrivacyAndSecurity;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black'
  }
});
