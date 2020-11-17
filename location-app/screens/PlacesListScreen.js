import React, { useEffect } from "react";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import PlaceItem from "../components/PlaceItem";
import * as placesActions from "../store/places-actions";

const PlacesListScreen = (props) => {
  const placesList = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placesActions.setPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={placesList}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          address={itemData.item.address}
          title={itemData.item.title}
          onSelect={() => {
            props.navigation.navigate("PlacesDetails", {
              title: itemData.item.title,
              id: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default PlacesListScreen;

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerTitleAlign: "center",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName={
            Platform.OS === "android" ? "md-add-circle" : "ios-add-circle"
          }
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButtons>
    ),
  };
};
