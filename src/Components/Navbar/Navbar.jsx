import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      {/* left navbar  */}
      <div className="n-left">
        <div className="n-name">bz</div>
        <span>toggle</span>
      </div>
      {/* right navbar */}
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Protfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <button className="button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
