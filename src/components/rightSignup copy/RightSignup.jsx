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
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange =(e)=>{
      setPasswordInput(e.target.value);
  }
  const togglePassword =()=>{
      if(passwordType==="password")
      {
      setPasswordType("text")
      return;
      }
      setPasswordType("password")
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

      <div className='long-input'>
        <Input type={passwordType} labelName='Password' id='pword' holder='Password' value={passwordInput} onChange={handlePasswordChange} />
        <div className='eye-icon' onClick={togglePassword}>
          {passwordType==="password"?<FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
        </div>
      </div>
          
      <div className='long-input'>
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
        <p>Already have an account? <Link to="/login">Login</Link></p>
        <p>Are you a truck owner? <Link to="/signup">Sign up to deliver</Link></p>
      </div>
      </form>
    </div>
  )
}

export default RightSignup