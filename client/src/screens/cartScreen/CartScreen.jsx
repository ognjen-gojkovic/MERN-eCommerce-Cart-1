import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// components
import CartItem from "../../components/cartItem/CartItem";

// actions
import {
  addToCartFetch,
  removerFromCartFetch,
} from "../../redux/actions/actions.cart";

import "./CartScreen.css";

const CartScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducerCart);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCartFetch(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removerFromCartFetch(id));
  };

  const getCartCount = () => {
    if (state.cartItems.length > 0)
      return state.cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    else return 0;
  };

  const getCartSubtotal = () => {
    if (state.cartItems.length > 0)
      return state.cartItems.reduce(
        (price, item) => Number(item.price) * Number(item.qty) + price,
        0
      );
    else return 0;
  };

  const handleCheckout = () => {
    if (state.cartItems.length > 0) {
      alert("Your purchase is completed.\nThank You.");
      state.cartItems.forEach((item) =>
        dispatch(removerFromCartFetch(item.product))
      );
    } else {
      alert("Your cart is empty.\nTo make a purchase put product into cart.");
    }
  };

  return (
    <div className="cartScreen">
      <div className="cartScreen__left">
        <h2>Shopping Cart</h2>
        {state.cartItems.length === 0 ? (
          <div>
            Your cart is empty. <Link to="/">Go Home</Link>
          </div>
        ) : (
          state.cartItems.map((item) => (
            <CartItem
              key={item.name}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeFromCartHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>

      <div className="cartScreen__right">
        <div className="cartScreen__info">
          <p>Subtotal ({getCartCount()})</p>
          <p>${getCartSubtotal().toFixed(2)}</p>
        </div>
        <div>
          <button onClick={handleCheckout}>Procced to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
