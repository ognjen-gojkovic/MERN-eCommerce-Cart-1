import { combineReducers } from "redux";
import { reducerCart } from "./reducers/reducer.cart";
import { reducerProducts } from "./reducers/reducer.product";
import { reducerProductDetails } from "./reducers/reducer.productDetails";

export const rootReducer = combineReducers({
  reducerCart,
  reducerProducts,
  reducerProductDetails,
});
