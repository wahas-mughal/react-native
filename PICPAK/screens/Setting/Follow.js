import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import {FontAwesome5,  MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';
import {RFPercentage} from 'react-native-responsive-fontsize'

const Follow = (props) => {
  return (
    <View style={styles.container}>
      <View style = {styles.byshareContainer}>
      <TouchableOpacity onPress = {() => {}}>
        <View style = {styles.byShareWay}>
        <FontAwesome5 name="whatsapp" size={26} color="#fff" />
          <Text style = {styles.byShareText}> Invite Friends By Whatsapp </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => {}}>
        <View style = {styles.byShareWay}>
        <MaterialCommunityIcons name="email-outline" size={26} color="#fff" />
          <Text style = {styles.byShareText}> Invite Friends By Email </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => {}}>
        <View style = {styles.byShareWay}>
        <MaterialCommunityIcons name="message-text-outline" size={26} color="#fff" />
          <Text style = {styles.byShareText}> Invite Friends By SMS </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress = {() => {}}>
        <View style = {styles.byShareWay}>
        <SimpleLineIcons name="share" size={26} color="#fff" />
          <Text style = {styles.byShareText}> Invite Friends By </Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black'
    },
    byShareWay:{
      flexDirection: 'row',
      marginVertical: 20,
    },
    byshareContainer:{
      margin:20
    },
    byShareText:{
      color: '#fff',
      fontSize: RFPercentage(3),
      marginLeft: 10
    }
  });

export default Follow;


