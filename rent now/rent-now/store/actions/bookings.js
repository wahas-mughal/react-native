export const ADD_BOOKING = "ADD_BOOKING";
export const FETCH_BOOKINGS = "FETCH_BOOKINGS";
import Booking from "../../model/bookings";

//fetch the booking data from firebase
export const fetchBookings = () => {
  return async (dispatch, getState) => {
    try {
      const uID = getState().auth.userId;
      const response = await fetch(
        `https://rent-a-car-app-211bf.firebaseio.com/user/bookings.json`
      );
      const resData = await response.json();
      // console.log(resData);

      let fetchBookingsData = [];

      for (const key in resData) {
        fetchBookingsData.push(
          new Booking(
            key,
            resData[key].userId,
            resData[key].vehicle,
            resData[key].carImage,
            resData[key].rent,
            resData[key].duration,
            resData[key].paymentMethod
          )
        );
      }
      // get only the products related to the logged in userId
      const getBookings = fetchBookingsData.filter(
        (product) => product.userId === uID
      );

      dispatch({
        type: FETCH_BOOKINGS,
        bookings: fetchBookingsData,
        userBooking: getBookings,
      });
    } catch (err) {
      throw err;
    }
  };
};

// Add a booking into firebase
export const addBooking = (vehicle, image, rent ,rentDuration, paymentMethod) => {
  return async (dispatch, getState) => {
    try {
      const token = getState().auth.token
      const userId = getState().auth.userId
      console.log("in the addBooking function " +token);
      console.log("in the addBooking function " +userId);
      const response = await fetch(
        `https://rent-a-car-app-211bf.firebaseio.com/user/bookings.json?auth=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            vehicle: vehicle,
            carImage: image,
            rent: rent,
            duration: rentDuration,
            paymentMethod: paymentMethod,
          }),
        }
      );

      const resData = await response.json();
      console.log(resData.name);
''
      dispatch({
        type: ADD_BOOKING,
        bookingId: resData.name,
        userId: userId,
        vehicle: vehicle,
        carImage: image,
        rent: rent,
        duration: rentDuration,
        payMethod: paymentMethod,
      });
    } catch (err) {
      throw err;
    }
  };
};
