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
  // const [isLoading, setIsLoading] = useState(false);
  // const dispatch = useDispatch();

  // const fetchAllDealers = useCallback(async () => {
  //   setIsLoading(true);
  //   await dispatch(dealerActions.fetchDealers());
  //   setIsLoading(false);
  // }, [dispatch, setIsLoading]);

  // useEffect(() => {
  //   const willFocus = navigation.addListener("WillFocus", fetchAllDealers);
  //   return () => {
  //     willFocus.remove();
  //   };
  // }, [fetchAllDealers]);

  // useEffect(() => {
  //   fetchAllDealers();
  // }, []);

  let TouchableNativeOpacity = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  // if (isLoading) {
  //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //     <ActivityIndicator size={28} color="#03c4ff" />
  //   </View>;
  // }

  return (
    <View style={styles.allFeaturedSection}>
      <Text style={styles.featureHeading}>All Dealers </Text>
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
            </View>
          </TouchableNativeOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  allFeaturedSection: {
    marginHorizontal: 20,
    marginVertical: 15,
    // width: "100%",
  },

  allFeaturedImage: {
    width: "100%",
    height: 185,
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
    height: 250,
    width: 300,
    // marginBottom: 13,
    borderRadius: 10,
    overflow: "hidden",
  },
  featureHeading: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "black",
    marginVertical: 10,
    marginLeft: 10,
  },
});
