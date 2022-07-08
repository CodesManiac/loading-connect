import React from "react";
import Logo from "../../assets/images/Logo.svg";
import Vector from "../../assets/images/Vector.svg";
import googlePlay from "../../assets/images/Layer 2.svg";
import appleStore from "../../assets/images/Group.svg";

import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="sub__container">
        <div>
          <a href="/" rel="noreferrer">
            {" "}
            <img
              style={{ width: "55.94px", height: "55.07px" }}
              src={Logo}
              alt=""
            />
          </a>
          <div>
            <p className="load__connect">Load Connect</p>
            <span className="nigeria">NIGERIA</span>
            <div className="copy__right">
              <p> © 2021 Load Connect</p>
              <p>All rights reserved</p>
            </div>
          </div>
          <div className="social__icon">
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="quick__link">
          <h2>Quick Links</h2>
          <div>
            <div className="vector">
              <a href="/login" rel="noreferrer">
                Send A Package
              </a>
              <span className="arrow">
                <img src={Vector} alt="" />
              </span>
            </div>
            <div style={{ gap: "1.7rem" }} className="vector">
              <a href="/driverlogin" rel="noreferrer">
                For Truck Owners
              </a>
              <span className="arrow">
                <img src={Vector} alt="" />
              </span>
            </div>
          </div>
          <a className="footer__links" href="/#how-it-work" rel="noreferrer">
            How it Works
          </a>
          <a href="/#download" rel="noreferrer">
            Download
          </a>
          <a className="footer__links" href="/pricing" rel="noreferrer">
            Pricing
          </a>
        </div>
        <div className="support__footer">
          <h2>Support</h2>
          <a className="footer__links" href="/about" rel="noreferrer">
            About
          </a>
          <a className="footer__links" href="/#faq" rel="noreferrer">
            Frequently asked questions
          </a>
          <a className="footer__links" href="/" rel="noreferrer">
            Contact support
          </a>
          <a className="footer__links" href="/privacy" rel="noreferrer">
            Privacy policy
          </a>
          <a className="footer__links" href="/terms" rel="noreferrer">
            Terms of Service
          </a>
        </div>
        <div className="install__app">
          <h2>Install App</h2>
          <div className="mobile__link">
            <a href="/" rel="noreferrer">
              {" "}
              <img src={googlePlay} alt="google play store" />
            </a>
            <a href="/" rel="noreferrer">
              <img src={appleStore} alt="apple store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
