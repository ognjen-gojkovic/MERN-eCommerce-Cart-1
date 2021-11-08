import React from "react";
import { Switch, Route } from "react-router-dom";

// Screens
import HomeScreen from "./screens/homeScreen/HomeScreen";
import ProductScreen from "./screens/productScreen/ProductScreen";
import CartScreen from "./screens/cartScreen/CartScreen";

// Components
import Navbar from "./components/navbar/Navbar";
import Backdrop from "./components/backdrop/Backdrop";
import SideDrawer from "./components/sideDrawer/SideDrawer";

import "./App.css";

function App() {
  const [sideToggle, setSideToggle] = React.useState(false);

  return (
    <div className="app">
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}

      <Switch>
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart" component={CartScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </div>
  );
}

export default App;
