import React from "react";
// import { Link, Navigate } from "react-router-dom";

import Navbar from "./navbar";
import Bell from "../../assets/icons/notificationsBell.png";
import "./styles.scss";

const DashboardLayout = ({ children }) => {
  // useEffect(() => {
  //   const auth = window.localStorage.getItem("auth");
  //   if (!auth) {
  //     window.location.replace("/")
  //     // <Navigate to="/" replace={true} />
  //   }
  // }, []);
  return (
    <div className="dashboardlayout">
      <Navbar />
      <div className="notification bg-primary">
        <img src={Bell} alt="" />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
