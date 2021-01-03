export const FETCH_REVIEWS = "FETCH_REVIEWS";
import Reviews from "../../modal/reviews";

export const fetchReview = (payload) => {
  return async (dispatch) => {
    const result = payload.result.reviews.map(
      ({
        author_name,
        profile_photo_url,
        text,
        rating,
        relative_time_description,
      }) => ({
        Name: author_name,
        ProfilePhoto: profile_photo_url,
        Review: text,
        Rating: rating,
        ReviewedAgo: relative_time_description,
      })
    );

    console.log("RESULT OF REVIEWS ", result);

    // let convertObjectIntoArray = Object.values(result);
    // console.log("CONVERTED ARRAY " +convertObjectIntoArray);

    let reviewsArray = [];

    result.map((reviews) => {
      reviewsArray.push(
        new Reviews(
          reviews.Name,
          reviews.ProfilePhoto,
          reviews.Review,
          reviews.Rating,
          reviews.ReviewedAgo
        )
      );
    });

    dispatch({
      type: FETCH_REVIEWS,
      reviews: reviewsArray,
    });
  };
};
