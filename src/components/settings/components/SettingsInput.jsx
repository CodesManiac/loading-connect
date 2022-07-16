import React from 'react';

const SettingsInput = ({labelName, id, holder, type}) => {

  return (
    <div>
        <input type={type} id={id} name={id} placeholder={holder} required className='input-field pl-9 pt-2 pb-3.5 w-full' ></input>
    </div>
  )
}

export default SettingsInput;