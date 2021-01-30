import React, { useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../shared/CustomHeaderButton";
import * as actions from "../../store/actions/dealers";

const DealerProfile = (props) => {
  const dealerID = props.navigation.getParam("id");
  let counter = 0;
  const isFavMeal = useSelector((state) =>
    state.dealers.favDealers.some((dealers) => dealers.dealerId === dealerID)
  );
  const dealerData = useSelector((state) =>
    state.dealers.allDealers.filter((dealer) => dealer.dealerId === dealerID)
  );

  const dispatch = useDispatch();

  //delete the fav dealer
  const deleteFav = async () => {
    await dispatch(actions.delFav(dealerData.dealerId));
  };

  const toggleFavHandler = useCallback(async () => {
    counter++;
    if (counter === 1) {
      dispatch(actions.toggleFavorites(dealerID));
      await dispatch(actions.addFavoriteDealers(dealerData));
    } else {
      await dispatch(actions.delFav(dealerData.dealerId));
    }
  }, [dispatch, dealerID]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavHandler });
  }, [toggleFavHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFavourite: isFavMeal });
  }, [isFavMeal]);

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
  const title = navData.navigation.getParam("title");
  const toggleFavourite = navData.navigation.getParam("toggleFav");
  const isFav = navData.navigation.getParam("isFavourite");
  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item iconName={isFav ? "star" : "staro"} onPress={toggleFavourite} />
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
