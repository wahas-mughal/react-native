export const ADD_PLACES = "ADD_PLACES";
export const SET_PLACES = "SET_PLACES";
import * as FileSystem from "expo-file-system";
import { insertPlaces, fetchPlaces } from "../helper/db";
import ENV from "../env";

export const addPlaces = (title, image, location) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${ENV.googleMapApiKey}`
    );

    // if (response.ok) {
    //   throw new Error("Something went wrong!");
    // }

    const resData = await response.json();
    console.log(resData);

    if (!resData.results) {
      throw new Error("Something went wrong!");
    }

    //It will get the translated human readable address from Google geocoding API
    const address = resData.results[0].formatted_address;

    //split the image path like path/image.png into ["path", "image.png"] and then pop means pop the last segment i.e. image.png
    const fileName = image.split("/").pop();
    const newFilePath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newFilePath,
      });

      const dbResult = await insertPlaces(
        title,
        newFilePath,
        address,
        location.lat,
        location.lng
      );
      console.log(dbResult);

      dispatch({
        type: ADD_PLACES,
        placesData: {
          id: dbResult.insertId,
          title: title,
          image: newFilePath,
          address: address,
          coords: {
            lat: location.lat,
            lng: location.lng,
          },
        },
      });
    } catch (errors) {
      throw errors;
    }
  };
};

export const setPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces();
      dispatch({ type: SET_PLACES, places: dbResult.rows._array });
      console.log(dbResult);
    } catch (err) {
      throw err;
    }
  };
};
