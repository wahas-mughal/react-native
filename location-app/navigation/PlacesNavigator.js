import { Platform } from "react-native";
import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlacesListScreen from "../screens/PlacesListScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Color";

const placesStack = createStackNavigator(
  {
    allPlaces: PlacesListScreen,
    PlacesDetails: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    MapScreen: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primary : Colors.secondary,
      },
      headerTintColor:
        Platform.OS === "android" ? Colors.secondary : Colors.primary,
    },
  }
);

export default createAppContainer(placesStack);
