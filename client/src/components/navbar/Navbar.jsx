import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Navbar.css";

const Navbar = ({ click }) => {
  const state = useSelector((state) => state.reducerCart);

  const getCartCount = () => {
    if (state.cartItems.length > 0)
      return state.cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    else return 0;
  };

  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>MERN Shopping cart</h2>
      </div>

      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            {/* icon */}
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
