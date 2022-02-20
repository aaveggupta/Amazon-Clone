import React from "react";
import "./ProductCard.css";

import { AiFillStar } from "react-icons/ai";
import { useDataLayer } from "../../Helpers/StateProvider";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

const ProductCard = (props) => {
  const savingPrice = props.oldPrice - props.newPrice;
  const discount = Math.floor((savingPrice / props.oldPrice) * 100);

  const [{ basket, user }, dispatch] = useDataLayer();

  let starsArr = [];
  for (let i = 1; i <= props.stars; i++) {
    starsArr.push(i);
  }

  const addToCard = async () => {
    dispatch({
      type: "ADD_TO_BASKET",
      product: {
        id: props.id,
        image: props.imgUrl,
        title: props.title,
        subtitle: props.subtitle,
        stars: props.stars,
        price: props.newPrice,
      },
    });
  };

  return (
    <div className="productcard">
      <img
        src={props.imgUrl}
        alt={props.subtitle}
        className="productcard__img"
      />
      <h2 className="productcard__title">{props.title}</h2>
      <h4 className="productcard__subtitle">{props.subtitle}</h4>
      <div className="productcard__ratings">
        <div className="productcard__ratings-stars">
          {starsArr.map((i) => (
            <AiFillStar key={Math.random().toString()} />
          ))}
        </div>
        <p>
          {"\u00A0"}
          {"\u00A0"}•{"\u00A0"}
          {"\u00A0"}
          <span style={{ color: "#63BCE4", fontWeight: "700" }}>
            {props.rating}
          </span>
        </p>
      </div>
      <div className="productcard__pricing">
        <p className="productcard__pricing-new">₹{props.newPrice}</p>
        <p className="productcard__pricing-old">₹{props.oldPrice}</p>
        <p className="productcard__pricing-save">
          Save ₹{savingPrice} ({discount}%)
        </p>
      </div>
      <button className="productcard__add" onClick={addToCard}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
