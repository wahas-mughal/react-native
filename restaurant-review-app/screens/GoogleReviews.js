import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, FlatList, ActivityIndicator } from "react-native";
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
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import * as reviewActions from "../store/action/reviews";
import {Bounce} from 'react-native-animated-spinkit'

const GoogleReviews = (props) => {
  const GoogleAPI = "AIzaSyBOMyWUiUrclTaK3tybe7gYEOsa8d-KVU8";
  const getPlaceId = props.navigation.getParam("id");
  const [isLoading, setIsLoading] = useState(false);
  const [placeId, setPlaceId] = useState(getPlaceId);

  const getReviews = useSelector((state) => state.reviews.placeReviews);
  const dispatch = useDispatch();

  const getReviewById = async (placeID) => {
      setIsLoading(true);
    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=reviews&key=${GoogleAPI}`;
      const results = await fetch(url);
      const resData = await results.json();
      console.log(resData);
      dispatch(reviewActions.fetchReview(resData));
    } catch (err) {
      throw err;
    }
    setIsLoading(false)
  };

  useEffect(() => {
    if (placeId) {
      getReviewById(placeId);
    }
  }, [placeId]);

  
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Bounce size={48} color="#0065ff"></Bounce>
      </View>
    );
  }

  return (
    <FlatList
      data={getReviews}
      renderItem={(resData) => (
        <Card>
          <CardItem>
            <Body>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Image
                  source={{
                    uri: resData.item.profilePhoto,
                  }}
                  style={styles.image}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#0065ff",
                    marginLeft: 7,
                  }}
                >
                  {resData.item.name}
                </Text>
              </View>
              <Text>{resData.item.review}</Text>
            </Body>
          </CardItem>
          <CardItem style = {{borderTopColor: '#ccc', borderTopWidth: 0.7}}>
            <Left>
              <Text
                style={{
                  color: "#0065ff",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {resData.item.reviewedAgo}
              </Text>
            </Left>
            <Right>
              <Text
                style={{
                  color: "#0065ff",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Rated {resData.item.rating}
              </Text>
            </Right>
          </CardItem>
        </Card>
      )}
    />
  );
};

export default GoogleReviews;

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
});
