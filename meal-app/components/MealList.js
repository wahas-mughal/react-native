import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItems from "./MealItems";
import { useSelector } from "react-redux";

const MealList = (props) => {
  const isFavMeal = useSelector((state) => state.meals.FavouriteMeals);

  const onSelectMeal = (itemData) => {
    const favouriteMeals = isFavMeal.some(
      (meals) => meals.id === itemData.item.id
    );
    return (
      <MealItems
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageURI}
        onSelectMeals={() => {
          props.navigation.navigate({
            routeName: "MealsDetailScreen",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFavourite: favouriteMeals,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={onSelectMeal}
        style={{ width: "90%", margin: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default MealList;
