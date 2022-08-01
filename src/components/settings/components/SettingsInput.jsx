import React from 'react';

const SettingsInput = ({id, holder, type}) => {

  return (
    <div>
        <input type={type} id={id} name={id} placeholder={holder} required className='settings-input input-field w-full' ></input>
    </div>
  )
}

export default SettingsInput;