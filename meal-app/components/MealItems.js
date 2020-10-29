import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import DefaultText from '../components/DefaultText';

const MealItems = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress = {props.onSelectMeals}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source = {{uri: props.image}} style = {styles.bgImage}>
              <View style = {styles.titleContainer}>
              <Text style = {styles.title} numberOfLines = {1}> {props.title} </Text>
              </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
          <DefaultText> {props.duration} minutes </DefaultText>
          <DefaultText> {props.complexity.toUpperCase()} </DefaultText>
          <DefaultText> {props.affordability.toUpperCase()} </DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: 'center',
    height: '15%'
  },
  bgImage:{ 
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end'
  },
  title:{
      fontFamily: 'open-sans-bold',
      fontSize: 20,
      color: 'white',
      textAlign: 'center'
  },
  titleContainer:{
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  }
});

export default MealItems;
