import React, { useState } from "react";
import SubTitle from "./components/subTitle/SubTitle";
import Title from "./components/title/Title";
import Deliver from "../../assets/images/delivery.svg";
import Meter from "../../assets/images/decrease.svg";
import Shield from "../../assets/images/shield.svg";
import LaptopScreen from "../../assets/images/screen.svg";

import "./services.scss";
import Button from "../button/Button";

const items = [
  {
    image: Deliver,
    title: "Find Truck Loads Easy & Fast",
    text: "Based on your location, The closest packages are recommended to you to choose from",
  },
  {
    image: Meter,
    title: "Earn more per mile",
    text: "Set your own prices and negotiate with the sender till you reach a price you are comfortable with",
  },
  {
    image: Shield,
    title: "Access from anywhere",
    text: "Load Connect does not interfare with your negotiation, rates or trips. You are 100% in control of everything you want or do.",
  },
];

const Service = () => {
  const [data] = useState(items);

  return (
    <div className="service__container">
      <div className="service__text">
        <Title
          text="Right load, right time, anywhere"
          subText="Load Connect website and mobile app help truckers find loads using our load board freight inventory and our freight matching tools anytime, anywhere!"
        />
        {data.map((item) => (
          <SubTitle key={item.id} item={item} />
        ))}
        <div className="find__loan" style={{marginTop: '51px'}}>
          <Button url="/">Find Loans</Button>
        </div>
      </div>
      <img className="mobile__screen" src={LaptopScreen} alt="" />
    </div>
  );
};

export default Service;
