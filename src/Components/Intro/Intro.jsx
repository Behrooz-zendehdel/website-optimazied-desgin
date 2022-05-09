import React from "react";
import "./Intro.css";
import Instagram from "../../assets/logo-instagram.png";
import Twitter from "../../assets/logo-twitter.png";
import Github from "../../assets/logo-github.png";
import vector1 from "../../assets/shape-1.png";
import vector2 from "../../assets/shape-3.png";
import boy from "../../assets/main-image.png";
import boy2 from "../../assets/main-3.png";
import reactlogo from "../../assets/logo-react.png";
import jslogo from "../../assets/logo-js.png";
import vsclogo from "../../assets/logo-vsc.png";
import FloatinfDiv from "../FloatinfDiv/FloatinfDiv";

const Intro = () => {
  return (
    <div className="intro">
      {/* left side */}
      <div className="i-left">
        <div className="i-name">
          <span> Hy ! I Am </span>
          <span> behrooz zendedel</span>
          <span>
            Frontend developer with high midlevel of experience in web designing
            and development , producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://www.instagram.com/behrooz_zendehdel/">
            <img src={Instagram} alt="" />
          </a>
          <a href="https://twitter.com/BZendedel">
            <img src={Twitter} alt="" />
          </a>
          <a href="https://github.com/Behrooz-zendehdel">
            <img src={Github} alt="" />
          </a>
        </div>
      </div>
      {/* right side */}
      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy2} alt="" />
        <div>
          <FloatinfDiv />
        </div>
      </div>
    </div>
  );
};

export default Intro;
