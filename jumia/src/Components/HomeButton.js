import React from "react";

function HomeButton({ image, title }) {
  return (
    <div className="button">
      <div className="btn_con">
        <img className="btn_gif" src={image} alt="svg" />
        <span className="btn_text">{title}</span>
      </div>
    </div>
  );
}

export default HomeButton;
