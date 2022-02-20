import React from "react";
import "./CheckoutSubtotal.css";

import { AiFillCheckCircle } from "react-icons/ai";
import { useDataLayer } from "../../Helpers/StateProvider";
import { getBasketCount, getBasketTotal } from "../../Helpers/reducer";

const CheckoutSubtotal = () => {
  const [{ basket }, dispatch] = useDataLayer();

  return (
    <>
      <h3 className="checkout__subtotal-title">
        Subtotal ({getBasketCount(basket)} items):{" "}
        <span className="checkout__subtotal-price">
          ₹{getBasketTotal(basket)}
        </span>
      </h3>
      <div className="checkout__subtotal-subtitle">
        <AiFillCheckCircle />
        <p>Your order is eligible for FREE Delivery.</p>
      </div>
      <button className="checkout__subtotal-button">Proceed to Buy</button>
    </>
  );
};

export default CheckoutSubtotal;
