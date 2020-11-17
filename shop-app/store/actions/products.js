import Product from "../../model/product";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";

//fetching the data from firebase
export const setProducts = () => {
  return async (dispatch, getState) => {
    //to use the state values of the reducers: ReducThunk provide the method getState
    const userId = getState().auth.uId;

    try {
      const response = await fetch(
        "https://shop-app-8e02c.firebaseio.com/products.json"
      );

      //if the error status code is above 200 range then throw this new error
      // if (!response.ok) {
      //   throw new Error("Something went wrong!");
      // }

      const resData = await response.json();
      console.log(resData);

      //convert the object received in response (All products) to fetchedProducts array and add it in the product redux store to showcase on the UI
      let fetchedProducts = [];
      for (const key in resData) {
        fetchedProducts.push(
          new Product(
            key,
            resData[key].ownerId,
            resData[key].title,
            resData[key].imageUrl,
            resData[key].description,
            resData[key].price,
            resData[key].ownerPushToken
          )
        );
      }

      // get only the products related to the logged in userId
      const getProducts = fetchedProducts.filter(
        (product) => product.ownerId === userId
      );

      console.log(getProducts);

      // dispatch the payload with all products and userProducts
      dispatch({
        type: SET_PRODUCTS,
        products: fetchedProducts,
        userProducts: getProducts,
      });
    } catch (err) {
      throw err;
    }
  };
};

//adding data to firebase
export const addProduct = (title, imageUrl, description, price) => {
  return async (dispatch, getState) => {
    try {
      // take permission for push notification for every product added.
      let pushToken;

      //check whether the permission is already granted or not
      let statusObj = await Permissions.getAsync(Permissions.NOTIFICATIONS);

      //if the permissions are not granted then ask for permissions
      if (statusObj.status !== "granted") {
        statusObj = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      }

      //if permissions are not granted return null otherwise set the pushToken: getting the pushToken with the help of getExpoPushTokenAsync
      // getExpoPushTokenAsync provides the push token from expo servers
      if (statusObj.status !== "granted") {
        pushToken = null;
      } else {
        pushToken = await (await Notifications.getExpoPushTokenAsync()).data;
        console.log(pushToken);
      }

      // get the token value from auth reducer
      const token = getState().auth.token;
      console.log(token);
      // get the uid value from auth reducer
      const userId = getState().auth.uId;

      // map the products to the logged in token: logged in user and insert in firebase along the pushtoken
      const response = await fetch(
        `https://shop-app-8e02c.firebaseio.com/products.json?auth=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            imageUrl,
            description,
            price,
            ownerId: userId,
            ownerPushToken: pushToken,
          }),
        }
      );

      const resData = await response.json();
      console.log(resData);

      // add the product in the redux store
      dispatch({
        type: ADD_PRODUCT,
        productData: {
          id: resData.name,
          title,
          imageUrl,
          description,
          price,
          //map  the uid to owner id in the redux store
          ownerId: userId,
          //set pushtoken in the store for the added product
          productPushToken: pushToken,
        },
      });
    } catch (err) {
      throw err;
    }
  };
};

//updating product
export const updateProduct = (id, title, imageUrl, description) => {
  return async (dispatch, getState) => {
    try {
      // get the token value from auth reducer
      const token = getState().auth.token;

      //update the product with product id passed from the function related to logged in user: logged in token
      const response = await fetch(
        `https://shop-app-8e02c.firebaseio.com/products/${id}.json?auth=${token}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            imageUrl,
            description,
          }),
        }
      );
    } catch (err) {
      throw err;
    }

    // if (!response.ok) {
    //   throw new Error("Something went wrong!");
    // }

    // dispatch the payload
    dispatch({
      type: UPDATE_PRODUCT,
      pid: id,
      productData: {
        title,
        imageUrl,
        description,
      },
    });
  };
};

//deleting data to firebase
export const deleteProduct = (productId) => {
  return async (dispatch, getState) => {
    try {
      // get the token value from auth reducer
      const token = getState().auth.token;
      console.log(token);
      //delete the product with passed id related to the logged in user
      await fetch(
        `https://shop-app-8e02c.firebaseio.com/products/${productId}.json?auth=${token}`,
        {
          method: "DELETE",
        }
      );
      //dispatch the payload
      dispatch({ type: DELETE_PRODUCT, pid: productId });
    } catch (err) {
      throw err;
    }
  };
};
