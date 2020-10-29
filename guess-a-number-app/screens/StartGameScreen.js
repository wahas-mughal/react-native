import React, { useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Card from "../components/Card";
import Color from "../constants/Color";
import Input from "../components/Input";
import ChoosenNumber from "../components/ChoosenNumber";
import BodyText from "../components/BodyText";
import MyButton from "../components/MyButton";

const StartGameStart = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [btnWidth, setBtnWidth] = useState(Dimensions.get('window').width / 4);

  //Method including regex for validation any non-numeric value will replaced with a string
  const inputValueHandler = (value) => {
    setEnteredValue(value.replace(/[^0-9]/g, ""));
  };

  //dismiss the keyboard when the user presses anywhere on the screen
  const keyboardDismiss = () => {
    Keyboard.dismiss();
  };

  //reset the input
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirm(false);
  };

  // set the dimensions again on orientation
  useEffect(() => {

      // update the state so that the orientation sets again
      const btnUpdate = () => {
          setBtnWidth(Dimensions.get('window').width / 4);
      }

      // on orientation change point btnUpdate to reset orientation
      Dimensions.addEventListener('change', btnUpdate);

      //This function first remove the previous listener and add the new one. 
      return () => {
          Dimensions.removeEventListener('change', btnUpdate);
      }
  });

  //confirm the input and set the selected number
  const confirmInputHandler = () => {
    const choosenNum = parseInt(enteredValue);
    if (isNaN(choosenNum) || choosenNum <= 0 || choosenNum > 99) {
      Alert.alert("Invalid type", "Only numbers are allowed from 0 to 99", [
        { text: "Okay", style: "cancel", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirm(true);
    setSelectedNumber(choosenNum);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  // show the selected number
  let confirmOutput;

  if (confirm) {
    confirmOutput = (
      <Card style={styles.numberContainer}>
        <Text> You have choosen </Text>
        <ChoosenNumber>{selectedNumber}</ChoosenNumber>
        <MyButton onPress={() => props.onGameStart(selectedNumber)}>
          {" "}
          START GAME{" "}
        </MyButton>
      </Card>
    );
  }


  return (
    <ScrollView>
      <KeyboardAvoidingView keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={keyboardDismiss}>
          <View style={styles.screen}>
            <BodyText style={styles.title}> Start the game! </BodyText>
            <Card style={styles.inputContainer}>
              <BodyText> Select a number </BodyText>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={2}
                onChangeText={inputValueHandler}
                value={enteredValue}
              />
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button
                    title="Reset"
                    color={Color.accent}
                    onPress={resetInputHandler}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    title="Confirm"
                    color={Color.primary}
                    onPress={confirmInputHandler}
                  />
                </View>
              </View>
            </Card>
            {confirmOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: "80%", // default width is 80%
    maxWidth: "95%", //the max width will be 95% if the screen is smaller than 300
    minWidth: 300, // the width will be 300 on smaller device
    alignItems: "center",
    // width: 300, //default width is 300
    // maxWidth: '80%', // On smaller device, the width will be 80% of the available space
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    // width: 90,
    width: Dimensions.get("window").width / 4,
  },
  input: {
    width: 40,
    textAlign: "center",
  },
  numberContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameStart;
