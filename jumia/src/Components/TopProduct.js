import React from "react";
import "./TopProduct.css";

function TopProduct({ image, title, price }) {
  return (
    <div className="top_product">
      <div className="top_items">
        <div className="item">
          <img src={image} alt="" />
          <p>{title}</p>
          <small>{price}</small>
        </div>
      </div>
    </div>
  );
}

export default TopProduct;
