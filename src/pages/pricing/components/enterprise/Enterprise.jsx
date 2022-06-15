import React from "react";
import Mark from "../../../../assets/images/Vector (1).svg";

export const Enterprise = ({ text = "Custom Quote" }) => {
  return (
    <div>
      <div className="standard__container">
        <h5>Enterprise</h5>
        <h1>
          {" "}
          <span>{text}</span>
        </h1>
        <p className="standard__text">
          Neque phasellus in volutpat feugiat iaculis diam non mauris. Augue eu
          adipiscing ac dignissim sed.
        </p>
        <div className="mark__text">
          <img src={Mark} alt="" />
          <p>
            Eget faucibus nunc et, habitasse purus iaculis mattis leo, volutpat.
          </p>
        </div>
        <div className="mark__text">
          <img src={Mark} alt="" />
          <p>Urna, in cursus sit ultrices ut curabitur arcu hac.</p>
        </div>
        <div className="mark__text">
          <img src={Mark} alt="" />
          <p>Amet, viverra faucibus at ipsum.</p>
        </div>
        <div className="mark__text">
          <img src={Mark} alt="" />
          <p>Enim scMarksque enim aliquam habitant congue.</p>
        </div>
        <div className="mark__text">
          <img src={Mark} alt="" />
          <p>Arcu nulla ornare id id blandit orci.</p>
        </div>
        <div className="mark__text">
          <img src={Mark} alt="" />
          <p>Quam pharetra accumsan a fermentum ornare.</p>
        </div>
        <button>Send a package</button>
      </div>
    </div>
  );
};
