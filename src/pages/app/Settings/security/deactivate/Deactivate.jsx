import React, { useState } from 'react'
import SecurityLayout from '../Securiy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Input from '../../../../../components/input/Input'
import SettingsBtn from '../../../../../components/settings/components/SettingsBtn'

const Deactivate = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  const handlePasswordChange =(e)=>{
    const passwordInputValue = e.target.value.trim();
    const passwordInputId = e.target.name;
    const newPasswordInput = {...passwordInput, [passwordInputId]:passwordInputValue}
    setPasswordInput(newPasswordInput);
  };

  return (
    <SecurityLayout>
      <div className='flex flex-col gap-3 pl-10 pr-56 py-14'>
        <p>Are you sure you want to deactivate your account?</p>
        <p className='text-secondary mt-5'>This would:</p>
        <p>Delete all your data with Load Connect</p>
        <p>Delete all your load history</p>
        <form className='mt-4'>
          <div className='flex input-control mb-2' >
            <div className='long-input'>
              <Input type={showPassword?"text":"password"} labelName='Password' id='cpass' holder='Password' value={passwordInput} onChange={handlePasswordChange} />
              <div className='eye-icon' onClick={()=>setShowPassword(!showPassword)}>
                {!showPassword?<FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
              </div>
            </div>
          </div>
          <SettingsBtn text='Deactivate account' width='200px'/>
        </form>
      </div>
    </SecurityLayout>
  )
}

export default Deactivate