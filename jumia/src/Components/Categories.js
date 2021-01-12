import React from "react";
import "./Categories.css";

function Categories({ image, title }) {
  return (
    <div className="categores">
      <div className="categories_component">
        <div className="categies_content">
          <img src={image} alt="img" />
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}

export default Categories;
