import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

const CategoryMeals = (props) => {
  //get the param from the category screen
  const catId = props.navigation.getParam("categoryID");

  // find the cat ID passed in
  // const selectedCat = CATEGORIES.find((cat) => cat.id === catId);

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    (meals) => meals.categoryId.indexOf(catId) >= 0
  );

  if (displayMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text> No meal found. Please check your filters! </Text>
      </View>
    );
  }

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

//dynamic navigation configuration
CategoryMeals.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryID");
  const selectedCat = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCat.title,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMeals;
