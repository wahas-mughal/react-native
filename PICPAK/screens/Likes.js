import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome, Fontisto } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Likes = (props) => {
  const { width } = Dimensions.get("window");
  const likesData = useSelector((state) => state.likesNot.likes);
  const feedData = useSelector((state) => state.feed.feed);
  console.log(likesData);

  let TouchableNativeOpacity = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={{ margin: 20 }}>
          <Text style={styles.mainText}> Your Activity </Text>
          {/* <View style={styles.newRequestSection}>
            <TouchableNativeOpacity
              onPress={() => props.navigation.navigate("newRequestFollowers")}
            >
              <Image
                source={{
                  uri: "https://www.computerhope.com/jargon/r/random-dice.jpg",
                }}
                style={{
                  width: width / 6,
                  height: width / 6,
                  borderRadius: 50,
                }}
              />
            </TouchableNativeOpacity>
            <Text style={styles.newFollowText}> New Follow Frequest</Text>
          </View> */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              justifyContent: "center",
            }}
          >
            <Text style={styles.mainText}> Likes </Text>
            <FontAwesome name="heart" size={28} color="orange" />
          </View>

          {likesData.slice(0,5).map((elements) => (
            <TouchableNativeOpacity
              onPress={() => props.navigation.navigate('likedPost', { id: feedData.feedId})} 
              key = {elements.likedId}
            >
              <View style={styles.likeAndCommentSection}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={{
                      uri: elements.whoLiked,
                    }}
                    style={styles.newRequestImage}
                  />
                  <Text style={[styles.activityText, { marginLeft: 10 }]}>
                    {elements.fullname} liked your photo
                  </Text>
                </View>
                <Image
                  source={{
                    uri: elements.photoLiked,
                  }}
                  style={styles.newRequestImage}
                />
              </View>
            </TouchableNativeOpacity>
          ))}
          <View>
            <TouchableOpacity onPress = {() => props.navigation.navigate("alllikes")}>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <Text style={{ fontSize: 16, color: "orange", marginTop: 10 }}>
                  {" "}
                  See All{" "}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  newRequestSection: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  newRequestImage: {
    width: Dimensions.get("window").width / 7.5,
    height: Dimensions.get("window").width / 7.5,
    borderRadius: 50,
  },
  likeAndCommentSection: {
    marginTop: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  newFollowText: {
    marginLeft: 10,
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
  },
  activityText: {
    fontSize: RFPercentage(2.1),
    color: "black",
  },
  mainText: {
    fontSize: RFPercentage(2.8),
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
    color: "orange",
  },
});

export default Likes;
