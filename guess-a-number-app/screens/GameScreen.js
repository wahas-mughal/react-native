import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import Card from "../components/Card";
import ChoosenNumber from "../components/ChoosenNumber";
import MyButton from "../components/MyButton";
import { Ionicons } from "@expo/vector-icons";
// import * as ScreenOrientation from 'expo-screen-orientation';

//generate random number
const genRandomNumber = (min, max, excluded) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min); //3.5 * (100 - 1) + 1
  if (randomNumber === excluded) {
    return genRandomNumber(min, max, excluded);
  } else {
    return randomNumber;
  }
};

const ListItem = (listLength, itemData) => {
  return (
    <View style={styles.listItem}>
      <Text> #{listLength - itemData.index} </Text>
      <Text> {itemData.item} </Text>
    </View>
  );
};

const GameScreen = (props) => {
  // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

  const initialGuess = genRandomNumber(1, 100, props.userChoice);
  // current guess state (Computer's guess)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [previousGuess, setPreviousGuess] = useState([initialGuess.toString()]);
  const [detectedWidth, setDetectedWidth] = useState(
    Dimensions.get("window").width
  );
  const [detectedHeight, setDetectedHeight] = useState(
    Dimensions.get("window").height
  );
  // console.log('Previous Guess length ' +previousGuess.length);
  //upper bound and lower bound
  const currentHigh = useRef(100);
  const currentLow = useRef(1);

  // const [rounds, setRounds] = useState(0);

  //object destructuring
  const { userChoice, GameOver } = props;

  //  change layout on the basis of height and width
  useEffect(() => {
    const updateLayout = () => {
      setDetectedWidth(Dimensions.get("window").width);
      setDetectedHeight(Dimensions.get("window").height);
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  //useEffect to check the right guess after each render cycle
  useEffect(() => {
    if (currentGuess == props.userChoice) {
      GameOver(previousGuess.length);
    }
  }, [currentGuess, userChoice, GameOver]); // second argumentS: dependencies which determines the re-rendering if something is changed

  //generate next guess number
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    //if the number is lower then that number is the upper bond and there is no number above it. Therefore it be currentHigh
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    }
    //if the number is greater then that number is the lower bond and there is no number below it. Therefore it be currentLow
    else {
      currentLow.current = currentGuess + 1;
    }
    //generate next number by passing currentHigh. currentLow and currentGuess so that the current guess don't repeat
    const nextNum = genRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    //set the next number as the current guess in a guess state
    setCurrentGuess(nextNum);
    // Increment the number of rounds by 1
    // setRounds(currounds => currounds + 1);
    setPreviousGuess((prevGuess) => [nextNum.toString(), ...prevGuess]);
  };

  // we can also use dimensions API like this
  // style={Dimensions.get('window').height > 600 ? styles.btnContainer : styles.smallerBtnContainer}

  //we can create different style objects for the view

  let listContainerStyle = styles.listContainer;

  if (detectedWidth < 350) {
    listContainerStyle = styles.bigListContainer;
  }

  let dynamicContent = (
    <React.Fragment>
        <ChoosenNumber>{currentGuess}</ChoosenNumber>
        <Card
          style={styles.btnContainer}
          marginTop={detectedHeight > 600 ? 30 : 5}
        >
          <MyButton onPress={nextGuessHandler.bind(this, "lower")}>
            {" "}
            <Ionicons name="md-remove" size={24} />{" "}
          </MyButton>
          <MyButton onPress={nextGuessHandler.bind(this, "greater")}>
            {" "}
            <Ionicons name="md-add" size={24} />{" "}
          </MyButton>
        </Card>
    </React.Fragment>
  );

  // dynamic JSX code with the height
  if (detectedHeight < 500) {
    dynamicContent = (
        <View style={styles.controls}>
          <MyButton onPress={nextGuessHandler.bind(this, "lower")}>
            {" "}
            <Ionicons name="md-remove" size={24} />{" "}
          </MyButton>
          <ChoosenNumber>{currentGuess}</ChoosenNumber>
          <MyButton onPress={nextGuessHandler.bind(this, "greater")}>
            {" "}
            <Ionicons name="md-add" size={24} />{" "}
          </MyButton>
        </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text> Computer's Guess </Text>
      {dynamicContent}
      {/* <View style={listContainerStyle}> */}
      {/* <ScrollView 
            showsVerticalScrollIndicator = {false}
            contentContainerStyle = {styles.list}>
                {previousGuess.map((guess, index) => {
                    return(
                        ListItem(guess, previousGuess.length - index))}
                    )
                }
            </ScrollView> */}
      <View style={listContainerStyle}>
        <FlatList
          keyExtractor={(item) => item}
          data={previousGuess}
          renderItem={ListItem.bind(this, previousGuess.length)}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // marginTop: Dimensions.get("window").height > 600 ? 30 : 5, // if the screen height is > 600 then set marginTop to 30 on bigger device and 5 on smaller device
    width: 400,
    maxWidth: "100%",
  },
  listContainer: {
    flex: 1,
    width: "60%",
  },
  bigListContainer: {
    flex: 1,
    width: "80%",
  },
  list: {
    flexGrow: 1,
    // alignItems: 'center',
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 15,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
});

export default GameScreen;
