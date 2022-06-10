import React from "react";
import "./title.scss"

const Title = ({ text, subText }) => {
  return (
    <div className="title__wrapper">
      <h3>{text}</h3>
      <p>{subText}</p>
    </div>
  );
};

export default Title;
