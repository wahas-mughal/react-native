export const AUTH = "AUTH";

export const auth = (token, uid) => {
  return {
    type: AUTH,
      idToken: token,
      userID: uid,
  };
};
