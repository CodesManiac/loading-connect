import React from "react";
import { Faq, NavBar, Footer, Service, Work, Header, DownloadSession } from "../../components";
import { works } from "../../data";
import TopScreen from "../../assets/images/phone.svg";
import BottomScreen from "../../assets/images/phone2.svg";
//landing page
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Header />
      <Service />
      <Work dataObject={works} text="Find Loads" url="/driverlogin"/>
      <DownloadSession url={TopScreen} Img={BottomScreen} />
      <Faq/>
      <Footer/>
    </div>
  );
};

export default Home;
