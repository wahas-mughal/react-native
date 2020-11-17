export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

// add to cart
export const addToCart = (product) => {
  //passing the whole product object to cart reducer
  return { type: ADD_TO_CART, product: product };
};

//remove cart item
export const removeCartItems = (productId) => {
  return { type: REMOVE_CART_ITEM, productID: productId };
};
