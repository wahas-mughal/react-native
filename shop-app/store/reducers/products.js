import PRODUCTS from "../../data/dummy-data";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  SET_PRODUCTS,
  UPDATE_PRODUCT,
} from "../actions/products";
import Product from "../../model/product";

const initialState = {
  allAvailableProducts: [],
  userProducts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    //set the fetched products from firebase and update the states i.e. allAvailableProducts and userProducts in redux
    case SET_PRODUCTS:
      return {
        ...state,
        allAvailableProducts: action.products,
        userProducts: action.userProducts,
      };

    // delete the product
    case DELETE_PRODUCT:
      // filter the userProducts array with the products, which don't matches with product id passed to be deleted
      // filter always returns a new array
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.pid
        ),
        // filter the allAvailableProducts array with the products, which don't matches with product id passed to be deleted
        // filter always returns a new array with updated array
        allAvailableProducts: state.allAvailableProducts.filter(
          (product) => product.id !== action.pid
        ),
      };

    // add the products
    case ADD_PRODUCT:
      //passed a new product: save details in the redux store from the action creator
      const newProduct = new Product(
        action.productData.id,
        action.productData.ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price,
        action.productData.productPushToken
      );
      return {
        //concatinate the newProduct with allAvailableProducts
        //concatinate the newProduct with userProducts
        ...state,
        allAvailableProducts: state.allAvailableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };

    case UPDATE_PRODUCT:
      //find the product index which needs to be uodated
      const productIndex = state.userProducts.findIndex(
        (product) => product.id === action.pid
      );
      //get and set the values: onerId, price and ownerPushToken already exists in the product model and redux store
      const updatedProduct = new Product(
        action.pid,
        state.userProducts[productIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProducts[productIndex].price,
        state.userProducts[productIndex].ownerPushToken
      );

      //get the userProducts array and upate product with the help of product index
      const updatedUserProduct = [...state.userProducts];
      updatedUserProduct[productIndex] = updatedProduct;

      //find the product index which needs to be uodated
      const availableProductsIndex = state.allAvailableProducts.findIndex(
        (product) => product.id === action.pid
      );

      //get and set the values: onerId, price and ownerPushToken already exists in the product model and redux store
      const updatedAvailableProduct = [...state.allAvailableProducts];
      updatedAvailableProduct[availableProductsIndex] = updatedProduct;

      //return the updated states i.e. allAvailableProducts and userProducts
      return {
        ...state,
        allAvailableProducts: updatedAvailableProduct,
        userProducts: updatedUserProduct,
      };
  }
  return state;
};
