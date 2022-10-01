import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";

import Navbar from "./navbar";
import Bell from "../../assets/icons/notificationsBell.png";
import "./styles.scss";
import Notifications from "./notification";
import DriverNavbar from "./DriverNavbar";

const DashboardLayout = ({ children, out }) => {
  const [isNotification, setIsNotification] = useState(false);
  const [nav] = useState(out);
  // useEffect(() => {
  //   const auth = window.localStorage.getItem("auth");
  //   if (!auth) {
  //     window.location.replace("/")
  //     // <Navigate to="/" replace={true} />
  //   }
  // }, []);

  const handleNotificationClose = () => {
    setIsNotification(!isNotification);
  };
  return (
    <div className="dashboardlayout">
      {nav ? <DriverNavbar /> : <Navbar />}
      <div
        className="notification bg-primary"
        onClick={handleNotificationClose}
      >
        <img src={Bell} alt="" />
      </div>
      <main>
        {isNotification && <Notifications onClose={handleNotificationClose} />}
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
