import React, {useCallback, useEffect, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ActivityIndicator
} from "react-native";
import { useSelector } from "react-redux";
import Card from "../shared/Card";
// import * as dealerActions from "../store/actions/dealers";
// import { useDispatch } from "react-redux";


export default function FeaturedDealers({ navigation }) {
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
    <View style={styles.featuredSection}>
      <Text style={styles.featureHeading}> Featured Dealers </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={allDealer}
        keyExtractor={(item) => item.dealerId}
        renderItem={(itemData) => (

          <TouchableNativeOpacity
            onPress={() =>
              navigation.navigate("Dealer Profile", {
                id: itemData.item.dealerId,
                title: itemData.item.title
              })
            }
          >
            <View style={styles.cardView}>
              <Card style={styles.card}>
                <Image
                  style={styles.featuredImage}
                  source={{ uri: itemData.item.coverImage }}
                />
                <View style={{ margin: 3 }}>
                  <Text style={styles.titleText}> {itemData.item.title} </Text>
                  <Text style={styles.ratingText}>
                    {" "}
                    Rating {itemData.item.rating}{" "}
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
  featureHeading: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "black",
    marginTop: 8,
    marginLeft: 10,
  },
  featuredSection: {
    marginTop: 10,
    width: "100%",
  },
  card: {
    elevation: 6,
    backgroundColor: "white",
    height: 230,
    width: 250,
    overflow: 'hidden',
    borderRadius: 10
  },
  featuredImage: {
    width: 250,
    height: 175,
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

  cardView: {
    // paddingHorizontal: 5,
    marginLeft: 17,
    marginRight: 10,
    marginVertical: 15,
    borderRadius: 10,
  },
});
