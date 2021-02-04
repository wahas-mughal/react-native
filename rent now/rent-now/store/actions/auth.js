export const AUTH = "AUTH";
export const USER_PROFILE = "USER_PROFILE";

export const auth = (token, uid) => {
  return {
    type: AUTH,
    idToken: token,
    userID: uid,
  };
};

export const userProfile = (fullname, mobile, email) => {
  return {
    type: USER_PROFILE,
    payload: {
      fullname,
      mobile,
      email,
    },
  };
};
