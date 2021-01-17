import {
  ADD_INAPPREVIEWS,
  FETCH_REVIEWS,
  SET_INAPPREVIEWS,
} from "../action/reviews";
import InAppReviews from "../../modal/inappreviews";

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
    case ADD_INAPPREVIEWS:
      //passed a new review: save details in the redux store from the action creator
      const newReview = new InAppReviews(
        action.reviewData.userID,
        action.reviewData.user,
        action.reviewData.name,
        action.reviewData.review,
        action.reviewData.rating
      );
      return {
        //concatinate the newReview with inAppReviews
        ...state,
        inAppReviews: [newReview].concat(state.inAppReviews),
      };
  }

  return state;
};
