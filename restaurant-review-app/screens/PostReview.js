import React from "react";
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
  Icon
} from "native-base";
import {View} from 'react-native';

const PostReview = () => {
  return (
    <Content padder>
      <Card>
          <CardItem>
          <Text>Please tell us your review about Habib Restaurant</Text>
          </CardItem>
          
        <Form style = {{margin: 10}}>
          <Textarea rowSpan={5} bordered placeholder="Your Review" />
        </Form>
        <CardItem>
            <Text> Rate the restaurant out of 5 points </Text>
        </CardItem>
        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 15}}>
        <TouchableOpacity onPress = {() => {}}>
        <Badge primary style = {{width: 40, height: 40, borderRadius: 40, backgroundColor: '#0065ff'}} >
            <Text> 1 </Text>
        </Badge>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => {}}>
        <Badge primary style = {{width: 40, height: 40, borderRadius: 40, backgroundColor: '#0065ff'}} >
            <Text> 2 </Text>
        </Badge>
        </TouchableOpacity >
        <TouchableOpacity onPress = {() => {}}>
        <Badge primary style = {{width: 40, height: 40, borderRadius: 40, backgroundColor: '#0065ff'}} >
            <Text> 3 </Text>
        </Badge>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => {}}>
        <Badge primary style = {{width: 40, height: 40, borderRadius: 40, backgroundColor: '#0065ff'}} >
            <Text> 4 </Text>
        </Badge>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => {}}>
        <Badge primary style = {{width: 40, height: 40, borderRadius: 40, backgroundColor: '#0065ff'}} >
            <Text> 5 </Text>
        </Badge>
        </TouchableOpacity>
        </View>
      </Card>
    </Content>
  );
};

export default PostReview;

const styles = StyleSheet.create({});
