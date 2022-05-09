import React from "react";
import "./Services.css";
// import emoji1 from "../../assets/emoji-1";
const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
          Sapiente, sint.
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
          right side
      </div>
    </div>
  );
};

export default Services;
