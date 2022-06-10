import React from "react";
import { Faq, NavBar, Footer, Service, Work, Header } from "../../components";
import DownloadSession from "./components/DownloadSession";
import "./index.scss";

//landing page
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Header />
      <Service />
      <Work/>
      <DownloadSession/>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default Home;
