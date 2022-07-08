import React, { useState } from "react";
import Button from "../linkBtn/Button";
import "./work.scss";

const Work = ({ dataObject, text, url="/" }) => {
  const [data] = useState(dataObject);
  return (
    <div className="work__container" id="how-it-work">
      <h1>How It works</h1>
      <p>Send packages in 3 simple steps</p>
      <div className="work__layout">
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="work__btn">
        <Button url={url}>{text}</Button>
      </div>
    </div>
  );
};

export default Work;
