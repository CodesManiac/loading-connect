import React from "react";
import { useState } from "react";
import SettingsSwitch from "../../../../components/settings/settingsSwitch/SettingsSwitch";
import SettingsLayout from "../Layout";

const Notification = () => {
  // const action = "checked"

  const [notifications, setNotifications] = useState({
    allNotification: true,
    offerReceived: true,
    offerAccepted: false,
    loadPickup: true,
    loadDelivered: true,
    deliveryError: true,
    allMessages: true,
    activeLoad: true,
    loadConnected: true,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allNotification") {
      setNotifications({
        allNotification: checked,
        offerReceived: checked,
        offerAccepted: checked,
        loadPickup: checked,
        loadDelivered: checked,
        deliveryError: checked,
        allMessages: checked,
        activeLoad: checked,
        loadConnected: checked,
      });
      return;
    }
    setNotifications({ ...notifications, [name]: checked });
  };
  return (
    <SettingsLayout>
      <div className="pl-10 pt-7">
        <SettingsSwitch
          checkbox={notifications.allNotification}
          name="allNotification"
          child="All Notifications"
          onChecked={handleChange}
        />
        <hr className="text-hrgray my-6 opacity-10" />

        <p className="text-xs text-grayToggle">Load Updates</p>
        <SettingsSwitch
          // allNotification={!action}
          checkbox={notifications.offerReceived}
          name="offerReceived"
          onChecked={handleChange}
          child="Offer Received"
        />
        <SettingsSwitch
          // allNotification={!action}
          checkbox={notifications.offerAccepted}
          name="offerAccepted"
          onChecked={handleChange}
          child="Offer Accepted"
        />
        <SettingsSwitch
          checkbox={notifications.loadPickup}
          name="loadPickup"
          onChecked={handleChange}
          child="Load Picked Up"
        />
        <SettingsSwitch
          checkbox={notifications.loadDelivered}
          name="loadDelivered"
          onChecked={handleChange}
          child="Load Delivered"
        />
        <SettingsSwitch
          checkbox={notifications.deliveryError}
          name="deliveryError"
          onChecked={handleChange}
          child="Delivery Errors"
        />
        <hr className="text-hrgray my-6 opacity-10" />

        <p className="text-xs text-grayToggle">Messages</p>
        <SettingsSwitch
          checkbox={notifications.allMessages}
          name="allMessages"
          onChecked={handleChange}
          child="All Messages"
        />
        <SettingsSwitch
          checkbox={notifications.activeLoad}
          name="activeLoad"
          onChecked={handleChange}
          child="From Active Loads Only"
        />
        <hr className="text-hrgray my-6 opacity-10" />

        <p className="text-xs text-grayToggle">Others</p>
        <SettingsSwitch
          checkbox={notifications.loadConnected}
          name="loadConnected"
          onChecked={handleChange}
          child="From Load Connect"
        />
      </div>
    </SettingsLayout>
  );
};

export default Notification;
