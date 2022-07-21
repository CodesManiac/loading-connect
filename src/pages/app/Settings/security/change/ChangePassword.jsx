import React, { useState } from 'react'
import Input from '../../../../../components/input/Input'
import SettingsBtn from '../../../../../components/settings/components/SettingsBtn'
import SecurityLayout from '../Securiy'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showPasswordCon, setShowPasswordCon] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  const handlePasswordChange =(e)=>{
    const passwordInputValue = e.target.value.trim();
    const passwordInputId = e.target.name;
    const newPasswordInput = {...passwordInput, [passwordInputId]:passwordInputValue}
    setPasswordInput(newPasswordInput);
  };
  
  return (
    <SecurityLayout>
        <form className='pl-10 pr-56 py-14 flex flex-col gap-5'>
            <div className='flex input-control' >
              <div className='long-input'>
                <Input type={showCurrentPassword?"text":"password"} labelName='Current Password' id='cpass' holder='Current Password' value={passwordInput} onChange={handlePasswordChange} />
                <div className='eye-icon' onClick={()=>setShowCurrentPassword(!showCurrentPassword)}>
                  {!showCurrentPassword?<FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                </div>
              </div>
            </div>

            <div className='flex input-control' >
              <div className='long-input'>
                <Input type={showNewPassword?"text":"password"} labelName='New Password' id='npass' holder='New Password' value={passwordInput} onChange={handlePasswordChange} />
                <div className='eye-icon' onClick={()=>setShowNewPassword(!showNewPassword)}>
                  {!showNewPassword?<FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                </div>
              </div>
            </div>

            <div className='long-input'>
              <Input type={showPasswordCon?"text":"password"} labelName='Re-enter New Password' id='c-nPass' holder='Re-enter New Password' value={passwordInput} onChange={handlePasswordChange} />
              <div className='eye-icon' onClick={()=>setShowPasswordCon(!showPasswordCon)}>
              {!showPasswordCon?<FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
              </div>
            </div>
            <SettingsBtn text='Save Changes' width='200px'/>
        </form>
    </SecurityLayout>
  )
}

export default ChangePassword