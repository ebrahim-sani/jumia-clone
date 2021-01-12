import React from "react";

function Ad({ img }) {
  return (
    <div className="advert">
      <div className="adPost_container">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Ad;
