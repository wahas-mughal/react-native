import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import Colors from "../constants/Color";
import { useDispatch } from "react-redux";
import * as placesActions from "../store/places-actions";
import ImgPicker from "../components/ImagePicker";
import LocationPicker from "../components/LocationPicker";

const NewPlaceScreen = (props) => {
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [currentPickedLoc, setCurrentPickedLoc] = useState();

  const textInputHandler = (text) => {
    setTitle(text);
  };

  const dispatch = useDispatch();

  const saveButtonHandler = () => {
    dispatch(placesActions.addPlaces(title, selectedImage, currentPickedLoc));
    props.navigation.goBack();
  };

  const selectedImageHandler = (imageTaken) => {
    setSelectedImage(imageTaken);
  };


  //get the location either from get user location or pick location from map and store in the internal state
  const currentLocHandler = useCallback((location) => {
    setCurrentPickedLoc(location);
    console.log(location);
  });

  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <Text style={styles.label}> Title </Text>
        <TextInput
          style={styles.input}
          onChangeText={textInputHandler}
          value={title}
        />
        <ImgPicker imageTaken={selectedImageHandler} />
        <LocationPicker
          navigation={props.navigation}
          onLocation={currentLocHandler}
        />

        <Button
          title="Save Place"
          onPress={saveButtonHandler}
          color={Colors.primary}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

NewPlaceScreen.navigationOptions = {
  headerTitle: "Add a New Place",
};

export default NewPlaceScreen;
