import { typesProduct } from "../types/types.product";

const INITIAL_STATE = {
  product: {},
  loading: false,
  error: null,
};

export const reducerProductDetails = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typesProduct.FETCH_PRODUCT_DETAILS_START:
      return {
        loading: true,
        product: {},
      };

    case typesProduct.FETCH_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case typesProduct.FETCH_PRODUCTS_ERROR:
      return {
        loading: false,
        product: {},
        error: action.payload,
      };

    case typesProduct.FETCH_PRODUCT_DETAILS_RESET:
      return {
        loading: false,
        product: {},
        error: null,
      };

    default:
      return state;
  }
};
