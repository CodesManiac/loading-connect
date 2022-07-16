import React from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import Sidebar from "../../../components/settings/Sidebar";
import "./styles.scss";

const SettingsLayout = ({children}) => {
  return (
    <DashboardLayout>
     <div className="settings">
        <div className="settings-left">
          <Sidebar />
        </div>
        <div className="settings-right">
          {children}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsLayout;
