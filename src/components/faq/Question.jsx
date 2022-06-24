import React from "react";
import { useState } from "react";
import ArrowOpen from "../../assets/images/arrowlef.svg";
import ArrowRight from "../../assets/images/arrowright.svg";

import "./faq.scss";

const Question = ({ title, description }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <div onClick={() => setShowInfo(!showInfo)} className="tab__open">
        <p>{title}</p>
        <span>
          {showInfo ? (
            <img src={ArrowOpen} alt="arrow down" />
          ) : (
            <img src={ArrowRight} alt="arrow down" />
          )}
        </span>
      </div>
      {showInfo && <p className="tab__content">{description}</p>}
      <p className="bottom__line"></p>
    </div>
  );
};

export default Question;
