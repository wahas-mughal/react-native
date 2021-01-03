import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  View,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Input,
} from "native-base";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import * as detailActions from "../store/action/details";
// navigator.geolocation = require('@react-native-community/geolocation');
// navigator.geolocation = require('react-native-geolocation-service');


const Home = (props) => {
  const [placeID, setPlaceID] = useState("");
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <GooglePlacesAutocomplete
              placeholder="Search Nearby Restaurants"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                setPlaceID(details.place_id);
              }}
              query={{
                key: "AIzaSyBOMyWUiUrclTaK3tybe7gYEOsa8d-KVU8",
                language: "en",
                components: "country:pk"
              }}
              currentLocation={true}
              currentLocationLabel='Choose current location'
            />
          </CardItem>
        </Card>
        <SearchedItems place_id={placeID} navigation = {props.navigation} />
      </Content>
    </Container>
  );
};

const SearchedItems = (props) => {
  const { place_id } = props;
  //Google Maps API
  const GoogleAPI = "AIzaSyBOMyWUiUrclTaK3tybe7gYEOsa8d-KVU8";
  const fetchedPlacesDetails = useSelector(
    (state) => state.details.placeDetails
  );
  console.log(fetchedPlacesDetails);

  const [pickedLocation, setPickedLocation] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // verify current location permissions
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant location permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };



  // function to get the device current location
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    try {
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });
      console.log(location);

        const lat = location.coords.latitude;
        const lng = location.coords.longitude;
        findNearByRestaurant(lat, lng)

    } catch (err) {
      Alert.alert(
        "Could not fetch location!",
        "Please try again later or pick a location on the map.",
        [{ text: "Okay" }]
      );
    }
  };

  const findNearByRestaurant = async (lat, lng) => {
    setIsLoading(true);
    try{
      const nearestPlaceAPI = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&key=${GoogleAPI}`;
      const nearestPlaceResult = await fetch(nearestPlaceAPI);
      const nearestPlaceResData = await nearestPlaceResult.json();
      console.log(nearestPlaceResData);
      dispatch(detailActions.setPlaceDetails(nearestPlaceResData));
    }
    catch(err){
      throw err;
    }
    setIsLoading(false);
  }


  // request google maps nearby API to fetch the data for nearby restaurants
  const reqNearbyRestaurants = async (placeId) => {
    try {
      const placeSearchAPI = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,geometry/location,reviews,photos&key=${GoogleAPI}`;
      const placeResults = await fetch(placeSearchAPI);
      const placeResData = await placeResults.json();
      console.log(placeResData);

      const lat =  placeResData.result.geometry.location.lat
      const lng =  placeResData.result.geometry.location.lng
      findNearByRestaurant(lat, lng);
      // const nearestPlaceAPI = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=restaurant&key=${GoogleAPI}`;
      // const nearestPlaceResult = await fetch(nearestPlaceAPI);
      // const nearestPlaceResData = await nearestPlaceResult.json();
      // console.log(nearestPlaceResData);
      // dispatch(detailActions.setPlaceDetails(nearestPlaceResData));
    } catch (err) {
      throw err;
    }
  };

  //runs getLocationHandler when the screen is mounted
  useEffect(() => {
    getLocationHandler();
  }, []);

  useEffect(() => {
    if (place_id) {
      reqNearbyRestaurants(place_id);
    }
  }, [place_id]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={28} color="#0065ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={fetchedPlacesDetails}
      renderItem={(resData) => (
        <TouchableOpacity
          onPress={() => props.navigation.navigate("reviewDetails", {
            id: resData.item.place_id,
            placeName: resData.item.name,
            userRating: resData.item.rating,
            totalRatings: resData.item.total_ratings
          })}
        >
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 21,
                      color: "#0065ff",
                      fontWeight: "bold",
                    }}
                  >
                    {resData.item.name}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri: "https://cdn-food.tribune.com.pk/gallery/jHwYlOlhiCQSU6OBcx6RObu72a7JSvei5rHBjvJa.jpeg"
                }}
                style={{ height: 200, width: null, flex: 1 }}
                resizeMode="contain"
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon
                    style={{ color: "#0065ff", fontSize: 20 }}
                    name="md-pencil-sharp"
                  />
                  <Text
                    style={{
                      color: "#0065ff",
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                  Total Ratings({resData.item.total_ratings})
                  </Text>
                </Button>
              </Left>
              <Right>
                <Button transparent>
                  <Icon
                    name="star"
                    style={{ color: "#0065ff", fontSize: 20 }}
                  />
                  <Text
                    style={{
                      color: "#0065ff",
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    {resData.item.rating}
                  </Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
};

Home.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName="ios-menu"
          title="menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default Home;

const styles = StyleSheet.create({});
