export const FETCH_REVIEWS = "FETCH_REVIEWS";
export const ADD_INAPPREVIEWS = 'ADD_INAPPREVIEWS';
import Reviews from "../../modal/reviews";

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

//Add In App Reviews

//adding data to firebase
export const addReview = (user, name, review, rating) => {
    return async (dispatch, getState) => {
      try {
        const token = getState().auth.token;
        const userId = getState().auth.uId;
  
        // map the products to the logged in token: logged in user and insert in firebase along the pushtoken
        const response = await fetch(
          `https://restaurant-review-app-edad8-default-rtdb.firebaseio.com/InAppReviews.json?auth=${token}`,
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
            rating
          },
        });
      } catch (err) {
        throw err;
      }
    };
  };
  
