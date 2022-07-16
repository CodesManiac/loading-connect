import React from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import Map from "../../../components/map";
import Left from "./Left";
import Middle from "./Middle";
import "./styles.scss";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="dashboard">
        <div className="dashboard-left">
          <Left />
        </div>
        <div className="dashboard-middle">
          <Middle type='Find Trucks' display="hidden" />
        </div>
        <div className="dashboard-right">
          <Map />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
