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
  const [passwordType, setPasswordType] = useState("password");
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
      if(passwordLength===0){
        const msg = document.getElementById("msg");
        msg.classList.add("invalid");
        msg.classList.remove("valid");
        errMsg="Password is empty";
      }else if(!uppercasePassword){
        const msg = document.getElementById("msg");
        msg.classList.add("invalid");
        msg.classList.remove("valid");
        errMsg="Password must have a capital letter";
      }else if(!lowercasePassword){
        const msg = document.getElementById("msg");
        msg.classList.add("invalid");
        msg.classList.remove("valid");
        errMsg="Password must have a Lowercase";
      }else if(!digitsPassword){
        const msg = document.getElementById("msg");
        msg.classList.add("invalid");
        msg.classList.remove("valid");
        errMsg="Password must have a digit";
      }else if(!specialCharPassword){
        const msg = document.getElementById("msg");
        msg.classList.add("invalid");
        msg.classList.remove("valid");
        errMsg="Password must have a Special Characters";
      }else if(!minLengthPassword){
        const msg = document.getElementById("msg");
        msg.classList.add("invalid");
        msg.classList.remove("valid");
        errMsg="Password must a minumum of 8 characters";
      }else if(uppercasePassword && lowercasePassword && digitsPassword && specialCharPassword && minLengthPassword){
        const msg = document.getElementById("msg");
        msg.classList.add("valid");
        msg.classList.remove("invalid");
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

  const togglePassword =()=>{
    if(passwordType==="password")
    {
    setPasswordType("text")
    return;
    }
    setPasswordType("password")
  };

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
      <div>
        <div className='long-input' onKeyUp={handleValidation}>
          <Input type={passwordType} labelName='Password' id='pword' holder='Password' value={passwordInput} onChange={handlePasswordChange} />
          <div className='eye-icon' onClick={togglePassword}>
            {passwordType==="password"?<FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
          </div>
        </div>
      </div>
        
      <p id='confirm-msg' errormsg={confirmPasswordError} ></p>
      <div className='long-input' onKeyUp={handleValidation}>
        <Input type={passwordType} labelName='Re-enter Password' id='cpword' holder='Re-enter Password' value={passwordInput} onChange={handlePasswordChange} />
        <div className='eye-icon' onClick={togglePassword}>
          {passwordType==="password"?<FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
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