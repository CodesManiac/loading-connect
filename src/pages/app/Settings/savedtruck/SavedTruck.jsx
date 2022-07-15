import React from 'react';
import './style.scss';
import SettingsLayout from '../Layout';
import Middle from '../../Dashboard/Middle';
import Close from '../../../../assets/icons/close.svg'

const SavedTruck = () => {
  return (
    <SettingsLayout>
      <div className="settings-saved-middle">
         <Middle type='Saved Trucks' close={Close}/>
       </div>
       <div className="settings-saved-right">
          
        </div>
    </SettingsLayout>
  )
}

export default SavedTruck