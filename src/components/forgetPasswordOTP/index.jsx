import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/signup_logo.png";
import Button from "../button";
import Input from "../input/Input";
import "./styles.scss";

const RightSignup = () => {
  return (
    <div className="user-signup-right">
      <div className="signup-logo">
        <img src={Logo} alt="load connect logo"></img>
      </div>
      <div className="signup-header">
        <h1>Forgot Password?</h1>
      </div>
      <div className="mb-8 -mt-3">Enter the OTP sent to your email</div>
      <div className="time -mt-7 mb-8">
        01:30 <span>Resend OTP</span>
      </div>
      <form className="signup-form">
        <div className="long-input">
          <Input type="text" labelName="OTP" id="forget" holder="OTP" />
        </div>
        <Link to="/forget-password" className="edit">
          Edit email/phone number
        </Link>

        <div className="mt-5 forgot-btn">
          <Button text="Continue" width="80%" />
        </div>
        <div className="after-login">
          <p>
            Remembered your password? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RightSignup;
