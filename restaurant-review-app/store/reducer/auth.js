import { AUTHENTICATE, LOGOUT, SET_USER_NAME } from "../action/auth";
const initialState = {
  token: null,
  uId: null,
  UserName: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    //Authenticate the passed token and uid: from firebase
    case AUTHENTICATE:
      return {
        token: action.payload.tokenID,
        uId: action.payload.userID,
      };

    case SET_USER_NAME:
      return {
        UserName: action.user,
      };
    //return the initial state on logout
    case LOGOUT:
      return initialState;
  }
  return state;
};
