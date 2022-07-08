import React from "react";
import { NavBar, Work, DownloadSession, Faq, Footer } from "../../components";
import HeroPage from "./components/HeroPage";
import ServiceSession from "./components/serviceSession/ServiceSession";
import { truck } from "../../data";
import TopScreen from "../../assets/images/truckscreen.svg"
import BottomScreen from "../../assets/images/truckscreen2.svg"

const HowItWork = () => {
  return (
    <div>
        <NavBar/>
        <HeroPage/>
        <ServiceSession />
        <Work dataObject={truck} text="Create Load" url="/login"/>
        <DownloadSession url={TopScreen} Img={BottomScreen}/>
        <Faq/>
        <Footer/>
    </div>
  );
};

export default HowItWork;
