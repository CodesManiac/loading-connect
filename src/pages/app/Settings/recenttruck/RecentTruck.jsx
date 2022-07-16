import React from 'react';
import SettingsLayout from '../Layout';
import Middle from '../../Dashboard/Middle';
import Close from '../../../../assets/icons/close.svg'

const RecentTruck = () => {
  return (
    <SettingsLayout>
      <div className="settings-saved-left p-5 w-96">
         <Middle type='Recent Trucks' close={Close}/>
       </div>
    </SettingsLayout>
  )
}

export default RecentTruck