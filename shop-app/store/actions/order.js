import Orders from "../../model/order";

export const ADD_ORDERS = "ADD_ORDERS";
export const SET_ORDERS = "SET_ORDERS";

export const setOrders = () => {
  try {
    return async (dispatch, getState) => {
      // get the uid value from auth reducer
      const userId = getState().auth.uId;

      //get the order related to userId: logged in user
      const response = await fetch(
        `https://shop-app-8e02c.firebaseio.com/orders/${userId}.json`
      );
      const resData = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      // conver the response object to fetchedOrders and save it in the redux store
      let fetchedOrders = [];
      for (const key in resData) {
        fetchedOrders.push(
          new Orders(
            key,
            resData[key].cartItem,
            resData[key].totalAmount,
            new Date(resData[key].date)
          )
        );
      }

      console.log(fetchedOrders);

      //dispatch the payload
      dispatch({
        type: SET_ORDERS,
        orders: fetchedOrders,
      });
    };
  } catch (err) {
    throw err;
  }
};

export const addOrders = (cartItem, totalAmount) => {
  return async (dispatch, getState) => {
    // get the token value from auth reducer
    const token = getState().auth.token;
    // get the uid value from auth reducer
    const userId = getState().auth.uId;
    //get the current date object
    const date = new Date();

    // map the orders to the logged in token: logged in user and insert in firebase
    const response = await fetch(
      `https://shop-app-8e02c.firebaseio.com/orders/${userId}.json?auth=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItem,
          totalAmount,
          date: date.toISOString(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const resData = await response.json();

    //dispatch the payload
    dispatch({
      type: ADD_ORDERS,
      orderDetails: {
        id: resData.name,
        cartItems: cartItem,
        total: totalAmount,
        date: date,
      },
    });

    //receive push notification for indivisual products when the order is placed!
    for (const cartItems of cartItem) {
      // get the push token for every product in the cartItems object
      const pushToken = cartItems.cartPushToken;
      console.log(cartItem);

      //send the http request to expo push servers
      fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-Encoding": "gzip, defalte",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: pushToken,
          title: "You have received a new order",
          body:
            "Muhammard Irfan has just placed an order, tab to see the details",
        }),
      });
    }
  };
};
