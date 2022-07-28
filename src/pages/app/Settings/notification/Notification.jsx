import React from 'react'
import { useState } from 'react'
import SettingsSwitch from '../../../../components/settings/settingsSwitch/SettingsSwitch'
import SettingsLayout from '../Layout'

const Notification = () => {
  // const action = "checked"
  const [allNotification, setAllNotification] = useState(0);
  return (
    <SettingsLayout>
        <div className='pl-10 pt-7' >
            <SettingsSwitch
            onClick={()=>{setAllNotification(allNotification)}}
            // allNotification = {action}
            // {allNotification ? "checked" : null}
            child="All Notifications" />
          <hr className='text-hrgray my-6'/>

          <p className='text-xs text-grayToggle'>Load Updates</p>
          <SettingsSwitch
          // allNotification={!action}
          child="Offer Received" />
          <SettingsSwitch
          // allNotification={!action}
          child="Offer Accepted" />
          <SettingsSwitch
          child="Load Picked Up" />
          <SettingsSwitch
          child="Load Delivered" />
          <SettingsSwitch
          child="Delivery Errors" />
          <hr className='text-hrgray my-6'/>

          <p className='text-xs text-grayToggle'>Messages</p>
          <SettingsSwitch
          child="All Messages" />
          <SettingsSwitch
          child="From Active Loads Only" />
          <hr className='text-hrgray my-6'/>

          <p className='text-xs text-grayToggle'>Others</p>
          <SettingsSwitch
          child="From Load Connect" />
        </div>
    </SettingsLayout>
  )
}

export default Notification