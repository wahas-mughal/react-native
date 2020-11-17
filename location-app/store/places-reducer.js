import { ADD_PLACES, SET_PLACES } from "./places-actions";
import Place from "../models/place";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACES:
      const newPlace = new Place(
        action.placesData.id.toString(),
        action.placesData.title,
        action.placesData.image,
        action.placesData.address,
        action.placesData.coords.lat,
        action.placesData.coords.lng
      );
      return {
        places: state.places.concat(newPlace),
      };
    case SET_PLACES:
      return {
        places: action.places.map(
          (place) => new Place(place.id.toString(), place.title, place.imageUri, place.address, place.lat, place.lng)
        ),
      };
  }

  return state;
};
