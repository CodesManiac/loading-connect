import React from "react";
import { Footer, NavBar } from "../../components";
import BgHero from "../../components/bgHero/BgHero";
import Vision from "./components/Vision";
import "./about.scss";

const About = () => {
  return (
    <div>
      <NavBar />
      <BgHero
        text="Here to make logistics around Nigeria Easier than ever"
        subTitle="Load connect is a logistics platform you can use to find truck owners who would help you deliver whatever you want to deliver to where every in the country at prices that are negotiable"
      />
      <Vision />
      <Footer/>
    </div>
  );
};

export default About;
