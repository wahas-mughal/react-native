// import {FormData} from 'react-native';

export const ISLIKED = "ISLIKED";
export const LIKEDPOST = "LIKEDPOST";
export const SIGNUP = "SIGNUP";

export const isLiked = (likeId) => {
  return {
    type: ISLIKED,
    payload: likeId,
  };
};

export const SignUp = (uid, fname, lname, email, number, date, time) => {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("uid", uid);
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("u_email", email);
    formData.append("u_phone", number);
    formData.append("curr_date", date);
    formData.append("curr_time", time);

    try {
      const response = fetch("https://gudbazar.com/picpak/signupUser.php", {
        method: "POST",
        body: formData,
      })
        .then((res) => {
          console.log("SIGN UP API RESPONSE:", JSON.stringify(res));
          //   console.log("this is " + response);
        })
        .catch((err) => {
          throw err;
        });

      //console.log("FETCH_RESPONSE", response);
      //   const resData = await response.json();
      //   console.log("SIGN UP API RESPONSE: ", resData);
    } catch (err) {
      throw err;
    }
  };
};
