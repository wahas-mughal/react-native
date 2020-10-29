import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView} from "react-native";
import Header from "./components/Header";
import StartGameStart from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setSelectedNumber] = useState();
  const [totalGuessedRounds, setTotalGuessedRounds] = useState(0); // initially 0 means the game is not started yet...

  //State for loading fonts
  const [dataload, setDataLoading] = useState(false);

  if (!dataload) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoading(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  //Restart the game

  const restartGameHandler = () => {
    setTotalGuessedRounds(0);
    setSelectedNumber(null);
  };

  //Start game handler
  const startGameHandler = (selectedNumber) => {
    setSelectedNumber(selectedNumber);
    setTotalGuessedRounds(0);
  };

  //Game over handler

  const GameOverHandler = (totalRounds) => {
    setTotalGuessedRounds(totalRounds);
  };

  let content = <StartGameStart onGameStart={startGameHandler} />;

  //The game is still running
  if (userNumber && totalGuessedRounds <= 0) {
    content = <GameScreen userChoice={userNumber} GameOver={GameOverHandler} />;
  } 
  
  else if (totalGuessedRounds > 0) {
    content = (
      <GameOverScreen
        totalGuesses={totalGuessedRounds}
        number={userNumber}
        onRestart={restartGameHandler}
      />
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
