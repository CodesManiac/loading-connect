import React from "react";
import googlePlay from "../../assets/images/Layer 2.svg";
import appleStore from "../../assets/images/Group.svg";
import "./index.scss";

const Header = () => {
  return (
    <div className="hero__container">
      <div>
        <h1 className="header__title">
          Find High Paying Truck Loads and Freight Fast and Easy
        </h1>
        <p>
          Load connect is an industry leader in load board solutions with
          affordable web and mobile app platforms. Some of the world’s largest
          carriers, owner-operators, and freight brokers rely on our load
          matching services to find loads and move truck freight.
        </p>
        <div className="btn__link">
          <a className="btn" href="/driverlogin" rel="noreferrer">
            Find Loads
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
};

export default Header;
