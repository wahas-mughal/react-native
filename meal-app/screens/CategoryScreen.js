import React from "react";
import { FlatList, LayoutAnimation } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const CategoryScreen = (props) => {

  LayoutAnimation.easeInEaseOut();

  const showGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMealScreen", {
            categoryID: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={showGridItem}
      keyExtractor={(item, index) => item.id}
      numColumns={2}
    />
    // <View style={styles.screen}>
    //   <Text> Category Screen! </Text>
    //   <Button title = "Go to Meals" onPress = {() => {props.navigation.navigate({routeName: 'CategoryMealScreen'})}}/>
    // {/* OR <Button title = "Go to Meals" onPress = {() => {props.navigation.navigate('CategoryMealScreen')}}/> */}

    // {/* <Button title = "Go Back" onPress = {()=> props.navigation.goBack()}/>
    //Go back to screen in the stack */}
    // {/* <Button title = "Go to Meals" onPress = {() => {props.navigation.push('CategoryMealScreen')}}/>
    // push switch to the same screen i.e. handy if we want to push different content on the same screen like DropBox */}
    // {/* <Button title = "Go to Meals" onPress = {() => {props.navigation.pop('CategoryMealScreen')}}/>
    // removes the screen from the stack */}
    // {/* <Button title = "Go to Meals" onPress = {() => {props.navigation.replace('CategoryMealScreen')}}/>
    //remove the previous stack completely */}
    // </View>
  );
};

CategoryScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item iconName="ios-menu" title="Menu" onPress={() => {navData.navigation.toggleDrawer()}} />
      </HeaderButtons>
    ),
    headerTitleAlign: "center",
  };
};

export default CategoryScreen;
