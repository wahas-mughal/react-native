import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import { useSelector } from "react-redux";
import Card from "../shared/Card";

export default function AllDealers({ navigation }) {
  const allDealer = useSelector((state) => state.dealers.allDealers);

  let TouchableNativeOpacity = TouchableOpacity
  
  if(Platform.OS === 'android' && Platform.Version >= 21){
    TouchableNativeOpacity = TouchableNativeFeedback
  }

  return (
    <View style={styles.allFeaturedSection}>
      <Text style={styles.featureHeading}>All Dealers </Text>
      <FlatList
        data={allDealer}
        keyExtractor={(item) => item.dealerId}
        renderItem={(itemData) => (
          <TouchableNativeOpacity onPress = {() => navigation.navigate('Dealer Profile', {
            id: itemData.item.dealerId,
            title: itemData.item.title
          })}>
            <View style={{margin: 10, marginBottom: 20 }}>
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
