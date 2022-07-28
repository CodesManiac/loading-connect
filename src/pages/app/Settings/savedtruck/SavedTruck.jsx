import React from 'react';
import SettingsLayout from '../Layout';
import Middle from '../../Dashboard/Middle';
import Close from '../../../../assets/icons/close.svg';

const SavedTruck = () => {
  return (
    <SettingsLayout>
      <div className="p-5 w-96">
         <Middle type='Saved Trucks' close={Close} newPath="/open" />
       </div>
       <div className="settings-saved-right">
          
        </div>
    </SettingsLayout>
  )
}

export default SavedTruck;