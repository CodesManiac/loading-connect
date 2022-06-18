import React from "react";

import "./index.scss";

const BgHero = ({ text, subTitle }) => {
  return (
    <div className="bg__wrapper">
      <h1>{text}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export default BgHero;
