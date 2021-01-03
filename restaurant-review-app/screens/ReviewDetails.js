import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, StyleSheet, View } from "react-native";
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



const ReviewDetails = (props) => {
  const getPlaceId = props.navigation.getParam("id");
  const [placeId, setPlaceId] = useState(getPlaceId);

  const getName = props.navigation.getParam("placeName");
  const getRating = props.navigation.getParam("userRating");
  const getTotalRatings = props.navigation.getParam("totalRatings");

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
         <Body style = {{alignItems: 'flex-end'}}>
           <TouchableOpacity onPress = {() => props.navigation.navigate('googleReviews', {
             id: placeId
           })}>
           <Text style={styles.text}> See Google Reviews </Text>
           </TouchableOpacity>
         </Body>      
          </CardItem>
        </Card>

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
                    Bilal Khan
                  </Text>
                </View>
                <Text>
                  Habib Restaurant is fantastic and food is delicious too
                </Text>
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
                    RATED 4
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
      </Content>
    </Container>
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
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navData.navigation.navigate("postReview")}
      >
        <Text
          style={{
            color: "#0065ff",
            marginRight: 15,
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          {" "}
          Post Review{" "}
        </Text>
      </TouchableOpacity>
    ),
  };
};

export default ReviewDetails;
