import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import Card from "../shared/Card";
// import * as dealerActions from "../store/actions/dealers";
// import { useDispatch } from "react-redux";

export default function AllDealers({ navigation }) {
  const allDealer = useSelector((state) => state.dealers.allDealers);

  let TouchableNativeOpacity = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  return (
    <View style={styles.allFeaturedSection}>
      <Text style={styles.featureHeading}>All Dealers </Text>
      <Text style = {{borderBottomColor: '#ccc', borderBottomWidth:0.7, marginBottom: 15, marginTop: -10}}/>
      <FlatList
        data={allDealer}
        keyExtractor={(item) => item.dealerId}
        renderItem={(itemData) => (
          <TouchableNativeOpacity
            onPress={() =>
              navigation.navigate("Dealer Profile", {
                id: itemData.item.dealerId,
                title: itemData.item.title,
              })
            }
          >
            <View style={{ margin: 10, marginBottom: 20 }}>
              <Card style={styles.allCard}>
                <Image
                  style={styles.allFeaturedImage}
                  source={{ uri: itemData.item.coverImage }}
                />
                <View style={{ margin: 7 }}>
                  <Text style={styles.titleText}> {itemData.item.title} </Text>
                  <Text style={styles.ratingText}>
                    {" "}
                    Rating {itemData.item.rating}
                  </Text>
                </View>
              </Card>
              <Text style = {{borderBottomColor: '#ccc', borderBottomWidth:0.7}}/>
            </View>
          </TouchableNativeOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  allFeaturedSection: {
    backgroundColor: '#fff',
    padding: 5
  },

  allFeaturedImage: {
    width: "100%",
    height: 205,
  },

  ratingText: {
    fontFamily: "open-sans-regular",
    marginTop: 2,
    marginLeft: 5,
    fontSize: 14,
  },
  titleText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginLeft: 5,
  },
  allCard: {
    elevation: 6,
    backgroundColor: "white",
    height: 270,
    width: '100%',
    borderRadius: 10,
    overflow: "hidden",
  },
  featureHeading: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "black",
    marginTop: 15,
    marginLeft: 10,
  },
});