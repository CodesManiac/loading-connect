import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/signup_logo.png";
import { Link } from "react-router-dom";
import Button from "../button/index";
import Input from "../input/Input";

const RightDriverLogin = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  return (
    <div className="user-signup-right">
      <div className="signup-logo">
        <img src={Logo} alt="load connect logo"></img>
      </div>
      <div className="signup-header">
        <h1>Login</h1>
      </div>
      <form className="signup-form">
        <div className="long-input">
          <Input
            type="text"
            labelName="Email / Phone Number"
            id="email"
            holder="Email / Phone Number"
          />
        </div>

        <div className="long-input">
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
        <div className="before-signup ml-auto mb-8 mt-1">
          <Link to="/forget-password">Forgot Password?</Link>
        </div>

        <div className="signup-btn">
          <Button width='100%' text='Login'/>
        </div>
        <div className="after-login">
          <div>
            You have a truck but not an account? <Link to="/driversignup">Sign up</Link>
          </div>
          <div>
            You want to send a package? <Link to="/login">Login to send a package</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RightDriverLogin;
