import React, { useEffect, useState } from "react";
import { StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
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
import {useDispatch, useSelector} from 'react-redux';
import * as detailActions from '../store/action/details';

const Home = (props) => {

  //Google Maps API
  const GoogleAPI = 'AIzaSyBOMyWUiUrclTaK3tybe7gYEOsa8d-KVU8'
  const fetchedPlacesDetails = useSelector(state => state.details.placeDetails);
  console.log(fetchedPlacesDetails); 


  const [pickedLocation, setPickedLocation] = useState();
  const [placeID, setPlaceID] = useState('');
  const [selectedLocation, setSelectedLocation] = useState();
  const [placeDetails, setPlaceDetails] = useState();
  console.log("PLACES DETAILS: "+placeDetails);
  console.log(placeID);
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.auth.token);
  // console.log(token);



  //places

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
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (err) {
      Alert.alert(
        "Could not fetch location!",
        "Please try again later or pick a location on the map.",
        [{ text: "Okay" }]
      );
    }
  };

// request google maps nearby API to fetch the data for nearby restaurants
const reqNearbyRestaurants = async (placeId) => {
  try{
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,geometry/location,reviews,photos&key=${GoogleAPI}`;
    const result = await fetch(url);
    const resData = await result.json();
    console.log(resData);
    // get the lat and lng of the selected location
    setSelectedLocation({
      latitude: resData.result.geometry.location.lat,
      longitude: resData.result.geometry.location.lng,
    })
  }
  catch(err) {
    throw err;
  }
  try{
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${selectedLocation.latitude},${selectedLocation.longitude}&radius=1500&type=restaurant&key=${GoogleAPI}`;
    const result = await fetch(url);
    const resData = await result.json();
    console.log(resData);

    dispatch(detailActions.setPlaceDetails(resData));
    // const detailsArray = []

    // for (const data of resData){
    //   detailsArray.push(
    //     data.results.place_id,
    //     data.results.name,
    //     data.results.photos.photo_reference,
    //     data.results.rating
    //   )
    // }

    setPlaceDetails(resData.results);
  }
  catch(err){
    throw err;
  }
  
}

  //runs getLocationHandler when the screen is mounted
  useEffect(() => {
    getLocationHandler();
  }, []);

  useEffect(() => {
    reqNearbyRestaurants(placeID);
  }, [placeID, dispatch])

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
              }}
            />
            {/* <Icon name="ios-search" style={{ color: "#0065ff" }} />
            <Input placeholder="Search" />
            <Icon name="md-location-sharp" style={{ color: "#0065ff" }} /> */}
          </CardItem>
        </Card>
        
        <FlatList data = {placeDetails} 
        renderItem = {(data) => (
          <TouchableOpacity
          onPress={() => props.navigation.navigate("reviewDetails")}
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
                    {data.item.name}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    data.item.icon
                }}
                style={{ height: 200, width: null, flex: 1 }}
                resizeMode = 'contain'
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
                    Reviews(20)
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
                    {data.item.rating}
                  </Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </TouchableOpacity>
        )}
        />
      
      </Content>
    </Container>
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
