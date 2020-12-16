import React, {useState} from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import Card from "../components/Card";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Fontisto } from "@expo/vector-icons";
import ReactNativeAnimatedSearchbox from "react-native-animated-searchbox";

const Search = () => {

const [iconColor, setIconColor] = useState('orange');

// const openSearchBox = () => this.refSearchBox.open();
// const closeSearchBox = () => this.refSearchBox.close();

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/Images/dash-bgImage.jpg")}
    >
      <View style={{ margin: 30 }}>
        {/* <TouchableOpacity onPress={() => {}}>
        <View>
          <Card style={styles.card}>
            <View style = {styles.searchView}>
            <Fontisto name="search" size={28} color="black" />
            <Text style={styles.searchText}> Search </Text>
            </View>
          </Card>
        </View>
      </TouchableOpacity> */}

        <ReactNativeAnimatedSearchbox
          ref={(ref) => (this.refSearchBox = ref)}
          placeholder={"Search..."}
          searchIconSize = {30}
          searchIconColor={iconColor}
          onClosed={() => {
           setIconColor("#fff");
          }}
          onOpening={() => {
            setIconColor("orange");
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchText: {
    fontSize: RFPercentage(2.5),
    marginLeft: 10,
  },
  card: {
    width: "100%",
    height: Dimensions.get("window").width / 7,
  },
  searchView: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Search;
