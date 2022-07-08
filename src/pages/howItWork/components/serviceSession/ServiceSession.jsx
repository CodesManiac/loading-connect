import React, { useState } from "react";
import { services } from "../../../../data";
import { Button } from "../../../../components";
import SubTitle from "../../../../components/services/components/subTitle/SubTitle";
import Title from "../../../../components/services/components/title/Title";
import Screen from "../../../../assets/images/dash.svg"

import "./index.scss";



const ServiceSession = () => {
  const [data] = useState(services);

  return (
    <div className="service__container">
      <div className="service__text">
        <Title
          text="Load Connect provides innovative and affordable solutions helping freight brokers and shippers move more loads every day!"
          subText="Load Connect has the features that enables it users send any kind of package regardless of it’s kind or size to anywhere in Nigeria quick and easy."
        />
        {data.map((item) => (
          <SubTitle key={item.id} item={item} />
        ))}
        <div className="find__loan" style={{ marginTop: "51px" }}>
          <Button url="/driverlogin">Find Loads</Button>
        </div>
      </div>
      <img className="mobile__screen" src={Screen} alt="" />
    </div>
  );
};

export default ServiceSession;
