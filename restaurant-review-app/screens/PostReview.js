import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Content,
  Textarea,
  Form,
  Text,
  Card,
  CardItem,
  Body,
  Badge,
  Icon,
  Button,
} from "native-base";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as InAppReviewActions from "../store/action/reviews";
import * as authActions from "../store/action/auth";
import * as firebase from "firebase";
import "@firebase/firestore";
import {Bounce} from 'react-native-animated-spinkit'

const PostReview = (props) => {
  const user = useSelector((state) => state.auth.UserName);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const current_timestamp = new Date();
  // console.log(user);
  const [review, setReview] = useState(null);
  const [rating, setRating] = useState(null);
  const name = props.navigation.getParam("name");
  const place_id = props.navigation.getParam("placeId");
  const resRating = props.navigation.getParam("rating");
  const resTotalRatings = props.navigation.getParam("total_ratings");
  const resPhoto = props.navigation.getParam("photo");
  const [resName, setResName] = useState(name);
  const { uid } = firebase.auth().currentUser;
  const db = firebase.firestore();

  const [point1, setPoint1] = useState(false);
  const [point2, setPoint2] = useState(false);
  const [point3, setPoint3] = useState(false);
  const [point4, setPoint4] = useState(false);
  const [point5, setPoint5] = useState(false);

  const getUserData = async () => {
    try {
      const docSnapShot = await db.collection("users").doc(uid).get();
      const userData = docSnapShot.data();
      const userName = userData?.firstname + " " + userData?.lastname;
      dispatch(authActions.setUserName(userName));
      console.log(userData);
    } catch (err) {
      throw err;
    }
  };

  const saveUserReview = async (User, PlaceId, Name, Review, Rating, GoogleRatings, GoogleTotalRatings, GooglePhoto, CurrentTimestamp) => {
    setIsLoading(true);
    await dispatch(InAppReviewActions.addReview(User, PlaceId ,Name, Review, Rating, GoogleRatings, GoogleTotalRatings, GooglePhoto, CurrentTimestamp));
    props.navigation.goBack();
    setIsLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, [uid]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Bounce size={48} color="#0065ff"></Bounce>
      </View>
    );
  }

  return (
    <Content padder>
      <Card>
        <CardItem>
          <Text>
            Please tell us your review about{" "}
            <Text style={{ color: "#0065ff" }}>{name} </Text>
          </Text>
        </CardItem>

        <Form style={{ margin: 10 }}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="Your Review"
            onChangeText={(text) => setReview(text)}
          />
        </Form>
        <CardItem>
          <Text> Rate the restaurant out of 5 </Text>
        </CardItem>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginVertical: 15,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setRating("1");
              setPoint1(true);
            }}
          >
            <Badge primary style={point1 ? styles.selectedReviewPoint : styles.reviewPoints}>
              <Text> 1 </Text>
            </Badge>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setRating("2");
              setPoint2(true);
              setPoint1(false);
              setPoint3(false);
              setPoint4(false);
              setPoint5(false);
            }}
          >
            <Badge
              primary
              style={point2 ? styles.selectedReviewPoint : styles.reviewPoints}
            >
              <Text> 2 </Text>
            </Badge>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setRating("3");
              setPoint3(true);
              setPoint1(false);
              setPoint2(false);
              setPoint4(false);
              setPoint5(false);
            }}
          >
            <Badge
              primary
              style={point3 ? styles.selectedReviewPoint : styles.reviewPoints}
            >
              <Text> 3 </Text>
            </Badge>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setRating("4");
              setPoint4(true);
              setPoint1(false);
              setPoint2(false);
              setPoint3(false);
              setPoint5(false);
            }}
          >
            <Badge
              primary
              style={point4 ? styles.selectedReviewPoint : styles.reviewPoints}
            >
              <Text> 4 </Text>
            </Badge>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setRating("5");
              setPoint5(true);
              setPoint1(false);
              setPoint2(false);
              setPoint3(false);
              setPoint4(false);
            }}
          >
            <Badge
              primary
              style={point5 ? styles.selectedReviewPoint : styles.reviewPoints}
            >
              <Text> 5 </Text>
            </Badge>
          </TouchableOpacity>
        </View>
        <Button
          block
          onPress={() => saveUserReview(user, place_id ,resName, review, rating, resRating, resTotalRatings, resPhoto, current_timestamp)}
          style={{ marginTop: 10, backgroundColor: "#0065ff" }}
        >
          <Text> POST </Text>
        </Button>
      </Card>
    </Content>
  );
};

export default PostReview;

const styles = StyleSheet.create({
  reviewPoints: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#0065ff",
  },
  selectedReviewPoint:{
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "#888",
  }
});
