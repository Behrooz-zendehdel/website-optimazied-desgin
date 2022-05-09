import React from "react";
import "./Card.css";
const Card = ({ emoji, detail, heading }) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
