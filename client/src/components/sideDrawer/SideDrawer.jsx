import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const state = useSelector((state) => state.reducerCart);

  const getCartCount = () => {
    if (state.cartItems.length > 0)
      return state.cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    else return 0;
  };

  const sideDrawerClass = ["sideDrawer"];

  if (show) sideDrawerClass.push("show");

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sideDrawer__links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="sideDrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
