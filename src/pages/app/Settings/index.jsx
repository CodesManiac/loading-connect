import React from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import Profile from "../../../components/settings/Profile";
import Sidebar from "../../../components/settings/Sidebar";
import "./styles.scss";

const Dashboard = () => {
  return (
    <DashboardLayout>
     <div className="settings">
        <div className="settings-left">
          <Sidebar />
        </div>
        <div className="settings-right">
          <Profile />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
