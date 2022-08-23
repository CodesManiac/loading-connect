import React from "react";
import "./btn.scss";

const Button = ({ text, action, width, height, color, ground }) => {
  return (
    <button
      className="btn"
      style={{ width: width, height: height, color: color, background: ground}}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
