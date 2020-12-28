import{ALL_DEALERS}from '../../data/dummy-data';
import { FETCH_DEALERS } from '../actions/dealers';

const initialState = {
    allDealers: ALL_DEALERS,
    featuredDealers: ALL_DEALERS.filter(dealers => dealers.rating > 4.3),
    favDealers: ALL_DEALERS.filter(dealers => dealers.rating > 4.0)
}

export default (state = initialState, action) => {
    // switch (action.type) {
    //     case FETCH_DEALERS: {
    //         return {
    //             ...state,
    //             allDealers: action.dealers
    //         }
    //     }
    //   }
      return state;
}