import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

import "./navbar.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="nav-logo">
        <a href="/" rel="noreferrer">
          {" "}
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className={`nav-links ${isOpen && "open"}`}>
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
      <div className={`nav-items ${isOpen && "open"}`}>
        <a className="login__link" href="/login" rel="noreferrer">
          Login
        </a>
        <a className="nav__btn" href="/" rel="noreferrer">
          Send A Package
        </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default NavBar;
