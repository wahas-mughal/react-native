import React, { useState, useEffect, useCallback, useReducer } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Platform,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import * as editActions from "../../store/actions/products";
import Input from "../../components/UI/Input";
import Colors from "../../constants/Colors";

const FORM_UPDATE = "FORM_UPDATE";

// Reducer logic for merged form and input states
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

const EditProductsScreen = (props) => {
  const [validTitle, setValidTitle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState();
  const productId = props.navigation.getParam("productId");
  const editProducts = useSelector((state) =>
    state.products.userProducts.find((product) => product.id === productId)
  );

  // const [title, setTitle] = useState(editProducts ? editProducts.title : "");
  // const [price, setPrice] = useState("");
  // const [imageURL, setImageURL] = useState(
  //   editProducts ? editProducts.imageURL : ""
  // );
  // const [description, setDescription] = useState(
  //   editProducts ? editProducts.description : ""
  // );

  const dispatch = useDispatch();

  // useReducer having the input states and a formReducer function
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editProducts ? editProducts.title : "",
      imageURL: editProducts ? editProducts.imageURL : "",
      price: "",
      description: editProducts ? editProducts.description : "",
    },
    inputValidities: {
      title: editProducts ? true : false,
      imageURL: editProducts ? true : false,
      description: editProducts ? true : false,
      price: editProducts ? true : false,
    },
    formIsValid: editProducts ? true : false,
  });

  useEffect(() => {
    if (errors) {
      Alert.alert("An error occured", errors, [{ text: "Okay" }]);
    }
  }, [errors])

  const onSumbitHandler = useCallback(async () => {
    if (!formState.formIsValid) {
      Alert.alert("Wrong Input", "Please fill the form correctly!", [
        { text: "Okay" },
      ]);
      return;
    }
    setErrors(null);
    setIsLoading(true);
    try {
      if (editProducts) {
        await dispatch(
          editActions.updateProduct(
            productId,
            formState.inputValues.title,
            formState.inputValues.imageURL,
            formState.inputValues.description
          )
        );
      } else {
        await dispatch(
          editActions.addProduct(
            formState.inputValues.title,
            formState.inputValues.imageURL,
            formState.inputValues.description,
            +formState.inputValues.price
          )
        );
      }
      props.navigation.goBack();
    } catch (error) {
      setErrors(error.message);
    }
    setIsLoading(false);
  }, [dispatch, productId, formState]);

 

  useEffect(() => {
    props.navigation.setParams({ submit: onSumbitHandler });
  }, [onSumbitHandler]);

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

  if (isLoading) {
    return (
      <View style = {styles.center} >
        <ActivityIndicator size = 'large' color = {Colors.primary} />
      </View>
    );
  }

  return (
    // <KeyboardAvoidingView
    // style={{ flex: 1 }}
    // behavior = "position"
    // keyboardVerticalOffset = {20}
    // >
    <ScrollView>
      <View style={styles.form}>
        <Input
          id="title"
          title="Title"
          errorText="Please enter a valid title!"
          keyboardType="default"
          autoCapitalize="sentences"
          autoCorrect
          returnKeyType="done"
          inputChangeHandler={textInputHandler}
          initialValue={editProducts ? editProducts.title : ""}
          initialValidation={!!editProducts}
          required
        />
        <Input
          id="imageURL"
          title="Image URL"
          errorText="Please enter a image URL!"
          keyboardType="default"
          returnKeyType="done"
          inputChangeHandler={textInputHandler}
          initialValue={editProducts ? editProducts.imageURL : ""}
          initialValidation={!!editProducts}
          required
        />
        {editProducts ? null : (
          <Input
            id="price"
            title="Price"
            errorText="Please enter a price!"
            keyboardType="decimal-pad"
            returnKeyType="done"
            inputChangeHandler={textInputHandler}
            required
            min={0.1}
          />
        )}
        <Input
          id="description"
          title="Description"
          errorText="Please enter a description!"
          keyboardType="default"
          autoCapitalize="sentences"
          autoCorrect
          multiline
          numberOfLines={3}
          inputChangeHandler={textInputHandler}
          initialValue={editProducts ? editProducts.description : ""}
          initialValidation={!!editProducts}
          required
          minLength={5}
        />
      </View>
    </ScrollView>
    // </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
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
  center:{
    flex:1 ,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

EditProductsScreen.navigationOptions = (navData) => {
  const productID = navData.navigation.getParam("productId");
  const sumbitHandler = navData.navigation.getParam("submit");

  return {
    headerTitle: productID ? "Edit Product" : "Add Product",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="title"
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          onPress={sumbitHandler}
        />
      </HeaderButtons>
    ),
  };
};

export default EditProductsScreen;
