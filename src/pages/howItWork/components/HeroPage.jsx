import React from "react";
import googlePlay from "../../../assets/images/Layer 2.svg";
import appleStore from "../../../assets/images/Group.svg";
import "./index.scss";

function HeroPage() {
  return (
    <div className="hero__page">
      <div>
        <h1 className="header__title">
          Post loads to get matched with the best carriers, search for trucks,
          and track your cargo in real time.
        </h1>
        <p>
          Take the uncertainty out of freight by giving your business more
          opportunities. Load Connect connects you with motor carriers, freight
          brokers and truck drivers and shippers in Nigeria.
        </p>
        <div className="btn__link">
          <a className="btn" href="/login" rel="noreferrer">
            Create Loads
          </a>
          <a className="btn__learn" href="/" rel="noreferrer">
            Learn More
          </a>
        </div>
        <span>We have a mobile app too!</span>

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
  );
}

export default HeroPage;
