export const FETCH_REVIEWS = "FETCH_REVIEWS";
export const ADD_INAPPREVIEWS = "ADD_INAPPREVIEWS";
export const SET_INAPPREVIEWS = "SET_INAPPREVIEWS";
import Reviews from "../../modal/reviews";
import InAppReviews from "../../modal/inappreviews";

// Google Reviews
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

//fetching In App Reviews from firebase

export const fetchInAppReviews = (restName) => {
  return async (dispatch) => {

    try {
      const response = await fetch(
        "https://restaurant-review-app-edad8-default-rtdb.firebaseio.com/InAppReviews.json"
      );

      //if the error status code is above 200 range then throw this new error
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const resData = await response.json();
      console.log(resData);

      let fetchUserReviews = [];
      for (const key in resData) {
        fetchUserReviews.push(
          new InAppReviews(
            resData[key].userID,
            resData[key].User,
            resData[key].Restaurant_Name,
            resData[key].User_Review,
            resData[key].User_Rating,
          )
        );
      }

    //   const getAllReviewsByName = fetchUserReviews.filter(
    //     (rest) => rest.restaurantName === restName
    //   );

    //   console.log(getAllReviewsByName);

      dispatch({
        type: SET_INAPPREVIEWS,
        userReviews: fetchUserReviews,
      });
    } catch (err) {
      throw err;
    }
  };
};

//Add In App Reviews
//adding data to firebase
export const addReview = (user, name, review, rating) => {
  return async (dispatch, getState) => {
    try {
      const authToken = getState().auth.token;
      const userId = getState().auth.uId;
      console.log(authToken);
      console.log(userId);
      // map the products to the logged in token: logged in user and insert in firebase along the pushtoken
      const response = await fetch(
        `https://restaurant-review-app-edad8-default-rtdb.firebaseio.com/InAppReviews.json?auth=${authToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID: userId,
            User: user,
            Restaurant_Name: name,
            User_Review: review,
            User_Rating: rating,
          }),
        }
      );

      const resData = await response.json();
      console.log(resData);

      // add the product in the redux store
      dispatch({
        type: ADD_INAPPREVIEWS,
        reviewData: {
          userID: userId,
          user,
          name,
          review,
          rating,
        },
      });
    } catch (err) {
      throw err;
    }
  };
};
