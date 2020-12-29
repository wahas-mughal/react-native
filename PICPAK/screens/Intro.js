import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CustomButton from "../components/CustomButton";

const SCREEN_WIDTH = Dimensions.get("window").width;

const Introduction = (props) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    }}
  >
    <View
      style={{
        width: "95%",
        height: "80%",
        justifyContent: "flex-start",
        backgroundColor: 'rgba(255,255,255, 0.2)',
        paddingHorizontal: 15,
        paddingVertical: 25,
        borderRadius: 10
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
          textTransform: "uppercase",
          marginBottom: 70,
        }}
      >
        {props.heading}
      </Text>
      <Text
        style={{
          color: "rgba(255, 255, 255, 0.8)",
          marginTop: 20,
          fontSize: 19,
          textAlign: "center",
          fontWeight: "100",
        }}
      >
        {props.text}
      </Text>
    </View>
    <CustomButton
      title="SKIP"
      onPress={() => props.navigation.navigate("dashboardBottomNav")}
      style={{
        width:Dimensions.get('window').width/2,
        height:Dimensions.get('window').width/10,
        borderRadius: 10,
        position: "absolute",
        bottom: 62,
        backgroundColor: "#cf0a0a",
      }}
    />
  </View>
);

export default class App extends Component {
  SCREENS = [
    <Introduction
      navigation={this.props.navigation}
      heading="Explore The World Today"
      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    />,
    <Introduction
      navigation={this.props.navigation}
      heading="Explore The World Today"
      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    />,
    <Introduction
      navigation={this.props.navigation}
      heading="Explore The World Today"
      text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    />,
  ];

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={require("../assets/Images/intro-screen.jpg")} resizeMode = 'stretch'>
        <Carousel
          ref={(ref) => (this.carouselRef = ref)}
          data={this.SCREENS}
          renderItem={({ item }) => item}
          onSnapToItem={(i) => this.setState({ activeTab: i })}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH}
          slideStyle={{ width: SCREEN_WIDTH }}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
        />

        <View style={styles.tabBar}>
          <Pagination
            dotStyle={styles.ww}
            inactiveDotOpacity={0.8}
            inactiveDotScale={0.6}
            activeDotIndex={this.state.activeTab}
            dotsLength={this.SCREENS.length}
            inactiveDotStyle={{
              backgroundColor: "#fff",
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  ww: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 0,
    backgroundColor: "#ff6600",
  },
  container: {
    flex: 1,
    // paddingTop: 40,
  },
  tabBar: {
    position: "absolute",
    right: 0,
    bottom: Dimensions.get('window').width/3.3,
    left: 0,
    borderColor: "#ddd",
  },
  tabsContainer: {
    flexDirection: "row",
    height: 50,
    paddingTop: 0,
    paddingBottom: 0,
  },
});
