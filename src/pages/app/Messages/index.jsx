import React, { useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import SendMessage from "../../../components/SendMessage";
import Search from "../../../assets/icons/search.png";
import User1 from "../../../assets/images/message-user1.png";
import User2 from "../../../assets/images/message-user2.png";
import Chat from "./Chat";
import "./styles.scss";
import AcceptCard from "./AcceptCard";
import DeclineCard from "./DeclineCard";
import NegotiateCard from "./NegotiateCard";
import BlockCard from "./BlockCard";

const Messages = () => {
  const [isAccept, setIsAccept] = useState(false);
  const [isDecline, setIsDecline] = useState(false);
  const [isNegotiate, setIsNegotiate] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const handleAcceptClose = () => {
    setIsAccept(!isAccept);
  };
  const handleDeclineClose = () => {
    setIsDecline(!isDecline);
  };
  const handleNegotiateClose = () => {
    setIsNegotiate(!isNegotiate);
  };

  const handleBlock = () => {
    setIsBlock(!isBlock);
  };
  const [activeUser, setActiveUser] = useState(1);
  const data = [
    {
      img: User1,
      name: "Babatunde Raji",
      text: "And is it in a box or just as it is in the pictures?",
      unread: 2,
    },
    {
      img: User2,
      name: "Chris Alli",
      text: "And is it in a box or just as it is in the pictures?",
      unread: 4,
    },
    {
      img: User1,
      name: "Chris Alli",
      text: "And is it in a box or just as it is in the pictures?",
      unread: 0,
    },
    {
      img: User2,
      name: "Chris Alli",
      text: "And is it in a box or just as it is in the pictures?",
      unread: 0,
    },
  ];

  return (
    <DashboardLayout>
      {isAccept && <AcceptCard onClose={handleAcceptClose} />}
      {isDecline && <DeclineCard onClose={handleDeclineClose} />}
      {isNegotiate && <NegotiateCard onClose={handleNegotiateClose} />}
      {isBlock && <BlockCard onClose={handleBlock} />}

      <div className="messages">
        <div className="left-panel">
          <div className="search">
            <img src={Search} alt="" />
            <input type="text" placeholder="Start typing to search" />
          </div>
          <hr />
          <div className="user-container">
            {data.map((user, index) => (
              <div
                className={`user-card ${
                  activeUser === index && "user-card-active"
                } `}
                key={index}
                onClick={() => setActiveUser(index)}
              >
                <div className="user-img">
                  <img src={user.img} alt="" />
                </div>
                <div className="user-left">
                  <div>
                    <div className="name">{user.name}</div>
                    <div className={`text ${user.unread > 0 && "text-active"}`}>
                      {user.text}
                    </div>
                  </div>
                  {user.unread > 0 && (
                    <div className="number-of-message">{user.unread}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-panel">
          <Chat
            handleAcceptClose={handleAcceptClose}
            handleDeclineClose={handleDeclineClose}
            handleNegotiateClose={handleNegotiateClose}
            handleBlock={handleBlock}
          />
          <div className="send-container">
            <SendMessage />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
