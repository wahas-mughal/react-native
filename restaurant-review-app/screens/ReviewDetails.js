import React, { useEffect, useState, useCallback } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  FlatList,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import * as reviewActions from "../store/action/reviews";
import { Bounce } from "react-native-animated-spinkit";
import TimeAgo from "react-native-timeago";

const ReviewDetails = (props) => {
  const getPlaceId = props.navigation.getParam("id");
  const [placeId, setPlaceId] = useState(getPlaceId);
  const token = useSelector((state) => state.auth.token);
  const nullReferenceImage =
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=&key=AIzaSyBOMyWUiUrclTaK3tybe7gYEOsa8d-KVU8";

  const { navigation } = props;

  const getName = props.navigation.getParam("placeName");
  const getRating = props.navigation.getParam("userRating");
  const getTotalRatings = props.navigation.getParam("totalRatings");
  const getPhoto = props.navigation.getParam("photo");

  useEffect(() => {
    navigation.setParams({
      authToken: token,
      restaurantName: getName,
      place_id: placeId,
      rating: getRating,
      total_ratings: getTotalRatings,
      photo: getPhoto,
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
            {getPhoto === nullReferenceImage ? (
              <Image
                source={require("../assets/images/no-preview-image.png")}
                style={{ height: 200, width: null, flex: 1 }}
                resizeMode="cover"
              />
            ) : (
              <Image
                source={{
                  uri: getPhoto,
                }}
                style={{ height: 200, width: null, flex: 1 }}
                resizeMode="cover"
              />
            )}
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
        <InAppUserReviews name={getName} navigation={props.navigation} />
      </Content>
    </Container>
  );
};

const InAppUserReviews = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  // const time = new Date().toISOString();
  // const timeFormat = moment().format(time);

  const inAppReviewsDetail = useSelector((state) =>
    state.reviews.inAppReviews.filter(
      (rest) => rest.restaurantName === props.name
    )
  );

  console.log("FILTERED IN APP REVIEW: ", inAppReviewsDetail);

  const getUserReviews = useCallback(async () => {
    setIsLoading(true);
    await dispatch(reviewActions.fetchInAppReviews());
    setIsLoading(false);
  }, [dispatch, setIsLoading]);

  useEffect(() => {
    const willFocus = props.navigation.addListener("willFocus", getUserReviews);
    return () => {
      willFocus.remove();
    };
  }, [getUserReviews]);

  useEffect(() => {
    getUserReviews();
  }, [getUserReviews]);

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
      keyExtractor={(item) => item.uid}
      data={inAppReviewsDetail}
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
                    uri: resData.item.profile_photo,
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
                  {resData.item.username}
                </Text>
              </View>
              <Text>{resData.item.review}</Text>
            </Body>
          </CardItem>
          <CardItem style={{ borderTopColor: "#ccc", borderTopWidth: 0.7 }}>
            <Left style={{ width: 200 }}>
              <Text
                style={{
                  color: "#0065ff",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                <TimeAgo time={resData.item.timestamp} interval={20000} />
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
  const placeID = navData.navigation.getParam("place_id");
  const resRating = navData.navigation.getParam("rating");
  const totalRatings = navData.navigation.getParam("total_ratings");
  const resPhoto = navData.navigation.getParam("photo");

  let TouchableNativeOpacity = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  return {
    headerRight: () => (
      <TouchableNativeOpacity
        onPress={() =>
          navData.navigation.navigate("postReview", {
            name: resName,
            placeId: placeID,
            rating: resRating,
            total_ratings: totalRatings,
            photo: resPhoto,
          })
        }
      >
        {token ? (
          <View
            style={{
              marginRight: 15,
              alignItems: "center",
              justifyContent: "center",
              padding: 8,
              backgroundColor: "#0065ff",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Post Review
            </Text>
          </View>
        ) : (
          <View />
        )}
      </TouchableNativeOpacity>
    ),
  };
};

export default ReviewDetails;
