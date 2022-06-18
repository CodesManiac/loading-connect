import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/signup_logo.png";
import { Link } from "react-router-dom";
import Button from "../linkBtn/Button";
import Input from "../input/Input";
import "./right.scss";

const LogiForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
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
            type={passwordType}
            labelName="Password"
            id="pword"
            holder="Password"
            value={passwordInput}
            onChange={handlePasswordChange}
          />
          <div className="eye-icon" onClick={togglePassword}>
            {passwordType === "password" ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </div>
        </div>
        <div className="before-signup ml-auto mb-8 mt-1">
          <Link to="/forget-password">Forgot Password?</Link>
        </div>

        <div className="signup-btn">
          <Button children="Login" url="" />
        </div>
        <div className="after-signup">
          <div>
            Already have an account? <Link to="/login">Login</Link>
          </div>
          <div>
            Are you a truck owner? <Link to="/signup">Login to deliver</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogiForm;
