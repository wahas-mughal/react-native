import { AUTH, USER_PROFILE } from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
  userDetails: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        token: action.idToken,
        userId: action.userID,
      };
      case USER_PROFILE:
        return{
          ...state,
          userDetails: action.payload
        }
  }
  return state;
};
