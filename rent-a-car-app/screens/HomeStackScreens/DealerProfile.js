import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../shared/CustomHeaderButton";

const DealerProfile = (props) => {
  const dealerID = props.navigation.getParam("id");

  const dealerData = useSelector((state) =>
    state.dealers.allDealers.filter((dealer) => dealer.dealerId === dealerID)
  );

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={dealerData}
      keyExtractor={(item) => item.dealerId}
      renderItem={(itemData) => (
        <View style={{ flex: 1 }}>
          <View style={styles.imageView}>
            <ImageBackground
              style={styles.image}
              source={{ uri: itemData.item.coverImage }}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{itemData.item.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.ratingText}>{itemData.item.rating} </Text>
                  <Ionicons name="md-star" size={22} color="#FFD700" />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.details}>
            <View style={styles.detailsInnerView}>
              <Text style={styles.descriptionText}>About</Text>
              <Text>{itemData.item.description}</Text>
              <Text style={styles.line}> </Text>
              <Text style={styles.locationText}>Address</Text>
              <Text>{itemData.item.address}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};

DealerProfile.navigationOptions = (navData) => {

  const title = navData.navigation.getParam('title')
  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item iconName="star-o" />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  imageView: {
    width: "100%",
    height: 260,
  },
  descriptionText: {
    marginVertical: 15,
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "black",
  },
  locationText: {
    marginVertical: 15,
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "black",
  },
  details: {
    padding: 5,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  detailsInnerView: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  line: {
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    color: "white",
  },
});

export default DealerProfile;
