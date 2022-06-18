import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/signup_logo.png";
import Button from "../button";
import Input from "../input/Input";
import "./styles.scss";

const RightSignup = () => {
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
        <h1>Reset Passoword</h1>
      </div>
      <div className="mb-8 -mt-3">Enter a new password</div>
      <form className="signup-form">
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

        <div className="long-input">
          <Input
            type={passwordType}
            labelName="Re-enter Password"
            id="cpword"
            holder="Re-enter Password"
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

        <div className="mt-5 forgot-btn">
          <Button text="Continue" width="100%" />
        </div>
      </form>
    </div>
  );
};

export default RightSignup;
