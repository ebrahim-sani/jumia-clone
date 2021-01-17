import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <>
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
