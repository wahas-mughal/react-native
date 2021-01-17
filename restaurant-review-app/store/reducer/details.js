import { SET_PLACE_DETAILS } from "../action/details";

const initialState = {
  placeDetails: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACE_DETAILS:
      return {
        ...state,
        placeDetails: action.details,
      };
  }
  return state;
};
