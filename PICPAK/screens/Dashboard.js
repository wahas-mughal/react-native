import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StatusBar
} from "react-native";
import Card from "../components/Card";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions";
import Animated from 'react-native-reanimated';
import { RFPercentage } from "react-native-responsive-fontsize";
// @refresh reset

const Dashboard = (props) => {
  // const [scrollBegins, setScrollBegins] = useState(false);
  // const [isLiked, setIsLiked] = useState(false);
  const HEADER_HEIGHT = Platform.OS === 'ios' ? 115 : 70+StatusBar.currentHeight;
  
  //set the animated value Y position to 0
  const scrollY = new Animated.Value(0);

  //to show the header on scroll up get the scroll Y value and set min and max value
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  
  //set the input and output range on diffClamp values
  const headerY = Animated.interpolate(diffClampScrollY, {
    // 0 to header height
    inputRange: [0, HEADER_HEIGHT],
    // header height to 0
    outputRange: [0, -HEADER_HEIGHT]
  });

  const feedData = useSelector((state) => state.feed.feed);
  const dispatch = useDispatch();
  console.log(feedData);
  console.log(Dimensions.get("window").width / 5);

  let TouchableNativeOpacity = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  const postLikeHandler = (fId) => {
    dispatch(actions.isLiked(fId));
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={[styles.fixedPositioning, { zIndex: -10 }]}
        source={require("../assets/Images/dash-bgImage.jpg")}
      />

      {/* //transform the headerY to create an effect */}
      <Animated.View style = {[styles.header, {height: HEADER_HEIGHT, transform: [{translateY: headerY}]}]} >
        <Text style = {{color: '#fff', fontWeight: 'bold', fontSize: RFPercentage(3.5)}}> EXPLORE </Text>
      </Animated.View>

      <Animated.ScrollView
      bounces = {false}
       // set the throttle value to 16
        scrollEventThrottle = {16}

        // create an animated event and set the nativeEvent contentOffset(y: scrollY)
        onScroll = {Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY
              }
            }
          }
        ])}
        showsVerticalScrollIndicator={false}
        style={styles.scrollview}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 40,
          paddingTop: 80
        }}
      >
        {feedData.map((elements) => (
          <View
            style={{
              overflow: "hidden",
              borderBottomLeftRadius: 35,
              borderBottomRightRadius: 35,
              marginTop: 40,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
            key={elements.feedId}
          >
            <TouchableNativeOpacity
              onPress={postLikeHandler.bind(this, elements.feedId)}
            >
              <View>
                <Card style={styles.card}>
                  <View style={{ width: "100%", height: "69%" }}>
                    <Image
                      source={{ uri: elements.postImage }}
                      style={styles.image}
                    />
                    <View style={styles.likedView}>
                      {elements.isLiked ? (
                        <AntDesign name="heart" size={24} color="orange" />
                      ) : (
                        <AntDesign name="heart" size={24} color="gray" />
                      )}
                      <Text style={styles.likedText}>
                        Furqan and 201 others liked
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "20%",
                        paddingHorizontal: 20,
                        paddingTop: 5,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 3,
                        }}
                      >
                        <Text style={styles.profileName}>
                          {elements.user}
                        </Text>
                        <TouchableNativeOpacity onPress = {() => props.navigation.navigate('likedPost', {
                          id: elements.feedId
                        })}>
                          <View
                            style={{
                              backgroundColor: "orange",
                              padding: 3,
                              borderRadius: 7,
                            }}
                          >
                            <Text style={{ color: "#fff" }}> View </Text>
                          </View>
                        </TouchableNativeOpacity>
                      </View>
                      <Text numberOfLines={3} style={{ marginTop: 3 }}>
                        {elements.profileDescription}
                      </Text>
                    </View>
                  </View>
                </Card>
              </View>
            </TouchableNativeOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  fixedPositioning: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollview: {
    backgroundColor: "transparent",
    flex: 1,
  },
  mainText: {
    fontSize: 23,
    fontWeight: "bold",
  },
  likedView: {
    flexDirection: "row",
    paddingHorizontal: 5,
    height: "11%",
    alignItems: "center",
    borderBottomColor: "orange",
    borderBottomWidth: 1.5,
    width: "80%",
    marginHorizontal: 27,
  },
  likedText: {
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  mainTextContainer: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    // marginTop: 40,
    padding: 0,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").height / 1.3,
  },

  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 3,
  },
  header:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'orange',
    zIndex: 1000,
    elevation: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  }
});

export default Dashboard;
