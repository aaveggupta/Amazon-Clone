import React, { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Home.css";

import {
  womenClothing,
  menClothing,
  gadgets,
  homeFurnish,
} from "../../Helpers/productDetails";
import { useDataLayer } from "../../Helpers/StateProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [{ user }, dispatch] = useDataLayer();
  let navigate = useNavigate();

  useEffect(() => {
    !user && navigate("/login");
  }, [user]);

  return (
    <div className="home">
      <img
        src="https://m.media-amazon.com/images/I/71dNSfbYawL._SX3740_.jpg"
        alt="amazon_fashion"
        className="home__backImage"
      />

      <div className="home__row">
        {womenClothing.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imgUrl={product.image}
            title={product.title}
            subtitle={product.subtitle}
            stars={product.stars}
            rating={product.rating}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
          />
        ))}
      </div>

      <div className="home__row">
        {menClothing.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imgUrl={product.image}
            title={product.title}
            subtitle={product.subtitle}
            stars={product.stars}
            rating={product.rating}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
          />
        ))}
      </div>

      <div className="home__row">
        {gadgets.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imgUrl={product.image}
            title={product.title}
            subtitle={product.subtitle}
            stars={product.stars}
            rating={product.rating}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
          />
        ))}
      </div>

      <div className="home__row">
        {homeFurnish.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imgUrl={product.image}
            title={product.title}
            subtitle={product.subtitle}
            stars={product.stars}
            rating={product.rating}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
