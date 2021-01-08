import React from "react";
import "./Product.css";

function product({ img, title, price }) {
  return (
    <div className="top_selling">
      <div className="product_container">
        <div className="product">
          <img className="product_img" src={img} alt="" />
          <p className="product_description">{title}</p>
          <span className="product_price">
            <strong>₦</strong>
            <strong>{price}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default product;
