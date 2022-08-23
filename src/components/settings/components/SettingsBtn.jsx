import React from "react";
import "./btn.scss";

const SettingsBtn = ({ text, action, width, height, color, ground }) => {
  return (
    <button
      className="setting-btn"
      style={{ width: width, height: height, color: color, background: ground}}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default SettingsBtn;
