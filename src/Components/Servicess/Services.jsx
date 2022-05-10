import React from "react";
import "./Services.css";
import emoji1 from "../../assets/emoji-1.png";
import imoji3 from "../../assets/emoji-3.png";
import imoji4 from "../../assets/emoji-4.png";
import Card from "../Card/Card";
import resume from "../../assets/resume.pdf";
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
        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <div className="cards" style={{ left: "30rem" }}>
        {/* card component */}
        <div>
          <Card
            emoji={emoji1}
            heading={"Design"}
            detail={"Figma,Sketch, Photoshop,Adobe"}
          />
        </div>
        {/* second card */}
        <div style={{ left: "-20rem", top: "10rem" }}>
          <Card
            emoji={imoji3}
            heading={"Developer"}
            detail={"Html,Css,Javascript,React"}
          />
        </div>
        <div style={{ left: "-3rem", top: "20rem" }}>
          <Card
            emoji={imoji4}
            heading={"backend"}
            detail={"laravel,payton,golang,php"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
