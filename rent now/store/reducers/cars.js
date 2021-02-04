import { CARS } from "../../data/dummy-data";
import { FETCH_CARS } from "../actions/cars";

const initialState = {
  allCars: CARS,
};

export default (state = initialState, action) => {
  // switch (action.type) {
  //   case FETCH_CARS: {
  //       return {
  //           ...state,
  //           allCars: action.cars
  //       }
  //   }
  // }
  return state;
};
