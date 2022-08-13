import React from "react";
import "./styles.scss";

const MessageModal = ({ children }) => {
  return (
    <div className="modal-container">
      <div className="modal flex flex-col w-80 text-center justify-center items-center rounded-lg gap-2 py-8 px-4">
        {children}
      </div>
    </div>
  );
};

export default MessageModal;
