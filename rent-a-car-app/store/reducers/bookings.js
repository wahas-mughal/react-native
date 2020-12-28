import Booking from "../../model/bookings";
import { ADD_BOOKING, FETCH_BOOKINGS } from "../actions/bookings";

const initialState = {
  bookings: [],
  userBookings: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:

      const newBooking = new Booking(
        action.bookingId,
        action.userId,
        action.vehicle,
        action.rent,
        action.rentDuration,
        action.paymentMethod
      );

      return {
        ...state,
        bookings: state.bookings.concat(newBooking),
      };
    case FETCH_BOOKINGS:
      return {
        ...state,
        bookings: action.bookings,
        userBookings: action.userBooking
      };
  }

  return state;
};
