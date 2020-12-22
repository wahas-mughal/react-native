import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useSelector } from "react-redux";
// import * as likedPostActions from "../../../store/actions";
// import { useDispatch } from "react-redux";

const Activity = (props) => {
  const galleryData = useSelector((state) => state.gallery.gallery);
  // const dispatch = useDispatch();

  let TouchableNativeOpacity = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  const likedPostModal = (lId) => {
    props.navigation.navigate('likedPost', {id: lId});
  };

  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            borderBottomColor: "orange",
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}
        >
          <SimpleLineIcons name="like" size={24} color="#fff" />
          <Text style={styles.mainText}> Posts You have liked </Text>
        </View>
        <View
          style={{
            width: Dimensions.get("window").width / 1.1,
            marginBottom: 60,
          }}
        >
          <FlatList
            data={galleryData}
            numColumns={3}
            keyExtractor={(item, index) => item.postId}
            contentContainerStyle={{ alignSelf: "flex-start" }}
            renderItem={(itemData) => (
              <View style={styles.profilePosts}>
                <TouchableNativeOpacity
                  onPress={likedPostModal.bind(this, itemData.item.likedId)}
                >
                  <View>
                    <Image
                      source={{ uri: itemData.item.postImage }}
                      style={styles.postImages}
                    />
                  </View>
                </TouchableNativeOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  mainText: {
    color: "#fff",
    fontSize: RFPercentage(3),
    marginLeft: 10,
  },
  profilePosts: {
    marginTop: 10,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  postImages: {
    width: Dimensions.get("window").width / 3.6,
    height: Dimensions.get("window").height / 7,
    borderRadius: 15,
  },
});

export default Activity;
