import React, { useState } from "react";
import SubTitle from "./components/subTitle/SubTitle";
import Title from "./components/title/Title";
import LaptopScreen from "../../assets/images/screen.svg";
import { items } from "../../data";
import "./services.scss";
import Button from "../linkBtn/Button";


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
          <Button url="/driverlogin">Find Loads</Button>
        </div>
      </div>
      <img className="mobile__screen" src={LaptopScreen} alt="" />
    </div>
  );
};

export default Service;
