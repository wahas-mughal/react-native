import {
  FETCH_REVIEWS,
  SET_INAPPREVIEWS,
} from "../action/reviews";

const initialState = {
  placeReviews: [],
  inAppReviews: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_INAPPREVIEWS:
      return {
        ...state,
        inAppReviews: action.userReviews,
      };

    case FETCH_REVIEWS:
      return {
        ...state,
        placeReviews: action.reviews,
      };
  }

  return state;
};
