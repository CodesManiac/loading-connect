import React from "react";
import Image from "../../../assets/images/MaskGroup.png";
import Image2 from "../../../assets/images/Mask Group.png";
import "./index.scss";

const Vision = () => {
  return (
    <div className="vision__container">
      <div className="who__we__are">
        <h1>Who are we?</h1>
        <p>
          Sed varius nunc vel congue. Nibh et malesuada elit condimentum. Mauris
          eget feugiat arcu nulla sed arcu nec sit. Lacus tempor eleifend
          molestie elementum semper amet hendrerit massa tincidunt. Metus nisl
          curabitur eleifend posuere. Ac nunc, posuere non massa egestas. Velit
          adipiscing pellentesque dictumst in ultrices nisl non sed est. In
          iaculis pellentesque nunc sed vitae libero. Egestas feugiat
          condimentum quam felis sem porttitor aliquet at. Id ultrices eu leo
          facilisis accumsan.
        </p>
      </div>
      <div className="vision__bg">
        <img src={Image2} alt="" />
      </div>
      <div className="our__vision">
        <img src={Image} alt="our vision" />
      </div>
      <div className="vision__text" >
        <h1>Our Vision</h1>
        <p>
          Sed varius nunc vel congue. Nibh et malesuada elit condimentum. Mauris
          eget feugiat arcu nulla sed arcu nec sit. Lacus tempor eleifend
          molestie elementum semper amet hendrerit massa tincidunt. Metus nisl
          curabitur eleifend posuere. Ac nunc, posuere non massa egestas. Velit
          adipiscing pellentesque dictumst in ultrices nisl non sed est. In
          iaculis pellentesque nunc sed vitae libero. Egestas feugiat
          condimentum quam felis sem porttitor aliquet at. Id ultrices eu leo
          facilisis accumsan.
        </p>
      </div>
    </div>
  );
};

export default Vision;
