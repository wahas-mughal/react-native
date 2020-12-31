import { AUTHENTICATE, LOGOUT } from "../action/auth";
const initialState = {
  token: null,
  uId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    //Authenticate the passed token and uid: from firebase
    case AUTHENTICATE:
      return {
        token: action.payload.tokenID,
        uId: action.payload.userID,
      };
    //return the initial state on logout
    case LOGOUT:
      return initialState;
  }
  return state;
};