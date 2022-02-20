import React from "react";
import "./ProductInCart.css";

import { AiFillStar } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useDataLayer } from "../../Helpers/StateProvider";

const ProductInCart = (props) => {
  let starsArr = [];
  for (let i = 1; i <= props.stars; i++) {
    starsArr.push(i);
  }

  const [{ basket, user }, dispatch] = useDataLayer();

  const getProductQuantity = (p_id) =>
    basket.filter((item) => item?.id === p_id);

  const removeFromCart = async () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  return (
    <div>
      <div className="productincart">
        <div className="productincart__left">
          <img
            src={props.image}
            alt={props.subtitle}
            className="productincart__left-img"
          />
          <div className="productincart__left-details">
            <div className="productincart__left-details__up">
              <h2 className="productincart__left-details__up-title">
                {props.title}
              </h2>
              <h3 className="productincart__left-details__up-subtitle">
                {props.subtitle}
              </h3>
              <div className="productincart__left-details__up-stars">
                {starsArr.map((i) => (
                  <AiFillStar key={Math.random().toString()} />
                ))}
              </div>
              <div className="productincart__left-details__up-quantity">
                <MdOutlineProductionQuantityLimits className="productincart__left-details__up-quantity__logo" />
                <p className="productincart__left-details__up-quantity__cnt">
                  {getProductQuantity(props.id)[0]?.quantity}
                </p>
              </div>
            </div>
            <button
              onClick={removeFromCart}
              className="productincart__left-details_down"
            >
              Remove from Cart
            </button>
          </div>
        </div>
        <h3 className="productincart__right">
          ₹{props.price * getProductQuantity(props.id)[0]?.quantity}
        </h3>
      </div>
      <hr className="productincart__bottom-divider" />
    </div>
  );
};

export default ProductInCart;
