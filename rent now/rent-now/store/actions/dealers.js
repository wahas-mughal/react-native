import { Body } from "native-base";
import Dealer from "../../model/dealers";
export const FETCH_DEALERS = "FETCH_DEALERS";
export const TOGGLE_FAV = "TOGGLE_FAV";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const DEL_FAVOURITES = "DEL_FAVOURITES";

export const fetchDealers = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://rent-a-car-app-211bf.firebaseio.com/dealers.json`
      );
      const resData = await response.json();
      // console.log(resData);

      let fetchDealersData = [];

      for (const key in resData) {
        fetchDealersData.push(
          new Dealer(
            key,
            resData[key].dealerId,
            resData[key].title,
            resData[key].rating,
            resData[key].coverImage,
            resData[key].description,
            resData[key].address
          )
        );
      }

      dispatch({
        type: FETCH_DEALERS,
        dealers: fetchDealersData,
      });
    } catch (err) {
      throw err;
    }
  };
};

export const toggleFavorites = (id) => {
  return {
    type: TOGGLE_FAV,
    payload: id,
  };
};

export const addFavoriteDealers = (payload) => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.userId;
      console.log("DEALER", payload[0].address);

      const res = await fetch(
        `https://rent-a-car-app-211bf.firebaseio.com/user/favorite-dealers/${payload[0].dealerId}.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            address: payload[0].address,
            coverImage: payload[0].coverImage,
            dealerId: payload[0].dealerId,
            description: payload[0].description,
            rating: payload[0].rating,
            title: payload[0].title,
            uid: uid,
          }),
        }
      );
      const resData = await res.json();
      console.log(resData);
    } catch (err) {
      throw err;
    }
  };
};

export const delFav = (dealerId) => {
  return async () => {
    const res = await fetch(`https://rent-a-car-app-211bf.firebaseio.com/user/favorite-dealers/${dealerId}.json`, {
      method: 'DELETE'
    });
    const resData = await res.json();
    console.log(resData);
  }
}