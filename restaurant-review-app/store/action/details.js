export const SET_PLACE_DETAILS = "SET_PLACE_DETAILS";
import Details from "../../modal/restaurantdetails";

export const setPlaceDetails = (payload) => {
  return async (dispatch) => {
    const result = payload.results.map(({ place_id, name, photos , rating, user_ratings_total }) => ({
      placeID: place_id,
      Name: name,
      PhotoRef: photos,
      Rating: rating,
      TotalRatings: user_ratings_total
    }));
    console.log(result);

    let convertObjIntoArray = Object.values(result);
    console.log("CONVERTED ARRAY " +convertObjIntoArray);

    let detailsArray = [];

    convertObjIntoArray.map((details) => {
      detailsArray.push(new Details(
        details.placeID,
        details.Name,
        details.PhotoRef,
        details.Rating,
        details.TotalRatings
      ));
    });

    dispatch({
      type: SET_PLACE_DETAILS,
      details: detailsArray,
    });
  };
};
