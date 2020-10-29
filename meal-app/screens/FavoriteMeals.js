import React from "react";
import MealList from "../components/MealList";
import {View, Text, StyleSheet} from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {useSelector} from 'react-redux';

const FavoriteMeals = (props) => {

  const favMeals = useSelector(state => state.meals.FavouriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style = {styles.content}>
        <Text> No favourite meal added yet. Please add some!</Text>
      </View>
    );
  }

  return <MealList listData = {favMeals} navigation = {props.navigation}/>
};

FavoriteMeals.navigationOptions = (navData) => {
  return {
    headerTitle: "My Favourites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item iconName="ios-menu" title="Menu" onPress={() => {navData.navigation.toggleDrawer()}} />
      </HeaderButtons>
    ),
    headerTitleAlign: "center",
  };
};


const styles = StyleSheet.create({
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default FavoriteMeals;