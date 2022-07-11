import React from "react";
import Check from "../../assets/icons/check_circle.png";
import Bell from "../../assets/icons/notificationsBell.png";
import Partnership from "../../assets/icons/partnership.png";

import "./styles.scss";

const Notifications = ({ onClose }) => {
  const data = [
    {
      title: "Notification Title",
      text: "Placerat odio nisl sit pharetra felis donec feugiat. Facilisis vel id suspendisse lorem sed proin vitae. Et in amet a nibh. Lorem amet.",
      date: "5/01/2022",
      type: "notification",
      status: "unread",
    },
    {
      title: "Notification Title",
      text: "Placerat odio nisl sit pharetra felis donec feugiat. Facilisis vel id suspendisse lorem sed proin vitae. Et in amet a nibh. Lorem amet.",
      date: "5/01/2022",
      type: "notification",
      status: "unread",
    },
    {
      title: "Notification Title",
      text: "Placerat odio nisl sit pharetra felis donec feugiat. Facilisis vel id suspendisse lorem sed proin vitae. Et in amet a nibh. Lorem amet.",
      date: "5/01/2022",
      type: "notification",
      status: "unread",
    },
    {
      title: "Notification Title",
      text: "Placerat odio nisl sit pharetra felis donec feugiat. Facilisis vel id suspendisse lorem sed proin vitae. Et in amet a nibh. Lorem amet.",
      date: "5/01/2022",
      type: "notification",
      status: "unread",
    },
    {
      title: "Notification Title",
      text: "Placerat odio nisl sit pharetra felis donec feugiat. Facilisis vel id suspendisse lorem sed proin vitae. Et in amet a nibh. Lorem amet.",
      date: "5/01/2022",
      type: "Negotiation",
      status: "unread",
    },
    {
      title: "Notification Title",
      text: "Placerat odio nisl sit pharetra felis donec feugiat. Facilisis vel id suspendisse lorem sed proin vitae. Et in amet a nibh. Lorem amet.",
      date: "5/01/2022",
      type: "notification",
      status: "read",
    },
  ];
  return (
    <div className="notification-component">
      <div className="notification-inner bg-primary" onClick={onClose}>
        <img src={Bell} alt="" />
      </div>
      <div className="container">
        <div className="header">
          <div className="title"> Notification</div>
          <div className="close" onClick={onClose}>
            X
          </div>
        </div>
        <hr />
        <div className="container-wrapper">
          {data.map((notification, index) => (
            <div
              className={`card ${
                notification.status === "read" && "read-card"
              }`}
              key={index}
            >
              <div className="icon">
                <img
                  src={
                    notification.type === "notification" ? Check : Partnership
                  }
                  alt="check icon"
                />
              </div>
              <div className="content">
                <div className="title">{notification.title}</div>
                <div className="text">{notification.text}</div>
                <div className="date">{notification.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
