import { typesProduct } from "../types/types.product";

const INITIAL_STATE = {
  products: [],
  loading: false,
  error: null,
};

export const reducerProducts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typesProduct.FETCH_PRODUCTS_START:
      return {
        loading: true,
        products: [],
      };

    case typesProduct.FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    case typesProduct.FETCH_PRODUCTS_ERROR:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };

    default:
      return state;
  }
};
