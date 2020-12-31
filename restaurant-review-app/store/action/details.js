export const SET_PLACE_DETAILS = "SET_PLACE_DETAILS";
import Details from '../../modal/restaurantdetails';

export const setPlaceDetails = (payload) => {
  
    const detailsArray = [];

    for(const results in payload){
        detailsArray.push(
            new Details(
                payload[results].place_id,
                payload[results].name,
                payload[results].rating
            )
        )
    }
  
  
    return {
    type: SET_PLACE_DETAILS,
    details: detailsArray
  };
};
