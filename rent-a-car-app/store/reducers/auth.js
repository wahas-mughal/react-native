import { AUTH } from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        token: action.idToken,
        userId: action.userID,
      };
  }
  return state;
};
