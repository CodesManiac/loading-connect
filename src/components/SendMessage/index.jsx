import React from "react";
import "./styles.scss";

import Image from '../../assets/icons/send-image.png'
import Send from '../../assets/icons/send.png'

const SendMessage = ({ text, action, width, height }) => {
  return (
    <div className="send-message">
      <img src={Image} alt="" className="ml-3" />
      <input type="text" placeholder="Type a message.." />
      <div className="send"><img src={Send} alt="" /></div>
    </div>
  );
};

export default SendMessage;
