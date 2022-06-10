import React from "react";
// import { a } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import "./nav.scss";

const NavBar = () => {
  return (
    <div className="wrapper">
      <div className="nav__container">
        <div className="nav__item">
          <div>
            <a href="/" rel="noreferrer">
              {" "}
              <img src={Logo} alt="" />
            </a>
            <a href="/" rel="noreferrer">
              How it Works
            </a>
            <a href="/" rel="noreferrer">
              Download
            </a>
            <a href="/" rel="noreferrer">
              About
            </a>
            <a href="/" rel="noreferrer">
              Pricing
            </a>
            <a href="/" rel="noreferrer">
              FAQ
            </a>
            <a className="truck__owner" href="/" rel="noreferrer">
              For Truck Owner
            </a>
          </div>
          <div>
            <a className="login__link" href="/" rel="noreferrer">
              Login
            </a>
            <a className="nav__btn" href="/" rel="noreferrer">
              Send A Package
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
