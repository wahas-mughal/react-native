import { ADD_ORDERS, SET_ORDERS } from "../actions/order";
import Orders from "../../model/order";

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    //fetch the orders and update the state: orders array
    case SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };

    // add the order in the redux store
    case ADD_ORDERS:
      const newOrder = new Orders(
        action.orderDetails.id,
        action.orderDetails.cartItems,
        action.orderDetails.total,
        action.orderDetails.date
      );
      //concatinate the orders array with the new order
      return {
        ...state,
        orders: state.orders.concat(newOrder),
      };
  }
  return state;
};
