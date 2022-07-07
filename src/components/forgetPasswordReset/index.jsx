import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/signup_logo.png";
import Button from "../button";
import Input from "../input/Input";
import "./styles.scss";

const RightSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCon, setShowPasswordCon] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value.trim());
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
      msg.classList.remove("invalid-confirm");
      msg.classList.remove("invalid");
      msg.classList.remove("valid");
      
      if(passwordLength===0){
        msg.classList.add("invalid");
        msg.classList.add("invalid-empty");
        errMsg="Password must not be empty";
      }else if(!uppercasePassword){
        msg.classList.add("invalid");
        // msg.classList.add("invalid");
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
        confirmMsg.classList.add("invalid-confirm");
        confirmMsg.classList.remove("valid");
        setConfirmPasswordError('Password does not match');
      }
      else{
        const confirmMsg = document.getElementById("confirm-msg");
        confirmMsg.classList.add("valid");
        confirmMsg.classList.remove("invalid");
        confirmMsg.classList.remove("invalid-confirm");
        setConfirmPasswordError('');
      }
    }
  }

  return (
    <div className="user-signup-right">
      <div className="signup-logo">
        <img src={Logo} alt="load connect logo"></img>
      </div>
      <div className="signup-header">
        <h1>Reset Passoword</h1>
      </div>
      <div className="mb-8 -mt-3">Enter a new password</div>
      <form className="signup-form">

        <p id='msg' errormsg={passwordError}></p>
        <div className="long-input" onKeyUp={handleValidation} >
          <Input
            type={showPassword?"text":"password"}
            labelName="Password"
            id="pword"
            holder="Password"
            value={passwordInput}
            onChange={handlePasswordChange}
          />
          <div className="eye-icon" onClick={()=>setShowPassword(!showPassword)}>
          {!showPassword?<FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
          </div>
        </div>

        <p id='confirm-msg' errormsg={confirmPasswordError} ></p>
        <div className="long-input" onKeyUp={handleValidation} >
          <Input
            type={showPasswordCon?"text":"password"}
            labelName="Re-enter Password"
            id="cpword"
            holder="Re-enter Password"
            value={passwordInput}
            onChange={handlePasswordChange}
          />
          <div className="eye-icon" onClick={()=>setShowPasswordCon(!showPasswordCon)}>
          {!showPasswordCon?<FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
          </div>
        </div>

        <div className="mt-5 forgot-btn">
          <Button text="Continue" width="80%" />
        </div>
      </form>
    </div>
  );
};

export default RightSignup;
