import React from "react";
import { StyleSheet, Image, Dimensions } from "react-native";
import {
  Container,
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
// import { useSelector } from "react-redux";

const LikedPost = (props) => {
  const { width } = Dimensions.get("window");
  // const getPostId = props.navigation.getParam('id');
  // const post = useSelector(state => state.feed.feed.find(post => post.feedId === getPostId));
  // console.log(post);

  return (
    <Container>
      <Content style={{ marginBottom: 35 }}>
        <Card>
          <CardItem>
            <Left>
              <Text style={{ fontWeight: "700", textTransform: "uppercase" }}>
                Zeba Usher
              </Text>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  "https://www.imagediamond.com/blog/wp-content/uploads/2019/07/hair-face-dp.jpg",
              }}
              style={{ height: width / 1.2, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon
                  active
                  name="heart"
                  style={{ color: "orange", fontSize: 30 }}
                />
                <Text style={{ color: "orange" }}>110</Text>
              </Button>
            </Left>
            <Right>
              <Text>4h ago</Text>
            </Right>
          </CardItem>
          <CardItem>
            <Text numberOfLines={5}>
              Lorem Ipsum is simply dummy text of the printing ands Lorem Ipsum
              is simply dummy text of the printing ands Lorem Ipsum is simply
              dummy text of the printing ands
            </Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default LikedPost;

const styles = StyleSheet.create({});
