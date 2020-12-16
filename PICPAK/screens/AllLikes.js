import React from "react";
import {
  View,
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
import { Button, Text, Icon } from "native-base";
import { useSelector } from "react-redux";

const AllLikes = (props) => {

  let TouchableNativeOpacity = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  const likesData = useSelector((state) => state.likesNot.likes);
  console.log(likesData);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={{ margin: 20, marginBottom: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              justifyContent: "center",
            }}
          >
            <Text style={styles.mainText}> All Likes </Text>
            <FontAwesome name="heart" size={28} color="orange" />
          </View>

          <View style={{ marginVertical: 15 }}>
            <Button
              iconLeft
              light
              style={{ borderRadius: 50, backgroundColor: "orange" }}
              onPress={() => props.navigation.goBack()}
            >
              <Icon name="arrow-back" style={{ color: "#fff" }} />
              <Text style={{ color: "#fff" }}>Back</Text>
            </Button>
          </View>

          {likesData.map((elements) => (
            <TouchableNativeOpacity
              onPress={() => props.navigation.navigate("alllikes")}
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

export default AllLikes;
