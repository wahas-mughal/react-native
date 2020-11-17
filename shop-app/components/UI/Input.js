import React, { useReducer, useEffect } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const INPUT_IDENTIFIER = "INPUT_IDENTIFIER";
const BLUR_THE_INPUT = "BLUR_THE_INPUT";

// reducer where all the form logic lies
const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_IDENTIFIER:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case BLUR_THE_INPUT:
      return {
        ...state,
        touched: true,
      };
  }
  return state;
};


// useReducer having the input states and a formReducer function
const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : "",
    isValid: true,
    touched: false,
  });

  const { inputChangeHandler, id } = props;

  useEffect(() => {
    if (inputState.touched) {
      inputChangeHandler(id, inputState.value, inputState.isValid);
    }
  }, [inputChangeHandler, inputState, id]);


  //action creator
  const blurInputHandler = () => {
    dispatch({ type: BLUR_THE_INPUT });
  };

  //action creator
  const TextInputHandler = (text) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }

    dispatch({ type: INPUT_IDENTIFIER, value: text, isValid: isValid });
  };

  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.title}</Text>
      <TextInput
        {...props}
        style={styles.input}
        value={inputState.value}
        onChangeText={TextInputHandler}
        onBlur={blurInputHandler}
      />
      {!inputState.isValid && inputState.touched && (
        <View style = {styles.errorContainer}>
          <Text style = {styles.error}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
  },
  label: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  errorContainer:{
    marginVertical: 10
  },
  error: {
    color: 'red',
    fontFamily: 'open-sans-regular',
    fontSize: 13
  }
});

export default Input;
