import { typesCart } from "../types/types.cart";

export const addToCartFetch = (id, qty) => (dispatch, getState) => {
  fetch(`http://127.0.0.1:5000/api/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("cart action data:", data);
      dispatch({
        type: typesCart.ADD_TO_CART,
        payload: {
          product: data.product._id,
          name: data.product.name,
          imageUrl: data.product.imageUrl,
          price: data.product.price,
          countInStock: data.product.countInStock,
          qty,
        },
      });
      localStorage.setItem(
        "cart",
        JSON.stringify(getState().reducerCart.cartItems)
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removerFromCartFetch = (id) => (dispatch, getState) => {
  console.log("getState()", getState());
  dispatch({
    type: typesCart.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem(
    "cart",
    JSON.stringify(getState().reducerCart.cartItems)
  );
};
