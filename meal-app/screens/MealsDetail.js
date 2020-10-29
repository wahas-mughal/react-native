import React, { useEffect, useCallback} from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavourite } from "../store/Action/actionmeals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText style={{ textAlign: "center" }}>
        {" "}
        {props.children}{" "}
      </DefaultText>
    </View>
  );
};

const MealsDetail = (props) => {
  const mealID = props.navigation.getParam("mealId");
  const isFavMeal = useSelector(state => state.meals.FavouriteMeals.some(meals => meals.id === mealID));

  const availableMeals = useSelector((state) => state.meals.meals);
  const selectedMeal = availableMeals.find((meal) => meal.id === mealID);

  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavourite(mealID));
  }, [dispatch, mealID])

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavHandler});
  }, [toggleFavHandler]);

  useEffect(() => {
    props.navigation.setParams({isFavourite: isFavMeal});
  }, [isFavMeal]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageURI }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText> {selectedMeal.duration} minutes </DefaultText>
        <DefaultText> {selectedMeal.complexity.toUpperCase()} </DefaultText>
        <DefaultText> {selectedMeal.affordability.toUpperCase()} </DefaultText>
      </View>
      <Text style={styles.title}> Ingredients </Text>
      {selectedMeal.ingredients.map((ingredients) => (
        <ListItem key={ingredients}>{ingredients}</ListItem>
      ))}
      <Text style={styles.title}> Steps </Text>
      {selectedMeal.steps.map((steps) => (
        <ListItem key={steps}>{steps}</ListItem>
      ))}
    </ScrollView>
  );
};

// Setting up the title dynamically on the header
MealsDetail.navigationOptions = (navigationData) => {
  // const mealID = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavourite = navigationData.navigation.getParam('toggleFav');
  const isFav = navigationData.navigation.getParam('isFavourite');

  // const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourites"
          iconName={isFav ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavourite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default MealsDetail;
