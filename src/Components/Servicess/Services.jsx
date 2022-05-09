import React from "react";
import "./Services.css";
import emoji1 from "../../assets/emoji-1.png";
import Card from "../Card/Card";
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
          {/* card component */}
        <div>
          <Card
            emoji={emoji1}
            heading={"Design"}
            detail={"Figma,Sketch,Photoshop,Adobe,...."}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
