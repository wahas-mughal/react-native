import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {Button, Text} from 'native-base';

const Search = (props) => {

  const {width} = Dimensions.get('window');
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/Images/bgImage.jpg")}
    >
      <View style = {styles.textView}>
      <Text style = {styles.text}>
        Reach out to people, who have an amazing sense of taking photos, also
        meet professional photographers showcasing their talent in a single
        frame...
      </Text>
      </View>
      <View style = {{width: width/2}}>
      <Button block onPress = {() => props.navigation.navigate('searchScreen')} style = {{backgroundColor: 'orange' }}>
        <Text style = {{fontSize: RFPercentage(2.7), fontWeight: '700'}}> FIND </Text>
      </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center', alignItems: 'center'

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
  text:{
    fontSize: RFPercentage(3),
    color: '#fff',
    fontWeight: '700'
  },
  textView:{
    margin: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 10
  }
});

export default Search;
