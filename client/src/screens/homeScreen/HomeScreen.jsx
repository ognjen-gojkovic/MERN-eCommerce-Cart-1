import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/actions.product";
import Product from "../../components/product/Product";

import "./HomeScreen.css";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducerProducts);

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="homeScreen">
      <h2 className="homeScreen__title">Latest Product</h2>
      <div className="homeScreen__products">
        {state.loading ? (
          <h2>loading...</h2>
        ) : state.error ? (
          <h2>{state.error.massage}</h2>
        ) : (
          state.products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price}
              description={product.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
