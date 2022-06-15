import React from "react";
import Mark from "../../../../assets/images/Vector (1).svg";
import Close from "../../../../assets/images/CloseButton.svg";

const Pro = ({ number = 2999, text = "/per month paid Annually" }) => {
  return (
    <div className="pro__container">
      <h5>
        Pro <span>(recommended)</span>
      </h5>
      <h1>
        <span> #{number}</span>
        {text}
      </h1>
      <p className="standard__text">
        Id ipsum congue mus consectetur id laoreet egestas. Quam egestas nec
        leo, eget et tellus dignissim elementum.
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
        <p>Enim scelerisque enim aliquam habitant congue.</p>
      </div>
      <div className="mark__text">
        <img src={Close} alt="" />
        <p>Arcu nulla ornare id id blandit orci.</p>
      </div>
      <div className="mark__text">
        <img src={Close} alt="" />
        <p>Quam pharetra accumsan a fermentum ornare.</p>
      </div>
      <button>Send a package</button>
    </div>
  );
};

export default Pro;
