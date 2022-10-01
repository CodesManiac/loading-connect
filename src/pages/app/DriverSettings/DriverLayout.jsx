import React from 'react'
import DashboardLayout from '../../../components/DashboardLayout'
import Sidebar from '../../../components/settings/Sidebar'
import Profile_image from '../../../assets/images/driver-logo.svg'

const DriverLayout = ({children}) => {
  return (
    <DashboardLayout out='true' >
     <div className="settings">
        <div className="settings-left">
          <Sidebar 
          Profile_image={Profile_image} 
          name='John Doe Business'
          email='johndoebusiness@example.com'
          />
        </div>
        <div className="settings-right">
          {children}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DriverLayout