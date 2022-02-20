import React from "react";
import "./Header.css";

import { useNavigate } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { AiFillShopping } from "react-icons/ai";
import { useDataLayer } from "../../Helpers/StateProvider";
import { getBasketCount } from "../../Helpers/reducer";

import { auth } from "../../Firebase/firebase";

const Header = () => {
  let navigate = useNavigate();

  const [{ basket, user }, dispatch] = useDataLayer();

  const logout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <div className="header">
      <img
        src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
        alt="amazon_logo"
        className="header__logo"
        onClick={() => navigate("/")}
      />
      <div className="header__search">
        <input type="text" className="header__search-bar" />
        <div className="header__search-logo">
          <BiSearch />
        </div>
      </div>
      <div className="header__nav">
        <div
          className="header__nav-options"
          onClick={!user ? () => navigate("/login") : logout}
        >
          <span className="header__nav-option-1">
            {user ? user.displayName : "Hello"}
          </span>
          <span className="header__nav-option-2">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>
        <div className="header__nav-options">
          <span className="header__nav-option-1">Returns</span>
          <span className="header__nav-option-2">& Orders</span>
        </div>
        <div className="header__nav-options">
          <span className="header__nav-option-1">Your</span>
          <span className="header__nav-option-2">Prime</span>
        </div>
        <div
          className="header__nav-optionsBasket"
          onClick={() => navigate("/checkout")}
        >
          <AiFillShopping className="header__nav-optionsBasket-logo" />
          <span className="header__nav-optionsBasket-cnt">
            {getBasketCount(basket)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
