import React from "react";
import "./subtitle.scss";

const SubTitle = ({ item }) => {
  console.log({ item });
  return (
    <div>
      <div className="service__wrapper">
        <img src={item.image} alt="deliver icon" />
        <div>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  );
};

export default SubTitle;
