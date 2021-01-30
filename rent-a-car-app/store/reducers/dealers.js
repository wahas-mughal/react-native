import { ALL_DEALERS } from "../../data/dummy-data";
import { FETCH_DEALER, TOGGLE_FAV } from "../actions/dealers";

const initialState = {
  allDealers: ALL_DEALERS,
  favDealers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const existingMealIndex = state.favDealers.findIndex(
        (dealers) => dealers.dealerId === action.payload
      );
      //unfavorite logic
      if (existingMealIndex >= 0) {
        const updatedFavMeals = [state.favDealers];
        updatedFavMeals.splice(existingMealIndex, 1);
        return { ...state, favDealers: updatedFavMeals };
      } else {
        //fav logic
        const favDealer = state.allDealers.find(
          (dealer) => dealer.dealerId === action.payload
        );
        return { ...state, favDealers: state.favDealers.concat(favDealer)};
      }

    //     case FETCH_DEALERS: {
    //         return {
    //             ...state,
    //             allDealers: action.dealers
    //         }
    //     }
  }

  return state;
};
