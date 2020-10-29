import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Platform,
  TouchableOpacity,
  Alert
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { fiterMeals } from "../store/Action/actionmeals";

const FilterToggles = (props) => {
  return (
    <View style={styles.container}>
      <Text> {props.title} </Text>
      <Switch
        trackColor={
          Platform.OS === "android"
            ? { true: "#ccc" }
            : { true: Colors.primaryColor }
        }
        thumbColor={Platform.OS === "android" ? Colors.accentColor : ""}
        value={props.state}
        onValueChange={props.change}
      />
    </View>
  );
};

const FilterMeals = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVeganFree, setIsVeganFree] = useState(false);
  const [isVegetarianFree, setIsVegetarianFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const dispatch = useDispatch();

  // param function to set
  const saveFilters = useCallback(() => {
    const appliedFilter = {
      GlutenFree: isGlutenFree,
      VeganFree: isVeganFree,
      VegetarianFree: isVegetarianFree,
      LactoseFree: isLactoseFree,
    };

    dispatch(fiterMeals(appliedFilter));
    
    Alert.alert('Your filter option has been saved!');

  }, [isGlutenFree, isVeganFree, isVegetarianFree, isLactoseFree, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Filters </Text>
      <FilterToggles
        title="Gluten Free"
        state={isGlutenFree}
        change={(newVal) => setIsGlutenFree(newVal)}
      />
      <FilterToggles
        title="Vegan Free"
        state={isVeganFree}
        change={(newVal) => setIsVeganFree(newVal)}
      />
      <FilterToggles
        title="Vegetarian Free"
        state={isVegetarianFree}
        change={(newVal) => setIsVegetarianFree(newVal)}
      />
      <FilterToggles
        title="Lactose Free"
        state={isLactoseFree}
        change={(newVal) => setIsLactoseFree(newVal)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
  saveText: {
    fontFamily: "open-sans-regular",
    fontSize: 18,
    color: Platform.OS === "android" ? "#fff" : Colors.primaryColor,
    marginHorizontal: 12,
  },
});

FilterMeals.navigationOptions = (navData) => {

  const save = navData.navigation.getParam('save');

  return {
    headerTitle: "Filtered Meals",
    headerTitleAlign: "center",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName="ios-menu"
          title="Menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (

      <TouchableOpacity onPress = {save}> 
          <Text
          style={styles.saveText}
        >
          {" "}
          Save{" "}
        </Text>
      </TouchableOpacity>
    
    ),
  };
};

export default FilterMeals;
