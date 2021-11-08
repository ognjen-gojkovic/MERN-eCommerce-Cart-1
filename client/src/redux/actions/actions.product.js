import { typesProduct } from "../types/types.product";

export const getProducts = () => (dispatch) => {
  dispatch({
    type: typesProduct.FETCH_PRODUCTS_START,
  });
  fetch("http://127.0.0.1:5000/api/products")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: typesProduct.FETCH_PRODUCTS_SUCCESS,
        payload: data.products,
      });
    })
    .catch((err) => {
      dispatch({
        type: typesProduct.FETCH_PRODUCTS_ERROR,
        payload: err,
      });
    });
};

export const getProductDetails = (id) => (dispatch) => {
  dispatch({ type: typesProduct.FETCH_PRODUCT_DETAILS_START });
  fetch(`http://127.0.0.1:5000/api/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: typesProduct.FETCH_PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    })
    .catch((err) => {
      dispatch({
        type: typesProduct.FETCH_PRODUCT_DETAILS_ERROR,
        payload: err,
      });
    });
};

export const removeProductDetails = () => (dispatch) => {
  return {
    type: typesProduct.FETCH_PRODUCT_DETAILS_RESET,
  };
};
