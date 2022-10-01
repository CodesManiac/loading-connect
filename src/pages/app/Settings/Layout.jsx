import React from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import Sidebar from "../../../components/settings/Sidebar";
import Profile_image from '../../../assets/images/profile.svg';
import "./styles.scss";

const SettingsLayout = ({children}) => {
  return (
    <DashboardLayout>
     <div className="settings">
        <div className="settings-left">
          <Sidebar 
          Profile_image={Profile_image}
          name='John Doe'
          email='johndoe@example.com'
          out='true'
          />
        </div>
        <div className="settings-right">
          {children}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsLayout;
