import React from "react";
import "./Intro.css";
import Instagram from "../../assets/logo-instagram.png";
import Twitter from "../../assets/logo-twitter.png";
import Github from "../../assets/logo-github.png";

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
      <div className="i-right">right side</div>
    </div>
  );
};

export default Intro;
