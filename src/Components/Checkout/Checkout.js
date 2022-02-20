import React, { useEffect } from "react";
import "./Checkout.css";

import ProductInCart from "../ProductInCart/ProductInCart";
import CheckoutSubtotal from "../CheckoutSubtotal/CheckoutSubtotal";
import { useDataLayer } from "../../Helpers/StateProvider";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useDataLayer();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="checkout">
      <div className="checkout__cart">
        <div className="checkout__cart-details">
          <h2 className="checkout__cart-details-title">Shopping Cart</h2>
          <p className="checkout__cart-details-price">Price</p>
        </div>
        <hr />
        {!basket.length && (
          <div className="checkout__cart-details-none">
            <h2>Your Cart is Empty!</h2>
          </div>
        )}
        {basket.map((item) => {
          return (
            <ProductInCart
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              stars={item.stars}
              price={item.price}
            />
          );
        })}
      </div>
      <div className="checkout__subtotal">
        <CheckoutSubtotal />
      </div>
    </div>
  );
};

export default Checkout;
