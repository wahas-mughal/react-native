import{ALL_DEALERS}from '../../data/dummy-data';

const initialState = {
    allDealers: ALL_DEALERS,
    featuredDealers: ALL_DEALERS.filter(dealers => dealers.rating > 4.3),
    favDealers: ALL_DEALERS.filter(dealers => dealers.rating > 4.0)
}

export default (state = initialState, action) => {
    return state;
}