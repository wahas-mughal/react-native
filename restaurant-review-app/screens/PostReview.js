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
import * as firebase from "firebase";
import '@firebase/firestore';

const PostReview = (props) => {
  const user = useSelector(state => state.auth.UserName);
  const [review, setReview] = useState(null);
  const [rating, setRating] = useState(null);
  const name = props.navigation.getParam('name');
  const dispatch = useDispatch();
  const {uid} = firebase.auth().currentUser;
  const db = firebase.firestore();

  
  const getUserData = async () => {
    try{
      const docSnapShot = await db.collection("users").doc(uid).get();
      const userData = docSnapShot.data();
      const userName = userData?.firstname + " " + userData?.lastname
      dispatch(authActions.setUserName(userName))
      console.log(userData);
    }
    catch(err){
      throw err;
    }
  }


  const saveUserReview = (User, Name, Review, Rating) => {
    dispatch(InAppReviewActions.addReview(User, Name, Review, Rating));
  };

  useEffect(() => {
    getUserData();
  },[])

  return (
    <Content padder>
      <Card>
        <CardItem>
          <Text>Please tell us your review about Habib Restaurant</Text>
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
          <Text> Rate the restaurant out of 5 points </Text>
        </CardItem>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginVertical: 15,
          }}
        >
          <TouchableOpacity onPress={() => setRating("1")}>
            <Badge
              primary
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                backgroundColor: "#0065ff",
              }}
            >
              <Text> 1 </Text>
            </Badge>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating("2")}>
            <Badge
              primary
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                backgroundColor: "#0065ff",
              }}
            >
              <Text> 2 </Text>
            </Badge>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating("3")}>
            <Badge
              primary
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                backgroundColor: "#0065ff",
              }}
            >
              <Text> 3 </Text>
            </Badge>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating("4")}>
            <Badge
              primary
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                backgroundColor: "#0065ff",
              }}
            >
              <Text> 4 </Text>
            </Badge>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRating("5")}>
            <Badge
              primary
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                backgroundColor: "#0065ff",
              }}
            >
              <Text> 5 </Text>
            </Badge>
          </TouchableOpacity>
        </View>
        <Button
          block
          onPress={() => saveUserReview(user, name, review, rating)}
          style={{ marginTop: 15 }}
        >
          <Text> POST </Text>
        </Button>
      </Card>
    </Content>
  );
};

export default PostReview;

const styles = StyleSheet.create({});
