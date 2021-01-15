export const SET_PLACE_DETAILS = "SET_PLACE_DETAILS";
import Details from "../../modal/restaurantdetails";

export const setPlaceDetails = (payload) => {
  return async (dispatch) => {
    const result = payload.results.map(
      ({ place_id, name, photos, rating, user_ratings_total }) => ({
        placeID: place_id,
        Name: name,
        PhotoRef: photos ? photos[0].photo_reference : "",
        Rating: rating,
        TotalRatings: user_ratings_total,
      })
    );

    console.log(result);

    let convertObjIntoArray = Object.values(result);
    console.log("CONVERTED ARRAY ",  convertObjIntoArray);

    let detailsArray = [];

    // convertObjIntoArray.map((details) => {
    //   detailsArray.push(
    //     new Details(
    //       details.placeID,
    //       details.Name,
    //       details.PhotoRef,
    //       details.Rating,
    //       details.TotalRatings
    //     )
    //   );
    // });

    const GoogleAPI = "AIzaSyBOMyWUiUrclTaK3tybe7gYEOsa8d-KVU8";

    await Promise.all(
      convertObjIntoArray.map(async (details, i) => {
        const photoRef = details.PhotoRef;
        let path = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${GoogleAPI}`;
        let res = await fetch(`${path}`);

        const photoUrl = res.url;

        detailsArray.push(
          new Details(
            details.placeID,
            details.Name,
            photoUrl,
            details.Rating,
            details.TotalRatings
          )
        );
      })
    );

    dispatch({
      type: SET_PLACE_DETAILS,
      details: detailsArray,
    });
  };
};
