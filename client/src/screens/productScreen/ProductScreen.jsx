import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/actions.product";
import { addToCartFetch } from "../../redux/actions/actions.cart";

import "./ProductScreen.css";

const ProductScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducerProductDetails);

  const [qty, setQty] = React.useState(1);

  React.useEffect(() => {
    if (state.product && match.params.id !== state.product._id)
      dispatch(getProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    dispatch(addToCartFetch(state.product._id, qty));
    history.push("/cart");
  };

  return (
    <div className="productScreen">
      {state.loading ? (
        <h2>Loading...</h2>
      ) : state.error ? (
        <h2>{state.error.message}</h2>
      ) : (
        <>
          <div className="productScreen__left">
            <div className="left__image">
              <img src={state.product.imageUrl} alt={state.product.name} />
            </div>
            <div className="left__info">
              <div className="left__name">{state.product.name}</div>
              <div>Price: ${state.product.price}</div>
              <div>
                {state.product.description
                  ? state.product.description.substring(0, 100)
                  : ""}
                ...
              </div>
            </div>
          </div>
          <div className="productScreen__right">
            <div className="right__info">
              <p>
                Price: <span>${state.product.price}</span>
              </p>

              <p>
                Status:{" "}
                <span>
                  {state.product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty:
                <select
                  value={state.product.qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(state.product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="submit" onClick={addToCartHandler}>
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
