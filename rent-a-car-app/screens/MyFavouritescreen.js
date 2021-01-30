import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";
import Card from "../shared/Card";
export default function Myfavourites({ navigation }) {
  const favDealers = useSelector((state) => state.dealers.favDealers);
  console.log("FAV DEALERS ",favDealers);
  let TouchableNativeOpacity = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableNativeOpacity = TouchableNativeFeedback;
  }

  if(favDealers.length === 0) {
    return(
      <View style = {{flex:1, justifyContent: 'center', alignItems:'center', backgroundColor:"#fff"}}>
        <Card style = {{paddingVertical: 100, paddingHorizontal: 10}}>
        <Text style = {{fontSize: 19, fontWeight: 'bold'}}> No Favorites yet, please add some. </Text>
        </Card>
      </View>
    )
  }

  return (
    <View style = {{backgroundColor: '#fff', flex:1, paddingHorizontal: 15}}>
        <FlatList
          data={favDealers}
          style = {{paddingVertical:15}}
          keyExtractor={(item) => item.dealerId}
          showsVerticalScrollIndicator = {false}
          renderItem={(itemData) => (
            <TouchableNativeOpacity
              onPress={() => navigation.navigate("Dealer Profile")}
            >
              <View style = {{padding:5}}>
                <Card style={styles.allCard}>
                  <Image
                    style={styles.allFeaturedImage}
                    source={{ uri: itemData.item.coverImage }}
                  />
                  <View style={{ margin: 7 }}>
                    <Text style={styles.titleText}>
                      {" "}
                      {itemData.item.title}{" "}
                    </Text>
                    <Text style={styles.ratingText}>
                      Rating {itemData.item.rating}
                    </Text>
                  </View>
                </Card>
                <Text style = {{borderBottomColor: '#ccc', borderBottomWidth: 0.7, marginBottom:5}}/>
              </View>
            </TouchableNativeOpacity>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({

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
    width: '100%',
    borderRadius: 10,
    overflow: "hidden",
  },
  featureHeading: {
    fontWeight: "bold",
    color: 'black',
    fontSize: 22
  },
  textView: {
    marginVertical: 15
  },
});
