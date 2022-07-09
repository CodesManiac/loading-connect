import React from "react";

import DashboardLayout from "../../../components/DashboardLayout";
import Map from "../../../components/map";
import "./styles.scss";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="dashboard">
        <div className="dashboard-left">left</div>
        <div className="dashboard-middle">midle</div>
        <div className="dashboard-right">
          <Map />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
