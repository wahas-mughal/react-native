import { ADD_TO_CART, REMOVE_CART_ITEM } from "../actions/cart";
import CartItem from "../../model/cart-item";
import { ADD_ORDERS } from "../actions/order";
import { DELETE_PRODUCT } from "../actions/products";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    //get the product object passed from action creator and get the values
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productTitle = addedProduct.title;
      const productPrice = addedProduct.price;
      const pushToken = addedProduct.productPushToken;
      console.log("from ADD TO CART:" + pushToken);

      let newAndUpdatedCart;

      // if the product already exists, then this will add the quantity by 1 in the cart
      if (state.items[addedProduct.id]) {
        newAndUpdatedCart = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          productTitle,
          productPrice,
          state.items[addedProduct.id].total + productPrice,
          pushToken
        );
      } else {
        // if the product is new then this will add it in the cart
        newAndUpdatedCart = new CartItem(
          1,
          productTitle,
          productPrice,
          productPrice,
          pushToken
        );
      }
      return {
        //assign the add to cart product id to the new cart item
        items: { ...state.items, [addedProduct.id]: newAndUpdatedCart },
        //price of a product
        totalAmount: state.totalAmount + productPrice,
      };

    case REMOVE_CART_ITEM:
      // get the passed product id from items array
      const item = state.items[action.productID];

      //if the quantity is > 1 then remove by 1: in the case user wants to remove 1 product quantity
      let updatedCartItems;
      if (item.quantity > 1) {
        const updatedCart = new CartItem(
          item.quantity - 1,
          item.productTitle,
          item.productPrice,
          item.total - item.productPrice
        );
        // assign the passed product id from the action creator to the updated cart
        updatedCartItems = { ...state.items, [action.productID]: updatedCart };
      } else {
        // if the product is 1 in quantity then remove it alltogether
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.productID];
      }
      return {
        // in both condidtions update the overall items array and remove the product price from the total
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - item.productPrice,
      };

    // once the order is done return the initial state, items and totalAmount array, it belongs to
    case ADD_ORDERS:
      return initialState;

    case DELETE_PRODUCT:
      // if the passed product id don't matches with the product id in the items array then return the state: do nothing
      if (!state.items[action.pid]) {
        return state;
      }

      //get all the products
      const updatedCart = { ...state.items };
      //delete the product with the pid in the items array
      delete updatedCart[action.pid];
      //get the deleted product price from pid
      const itemPrice = { ...state.items[action.pid].total };

      // update the items array with the deleted product and deducted price from the total
      return {
        ...state,
        items: updatedCart,
        totalAmount: state.totalAmount - itemPrice,
      };
  }
  return state;
};
