import React from "react";

import DashboardLayout from "../../../components/DashboardLayout";
import "./styles.scss";
import Middle from "../../../components/middleDashboard/index"

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="dashboard">
        <div className="dashboard-left">left</div>
        <div className="dashboard-middle"><Middle /></div>
        <div className="dashboard-right">right</div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
