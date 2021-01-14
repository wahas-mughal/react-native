import React, { useEffect, useState } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
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
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import * as reviewActions from "../store/action/reviews";
import { Bounce } from 'react-native-animated-spinkit';

const ReviewDetails = (props) => {
  const getPlaceId = props.navigation.getParam("id");
  const [placeId, setPlaceId] = useState(getPlaceId);
  const token = useSelector((state) => state.auth.token);
  // console.log("PAYLOAD ", inAppReviewsDetail[0].username);

  // console.log(token);
  const { navigation } = props;

  const getName = props.navigation.getParam("placeName");
  const getRating = props.navigation.getParam("userRating");
  const getTotalRatings = props.navigation.getParam("totalRatings");

  useEffect(() => {
    navigation.setParams({
      authToken: token,
      restaurantName: getName,
    });
  }, []);

  return (
    <Container>
      <Content>
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
                  {getName}
                </Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  "https://media-cdn.tripadvisor.com/media/photo-s/11/9e/75/70/sala-a-restaurant.jpg",
              }}
              style={{ height: 200, width: null, flex: 1 }}
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
                  style={{ color: "#0065ff", fontSize: 15, fontWeight: "bold" }}
                >
                  Total Ratings({getTotalRatings})
                </Text>
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon name="star" style={{ color: "#0065ff", fontSize: 20 }} />
                <Text
                  style={{ color: "#0065ff", fontSize: 15, fontWeight: "bold" }}
                >
                  {getRating}
                </Text>
              </Button>
            </Right>
          </CardItem>
          <CardItem>
            <Body style={{ alignItems: "flex-end" }}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("googleReviews", {
                    id: placeId,
                    name: getName,
                  })
                }
              >
                <Text style={styles.text}> See Google Reviews </Text>
              </TouchableOpacity>
            </Body>
          </CardItem>
        </Card>
        <InAppUserReviews name={getName} />
      </Content>
    </Container>
  );
};

const InAppUserReviews = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const inAppReviewsDetail = useSelector((state) =>
    state.reviews.inAppReviews.filter(
      (rest) => rest.restaurantName === props.name
    )
  );
  // console.log("FILTERED IN APP REVIEW: ", inAppReviewsDetail);

  useEffect(() => {
    const getUserReviews = async () => {
      setIsLoading(true);
      await dispatch(reviewActions.fetchInAppReviews(props.name));
      setIsLoading(false);
    };
    getUserReviews();
  }, []);

  if (inAppReviewsDetail.length === 0) {
    return (
      <Card style={{ alignItems: "center", padding: 40 }}>
        <Text style={{ fontSize: 22, fontWeight: "700" }}>No reviews yet.</Text>
        <Text style={{ fontSize: 14, textAlign: "center" }}>
          Help us know this place by adding a review if you have been here and
          experienced their services. Login to post a review!
        </Text>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Bounce size={48} color="#0065ff"></Bounce>
      </View>
    );
  }

  return (
    <FlatList
      data={inAppReviewsDetail}
      renderItem={(resData) => (
        <Card>
          <CardItem>
            <Left>
              <Body>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#0065ff",
                    }}
                  >
                    {resData.item.username}
                  </Text>
                </View>
                <Text>{resData.item.review}</Text>
              </Body>
            </Left>
            <Right>
              <Body style={{ justifyContent: "flex-end" }}>
                <View style={{ justifyContent: "flex-start" }}>
                  <Text
                    style={{
                      color: "#0065ff",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Rated {resData.item.rating}
                  </Text>
                  <Text
                    style={{
                      color: "#0065ff",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    3 months ago
                  </Text>
                </View>
              </Body>
            </Right>
          </CardItem>
        </Card>
      )}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  text: {
    color: "#0065ff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

ReviewDetails.navigationOptions = (navData) => {
  const token = navData.navigation.getParam("authToken");
  const resName = navData.navigation.getParam("restaurantName");

  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navData.navigation.navigate("postReview", {
            name: resName,
          })
        }
      >
        {token ? (
          <Text
            style={{
              color: "#0065ff",
              marginRight: 15,
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Post Review
          </Text>
        ) : (
          <View />
        )}
      </TouchableOpacity>
    ),
  };
};

export default ReviewDetails;
