import React from "react";
import "./btn.scss";

const Button = ({ text, action, width, height }) => {
  return (
    <button
      className="btn"
      style={{ width: width, height: height }}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
