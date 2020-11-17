import React, { useState, useReducer, useCallback, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  KeyboardAvoidingView,
  Button,
  ScrollView,
  ActivityIndicator,
  Alert
} from "react-native";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";
import Colors from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import * as authActions from "../../store/actions/auth";

// reducer where all the form logic lies
const FORM_UPDATE = "FORM_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_UPDATE) {
    const updatedInputValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };

    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      ...state,
      inputValues: updatedInputValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    };
  }
  return state;
};


const AuthScreen = (props) => {
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // useReducer having the input states and a formReducer function
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  //input text handler
  const textInputHandler = useCallback(
    (dynamicInput, inputText, inputValidity) => {
      dispatchFormState({
        type: FORM_UPDATE,
        value: inputText,
        isValid: inputValidity,
        input: dynamicInput,
      });
    },
    [dispatchFormState]
  );

  useEffect(() => {
    if(error){
      Alert.alert('An error occured', error, [{text: 'Okay'}]);
    }
  },[error]);

  const authHandler = async () => {
    let action;
    if (isSignUp) {
      action = authActions.signUp(
        formState.inputValues.email,
        formState.inputValues.password
      );
    } else {
      action = authActions.login(
        formState.inputValues.email,
        formState.inputValues.password
      );
    }
    setError(null);
    setIsLoading(true);
    try{
      await dispatch(action);
      props.navigation.navigate('ShopNav');
    }
    catch(error) { 
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <View
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.container}
    >
      <LinearGradient colors={["#fff", "#fff"]} style={styles.gradient}>
        <Card style={styles.cardView}>
          <ScrollView>
            <Input
              id="email"
              title="Email"
              keyBoardType="email-password"
              required
              email
              autoCapitalize="none"
              errorText="Please enter a valid email address!"
              inputChangeHandler={textInputHandler}
              initialValue=""
            />
            <Input
              id="password"
              title="Password"
              secureTextEntry
              keyBoardType="default"
              minLength={5}
              required
              autoCapitalize="none"
              errorText="Please enter a valid password!"
              inputChangeHandler={textInputHandler}
              initialValue=""
            />
            <View style={styles.buttonsView}>
              {isLoading ? <ActivityIndicator size = 'large' color = {Colors.primary} /> : <Button
                title={isSignUp ? "Sign Up" : "Login"}
                color={Colors.primary}
                onPress={authHandler}
              /> } 
              <Button
                title={`Switch to ${isSignUp ? "Login" : "Sign Up"}`}
                color={Colors.primary}
                onPress={() => {
                  setIsSignUp((prev) => !prev);
                }}
              />
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
    </View>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "Authentication",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardView: {
    width: "80%",
    maxWidth: 400,
    padding: 20,
  },
  buttonsView: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AuthScreen;
