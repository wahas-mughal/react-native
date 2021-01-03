import { FETCH_REVIEWS } from "../action/reviews";

const initialState = {
  placeReviews: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS:
      return {
          ...state,
          placeReviews: action.reviews
      };
  }
  return state;
};
