import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Icon,
  Right,
  Badge,
} from "native-base";
import {
  TouchableOpacity,
  View,
  FlatList,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Bounce } from "react-native-animated-spinkit";
import * as reviewActions from "../store/action/reviews";

const ReviewHistory = (props) => {
  const authId = useSelector((state) => state.auth.uId);
  const reviews = useSelector((state) =>
    state.reviews.inAppReviews.filter((review) => review.uid === authId)
  );
  const { width } = Dimensions.get("window");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  console.log("USER REVIEWS ", reviews);

  useEffect(() => {
    const getUserReviews = async () => {
      setIsLoading(true);
      await dispatch(reviewActions.fetchInAppReviews());
      setIsLoading(false);
    };
    getUserReviews();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Bounce size={48} color="#0065ff"></Bounce>
      </View>
    );
  }

  if (reviews.length === 0) {
    return (
      <Container>
        <Header style={{ backgroundColor: "#0065ff" }}>
          <Left>
            <Icon
              name="ios-menu"
              style={{ fontSize: 28, color: "#fff" }}
              onPress={() => props.navigation.openDrawer()}
            />
          </Left>
          <Body>
            <View style={{ width: width / 1.6, alignItems: "center" }}>
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                Reviews History
              </Text>
            </View>
          </Body>
          <Right />
        </Header>

        <Card
          style={{
            alignItems: "center",
            padding: 40,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "700" }}>
             No review history yet.
          </Text>
          <Text style={{ fontSize: 14, textAlign: "center" }}>
            Help us know about the places by adding a review about your
            experience!
          </Text>
        </Card>
      </Container>
    );
  }

  let TouchableNativeOpacity = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  return (
    <Container>
      <Header style={{ backgroundColor: "#0065ff" }}>
        <Left>
          <Icon
            name="ios-menu"
            style={{ fontSize: 28, color: "#fff" }}
            onPress={() => props.navigation.openDrawer()}
          />
        </Left>
        <Body>
          <View style={{ width: width / 1.6, alignItems: "center" }}>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              Reviews History
            </Text>
          </View>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <FlatList
          data={reviews}
          renderItem={(resData) => (
            <TouchableNativeOpacity
              onPress={() =>
                props.navigation.navigate("reviewDetails", {
                  placeId: resData.item.placeid,
                  placeName: resData.item.restaurantName,
                  userRating: resData.item.googleRatings,
                  totalRatings: resData.item.googleTotalRatings,
                  photo: resData.item.googlePhotoUrl,
                })
              }
            >
              <Card>
                <CardItem header bordered>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#0065ff",
                      fontSize: 17,
                    }}
                  >
                    <Text style={{ fontSize: 17 }}>You Reviewed: </Text>{" "}
                    {resData.item.restaurantName}
                  </Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>{resData.item.review}</Text>
                  </Body>
                </CardItem>
                <CardItem header bordered>
                  <Text style={{ color: "#0065ff", fontWeight: "bold" }}>
                    You Rated:{" "}
                  </Text>
                </CardItem>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 15,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => {}}>
                    <Badge
                      primary
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 40,
                        backgroundColor: "#0065ff",
                      }}
                    >
                      <Text> {resData.item.rating} </Text>
                    </Badge>
                  </TouchableOpacity>
                  <Text style={{ marginLeft: 5 }}> Points</Text>
                </View>
              </Card>
            </TouchableNativeOpacity>
          )}
        />
      </Content>
    </Container>
  );
};

export default ReviewHistory;
