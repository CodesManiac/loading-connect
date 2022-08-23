import React from "react";
import { Link } from "react-router-dom";
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
            <a className="link__btn" href="/#how-it-work">
              How it Works
            </a>
            <a className="link__btn" href="/#download" rel="noreferrer">
              Download
            </a>
            <Link className="link__btn" to="/about">
              About
            </Link>
            <Link className="link__btn" to="/pricing">
              Pricing
            </Link>
            <a className="link__btn" href="/#faq" rel="noreferrer">
              FAQ
            </a>
            <a className="truck__owner" href="/howitwork" rel="noreferrer">
              For Truck Owner
            </a>
          </div>
          <div>
            <a className="login__link" href="/login" rel="noreferrer">
              Login
            </a>
            <a className="nav__btn" href="/" rel="noreferrer">
              Send A Package
            </a>
          </div>
          <div className="menu__bar">
            {/* <i class="fa-solid fa-bars"></i> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;