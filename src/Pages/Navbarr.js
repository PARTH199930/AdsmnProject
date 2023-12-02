import React from "react";
import CadburyLogo from "../images/CadburyLogo.png";
import d_logo from "../images/d_logo.png";
import Hamburger from "../images/Hamburger.png";

export default function Navbarr() {
  return (
    <>
      <div className="image-container">
        <div className="left-images">
          <img src={CadburyLogo} style={{ width: "30%" }} alt="Cadbury Logo" />
          <img src={d_logo} style={{ width: "50%" }} alt="D Logo" />
        </div>
        <div className="right-image">
          <img src={Hamburger} alt="Hamburger" />
        </div>
      </div>
    </>
  );
}
