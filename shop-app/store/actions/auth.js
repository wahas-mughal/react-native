export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
import AsyncStorage from "@react-native-async-storage/async-storage";

let timer;

//Authentication
export const authenticate = (token, userId, expiryTime) => {
  return (dispatch) => {
    dispatch(setAutoTimerExp(expiryTime));
    dispatch({ type: AUTHENTICATE, token: token, userId: userId });
  };
};

// sign up to firebase
export const signUp = (email, password) => {
  // to send Async request we need ReduxThunk because Redux follows synchronous flow
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWVn9dtJnzuwrEpkvw7bdmf6bNNrsd4ZY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    //specify the errors by unpacking the json object and comparing the errors strings
    if (!response.ok) {
      const errResponse = await response.json();
      const errMessage = errResponse.error.message;
      let msg = "Something went wrong!";
      if (errMessage === "EMAIL_EXISTS") {
        msg = "This email already exists!";
      }
      throw new Error(msg);
    }

    const resData = await response.json();

    //dispatch the token, uid and expiry time to authenticate action creator above: get from the response when the user signed in
    dispatch(
      authenticate(
        resData.idToken,
        resData.localId,
        parseInt(resData.expiresIn) * 1000
      )
    );

    //add the expiry time coverted in millisconds to the expiry time got from the firebase (3500 * 1000)
    // because new Date().getTime() returns in milliseconds
    const expirationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000
    );

    //save the token, uid and exp time in the device async storage
    saveDataInDevice(resData.idToken, resData.localId, expirationDate);
  };
};

// Login to firebase
export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCWVn9dtJnzuwrEpkvw7bdmf6bNNrsd4ZY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    //specify the errors by unpacking the json object and comparing the errors strings
    if (!response.ok) {
      const errResponse = await response.json();
      const errMessage = errResponse.error.message;
      let msg = "Something went wrong!";
      if (errMessage === "EMAIL_NOT_FOUND") {
        msg = "This email does not exists!";
      } else if (errMessage === "INVALID_PASSWORD") {
        msg = "The typed password is invalid!";
      }
      throw new Error(msg);
    }

    const resData = await response.json();
    console.log(resData);
    //dispatch the token, uid and expiry time to authenticate action creator above
    // get from the response when the user signed in
    dispatch(
      authenticate(
        resData.idToken,
        resData.localId,
        parseInt(resData.expiresIn) * 1000
      )
    );

    //add the expiry time coverted in millisconds to the expiry time got from the firebase (3500 * 1000)
    // because new Date().getTime() returns in milliseconds
    const expirationDate = new Date(
      new Date().getTime() + parseInt(resData.expiresIn) * 1000
    );
    //save the token, uid and exp time in the device async storage
    saveDataInDevice(resData.idToken, resData.localId, expirationDate);
  };
};

//Logout by clearing the timer and remove async storage having token and user id
export const logout = () => {
  //call clearLoguoutTimer
  clearLoguoutTimer();
  //remove the async storage i.e. token, uid and exp time
  AsyncStorage.removeItem("userData");
  console.log("Logged out!");
  return { type: LOGOUT };
};

//clear the timer set for auto logout when the user manually logout
const clearLoguoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

//automatically logout if the expiration date is passed: get the expirationDate: when authenciate action creator is called
const setAutoTimerExp = (expirationDate) => {
  return (dispatch) => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expirationDate);
  };
};

//save the login token in the device so that we don't have to login again
const saveDataInDevice = (token, userId, expirationDate) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      uId: userId,
      expiration: expirationDate.toISOString(),
    })
  );
};
