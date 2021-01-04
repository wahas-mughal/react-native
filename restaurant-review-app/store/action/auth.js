export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
export const SET_USER_NAME = "SET_USER_NAME";

export const auth = (tokenID, userID) => {
  return {
    type: AUTHENTICATE,
    payload: {
      tokenID,
      userID,
    },
  };
};

export const setUserName = (username) => {
  return {
    type: SET_USER_NAME,
    user: username,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};
