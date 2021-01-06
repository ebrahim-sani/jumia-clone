import React from "react";
import "./Header.css";
import { FaAmazonPay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <>
      <div className="header_one">
        <div className="headerOne_container">
          <div className="advert">
            <span className="ad_text">
              <BsFillStarFill className="star_icon" />
              <small>Sell on Jumia</small>
            </span>
          </div>
          <div className="headerOne_logos">
            <img className="logo" src="/jumia.png" alt="" />
            <FaApplePay className="icon" />
            <FaAmazonPay className="icon" />
            <FaPaypal className="icon" />
          </div>
        </div>
      </div>
      <div className="header_two">
        <div className="headerTwo_component">
          <div className="headerTwo_logo">
            <img className="img" src="/jumia.png" alt="" />
          </div>
          <div className="searchField">
            <input
              type="text"
              placeholder="Search products, brands and categories"
            />
            <button className="btn">Search</button>
          </div>
          <div className="right_component">
            <div className="profile">
              <PersonIcon className="icons" />
              <span className="text">Login</span>
              <ArrowDropDownIcon className="icons" />
            </div>
            <div className="help">
              <HelpOutlineIcon className="icons" />
              <span className="text">Help</span>
              <ArrowDropDownIcon className="icons" />
            </div>
            <div className="cart">
              <ShoppingCartIcon className="icons" />
              <span className="text">Cart</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
