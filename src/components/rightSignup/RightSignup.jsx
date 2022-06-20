import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/images/signup_logo.png'
import { Link } from 'react-router-dom'
import Button from '../linkBtn/Button'
import Input from '../input/Input'
import './right.scss'

const RightSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCon, setShowPasswordCon] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
  const handlePasswordChange =(e)=>{
    const passwordInputValue = e.target.value.trim();
    // const cpasswordInputValue = e.target.value.trim();
    const passwordInputId = e.target.name;
    const newPasswordInput = {...passwordInput, [passwordInputId]:passwordInputValue}
    setPasswordInput(newPasswordInput);
  };

  const handleValidation =(e)=>{
    const passwordInputId = e.target.name
    
    if(passwordInputId === 'pword'){
      const passwordInputValue = e.target.value.trim();
      const uppercaseRegExp   = /(?=.*?[A-Z])/;
      const lowercaseRegExp   = /(?=.*?[a-z])/;
      const digitsRegExp      = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp   = /.{8,}/;

      const passwordLength =      passwordInputValue.length;
      const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
      const digitsPassword =      digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword =   minLengthRegExp.test(passwordInputValue);

      let errMsg ="";
      const msg = document.getElementById("msg");
      msg.classList.remove("invalid-empty");
      msg.classList.remove("invalid-lower");
      msg.classList.remove("invalid-digit");
      msg.classList.remove("invalid-special");
      msg.classList.remove("invalid-char");
      msg.classList.remove("invalid");
      msg.classList.remove("valid");
      
      if(passwordLength===0){
        msg.classList.add("invalid");
        msg.classList.add("invalid-empty");
        errMsg="Password must not be empty";
      }else if(!uppercasePassword){
        msg.classList.add("invalid");
        msg.classList.add("invalid");
        errMsg="Password must have a capital letter";
      }else if(!lowercasePassword){
        msg.classList.add("invalid");
        msg.classList.add("invalid-lower");
        errMsg="Password must have a Lowercase";
      }else if(!digitsPassword){
        msg.classList.add("invalid");
        msg.classList.add("invalid-digit");
        errMsg="Password must have a digit";
      }else if(!specialCharPassword){
        msg.classList.add("invalid");
        msg.classList.add("invalid-special");
        errMsg="Password must have a special character";
      }else if(!minLengthPassword){
        msg.classList.add("invalid");
        msg.classList.add("invalid-char");
        errMsg="Password must have a minumum of 8 characters";
      }else if(uppercasePassword && lowercasePassword && digitsPassword && specialCharPassword && minLengthPassword){
        msg.classList.add("valid");
      }else{
        errMsg="";
      }
      setPasswordError(errMsg);
      }

  
    if(passwordInputId === 'cpword'){
      const cpasswordInputValue = e.target.value.trim();
      const passwordInputValue = document.getElementById('pword').value;
      if(cpasswordInputValue !== passwordInputValue){
        const confirmMsg = document.getElementById("confirm-msg");
        confirmMsg.classList.add("invalid");
        confirmMsg.classList.remove("valid");
        setConfirmPasswordError('Password does not match');
      }
      else{
        const confirmMsg = document.getElementById("confirm-msg");
        confirmMsg.classList.add("valid");
        confirmMsg.classList.remove("invalid");
        setConfirmPasswordError('');
      }
    }
  }


  return (
    <div className='user-signup-right'>
      <div className='signup-logo'>
        <img src={Logo} alt='load connect logo'></img>
      </div>
      <div className='signup-header'>
        <h1>Sign Up</h1>
      </div>
      <form className='signup-form'>
      <div className='first-part'>
        <div className='short-input fname-input'>
          <Input type='text' labelName='First Name' id='fname' holder='First Name'/>
        </div>
            
        <div className='short-input'>
          <Input type='text' labelName='Last Name' id='lname' holder='Last Name' />
        </div>
      </div>

      <div className='long-input'>
        <Input type='number' labelName='Phone Number' id='pnumber' holder='Phone Number'/>
      </div>

      <div className='long-input'>
        <Input type='email' labelName='Email' id='email' holder='Email'/>
      </div>

      <p id='msg' errormsg={passwordError}></p>
      <div className='flex input-control' >
      {/* <div  className='error' >
        <div className="error-text">
    Password short
        </div>
        <div className="error cancel">X</div>
      </div> */}
        <div className='long-input' onKeyUp={handleValidation}>
          
          <Input type={showPassword?"text":"password"} labelName='Password' id='pword' holder='Password' value={passwordInput} onChange={handlePasswordChange} />
          <div className='eye-icon' onClick={()=>setShowPassword(!showPassword)}>
            {!showPassword?<FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
          </div>
        </div>
      </div>
        
      <p id='confirm-msg' errormsg={confirmPasswordError} ></p>
      <div className='long-input' onKeyUp={handleValidation}>
        <Input type={showPasswordCon?"text":"password"} labelName='Re-enter Password' id='cpword' holder='Re-enter Password' value={passwordInput} onChange={handlePasswordChange} />
        <div className='eye-icon' onClick={()=>setShowPasswordCon(!showPasswordCon)}>
        {!showPasswordCon?<FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
        </div>
      </div>

      <div className='before-signup'>
        <p>By signing up, you agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link></p>
      </div>

      <div className='signup-btn'>
        <Button children='Sign Up' url='/'/>
      </div>
      <div className='after-signup'>
        <div>
          Already have an account? <Link to="/login">Login</Link>
        </div>
        <div>Are you a truck owner?<Link to="/login">Login to deliver</Link></div>
      </div>
      </form>
    </div>
  );
};

export default RightSignup