import React from "react";
import { Text, View, StyleSheet, Button, Image, Dimensions, ScrollView} from "react-native";
import GlobalStyles from "../constants/Global-styles";
import BodyText from "../components/BodyText";
import Color from '../constants/Color';
import MyButton from '../components/MyButton';

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
      <Text style={GlobalStyles.gameOver}> Game Over! </Text>
      <View style={styles.imageContainer}>
        {/* <Image source={require("../assets/success.png")} style={styles.image} resizeMode = 'cover' /> */}
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/0/05/Rotb%C3%BChelspitze_summit_view_Silvretta.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
          fadeDuration={500} // you can set the fade duration first the image loads
        />
      </View>
      <View style = {styles.textContainer}>
        <BodyText style = {styles.text}>
          The computer took <Text style = {styles.highlight}>{props.totalGuesses}</Text> rounds to guess your choosen 
          number <Text style = {styles.highlight}>{props.number}</Text>
        </BodyText>
      </View>
      <MyButton onPress={props.onRestart}> NEW GAME </MyButton>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.8, // 80% of the screen size
    height: Dimensions.get('window').width * 0.8, // same height as width
    borderRadius: Dimensions.get('window').width * 0.8 / 2, // divide by 2 for perfect borderRadius
    borderWidth: 2,
    borderColor: "black",
    marginVertical: Dimensions.get('window').height / 30, // height / 20 will set it to 5% of the device height
    overflow: "hidden",
  },
  highlight: {
    color: Color.primary,
    fontFamily: 'open-sans-bold'
  },
  textContainer:{
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 50, // height / 40 will set it to 2.5% of the device height
  },
  text:{
    fontSize: Dimensions.get('window').height < 400 ? 16 : 18,
    textAlign: 'center'
  }
});

export default GameOverScreen;
