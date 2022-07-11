import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";

import Navbar from "./navbar";
import Bell from "../../assets/icons/notificationsBell.png";
import "./styles.scss";
import Notifications from "./notification";

const DashboardLayout = ({ children }) => {
  const [isNotification, setIsNotification] = useState(false);
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
      <Navbar />
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
