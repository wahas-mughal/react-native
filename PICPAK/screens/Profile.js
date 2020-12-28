import React, { useState } from "react";
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
  Platform
} from "react-native";
import Card from "../components/Card";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

const Profile = (props) => {
  const galleryData = useSelector((state) => state.gallery.gallery);
  console.log(galleryData);
  
  let TouchableNativeOpacity = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={[styles.fixedPositioning, styles.container, { zIndex: -1 }]}
        source={require("../assets/Images/dash-bgImage.jpg")}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollview}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ marginTop: 50, width: "100%"}}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View></View>
            <Text>
              @Jessica_George
            </Text>
            <MaterialIcons name="settings" size={30} color="black" onPress = {() => props.navigation.navigate('settingsNav')} />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={styles.profileHead}>
            <Image
              source={require("../assets/Images/dummy-img1.jpg")}
              style={styles.profileImage}
            />
            <View style={styles.profileText}>
              <Text style={styles.profileName}> Jessica George </Text>
              <Text> Fashion Model & Photographer </Text>
              <Text> www.jessicafashions.com </Text>
            </View>
          </View>
        </View>

        <View>
          <Card style={styles.card}>
            <View style={styles.followers}>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.countView}>
                  <Text style={styles.count}> 250 </Text>
                  <Text style={styles.title}> Images </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.countView}>
                  <Text style={styles.count}> 250 </Text>
                  <Text style={styles.title}> Followers </Text>
                </View>

              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.countView}>
                  <Text style={styles.count}> 250 </Text>
                  <Text style={styles.title}> Following </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Card>
        </View>

        <CustomButton style={styles.btn} title="Follow" />
        <View style = {{width: Dimensions.get("window").width / 1.1, paddingBottom:40}}>
        <FlatList
          data={galleryData}
          numColumns = {3}
          keyExtractor={(item, index) => item.postId}
          contentContainerStyle = {{alignSelf: 'flex-start'}}
          renderItem={(itemData) => (
         
              <View style={styles.profilePosts}>
                <TouchableNativeOpacity onPress={() => {}}>
                  <Image
                    source={{ uri: itemData.item.postImage }}
                    style={styles.postImages}
                  />
                </TouchableNativeOpacity>
              </View>
          )}
        />
        </View>
       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  fixedPositioning: {
    position: "absolute",
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
  followers: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  count: {
    fontWeight: "bold",
  },
  title: {
    color: "gray",
  },
  countView: {
    alignItems: "center",
  },
  profileImage: {
    width: Dimensions.get('window').width/4,
    height: Dimensions.get('window').width/4,
    borderRadius: 50,
  },
  profileHead: {
    flexDirection: "row",
  },
  profileText: {
    marginLeft: 10,
  },
  card: {
    marginTop: 30,
    padding: 0,
    borderRadius: 10,
    overflow: "hidden",
    // width: 320,
    width: Dimensions.get("window").width / 1.1,
    height: 60,
  },
  profileName: {
    fontWeight: "bold",
  },
  profileDetails: {
    color: "gray",
  },
  btn: {
    width: Dimensions.get("window").width / 1.1,
    height:Dimensions.get("window").width/9,
    backgroundColor: "#ff6600",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  profilePosts: {
    marginTop: 10,
    marginHorizontal:5
  },
  postImages: {
    width: Dimensions.get("window").width /3.6,
    height: Dimensions.get("window").height/7 ,
    borderRadius: 15,
  },
});

export default Profile;
