import React from "react";
import googlePlay from "../../../assets/images/Layer 2.svg";
import appleStore from "../../../assets/images/Group.svg";
import TopScreen from "../../../assets/images/phone.svg";
import BottomScreen from "../../../assets/images/phone2.svg";

import "./download.scss";

const DownloadSession = () => {
  return (
    <div className="download__container">
      <div className="sub__container">
        <div>
          <h2>Find, Pick up and delivery quicker</h2>
          <p>
            Download the app to find, negotiate, pick up and deliver packages
            quicker and easier, from anywhere to anywhere at anytime straight
            from your iPhone or Android phone. Just download the app from your
            app store and Sign In to get going.
          </p>
          <span>Get the App</span>

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
        <img className="mobile__screen" src={TopScreen} alt="phone screen" />
        <img
          className="mobile__screen"
          style={{ paddingTop: "3.1rem" }}
          src={BottomScreen}
          alt="bottom phone screen"
        />
      </div>
    </div>
  );
};

export default DownloadSession;
