export const ISLIKED = "ISLIKED";
export const LIKEDPOST = "LIKEDPOST";
export const SIGNUP = "SIGNUP";
export const AUTH = "AUTH";

export const isLiked = (likeId) => {
  return {
    type: ISLIKED,
    payload: likeId,
  };
};

export const SignUp = (uid, fname, lname, base64String ,email, number, date, time) => {
  return async (dispatch) => {

    const formData = new FormData();
    formData.append("uid", uid);
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("pic_img", base64String);
    formData.append("u_email", email);
    formData.append("u_phone", number);
    formData.append("curr_date", date);
    formData.append("curr_time", time);

    try {
      fetch("https://gudbazar.com/picpak/signupUser.php", {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          console.log("SIGN UP API RESPONSE:", JSON.stringify(res));
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
      throw err;
    }
  };
};

export const auth = (uid) => {
  return {
    type: AUTH,
    payload: uid,
  };
};

