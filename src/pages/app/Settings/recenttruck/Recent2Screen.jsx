import React, { useState, useEffect } from "react";
import DashboardLayout from "../../../../components/DashboardLayout";
import TrackLoad from "../../../../assets/icons/tracking-load.png";
import Map from "../../../../assets/images/map.png";
import User1 from "../../../../assets/images/message-user1.png";
import Message from "../../../../assets/icons/message.svg";
import Call from "../../../../assets/icons/call.svg";
import Close from '../../../../assets/icons/close.svg';
import ListOfLoad from "../../History/ListOfLoad"
import LoadDetails from "../savedtruck/LoadDetails";
import ReceiverDetails from "../savedtruck/ReceiverDetails";

const Recent2Screen = () => {
  const [activeUser, setActiveUser] = useState(4);

useEffect(() => {
  setActiveUser(1);
}, [activeUser]);

  return (
    <DashboardLayout>
      <div className="settings">
        <div className="settings-firstCol w-1/4 ">
          <ListOfLoad type='Recently Viewed Trucks' close={Close} />
        </div>
        <div className="settings-secondCol p-5 w-1/4">
          <div className="title font-light flex items-center mb-5">
            <img src={TrackLoad} alt="tracking icon" />
            <span>Load Status </span>
          </div>
          <div className="track-load flex">
            <div className="settings-steps">
              <div className={`inner-step  ${activeUser===1&&"inner-step-first"} ${activeUser===2&&"inner-step-second"} ${activeUser===3&&"inner-step-third"} ${activeUser===4&&"inner-step-last"}`}></div>
            </div>
            <div className="card-section">
              <div className="first-section flex">
                <div className="settings-circle circle-active"></div>
                <div className={`first-section-card  p-3 ${activeUser<1&&"first-section-card-active"}`}>
                  <div className="first-section-card-title">Load Request</div>
                  <div className="first-section-card-company mt-5 mb-2">
                    Truck Company
                  </div>
                  <div className="first-section-card-bottom flex justify-between">
                    <div className="first-section-card-bottom-img">
                      <img src={User1} alt="company" />
                    </div>
                    <div className="first-section-card-bottom-left">
                      <p className="font-bold">John Doe Business</p>
                      <p className="text-yellow">
                        &#9734; &#9734; &#9734; &#9734; &#9734;
                      </p>
                    </div>
                    <img src={Message} alt="" />
                    <img src={Call} alt="" />
                  </div>
                </div>
              </div>
              <div className="first-section flex mt-8">
                <div className={`settings-circle ${activeUser>0&&"circle-active"}`}></div>
                <div className={`first-section-card  p-3 ${activeUser===2&&"first-section-card-active"}`}>
                  <div className="first-section-card-title">Negotiating</div>
                  <div className="first-section-card-company mt-5 mb-2">
                    Sent Offer
                  </div>
                  <div className="first-section-card-bottom flex justify-between">
                    <div className="first-section-card-amount">₦2,500.00</div>
                    <div className="first-section-card-bottom-status">
                      Waiting for response...
                    </div>
                  </div>
                </div>
              </div>
              <div className="first-section flex mt-8">
              <div className={`settings-circle ${activeUser>1&&"circle-active"}`}></div>
                <div className={`first-section-card  p-3 ${activeUser===3&&"first-section-card-active"}`}>
                  <div className="first-section-card-title">
                    Ready for pickup
                  </div>
                  <div className="first-section-card-company mt-5 mb-2">
                    Pickup Location
                  </div>
                  <div className="first-section-card-location">
                    Commercial Ave Sabo yaba, Lagos
                  </div>
                  <div className="first-section-card-map mt-2">
                    <img src={Map} alt="map" />
                  </div>
                </div>
              </div>
              <div className="first-section flex mt-8">
              <div className={`settings-circle ${activeUser>2&&"circle-active"}`}></div>
                <div className={`first-section-card  p-3 ${activeUser===4&&"first-section-card-active"}`}>
                  <div className="first-section-card-title">
                    Out for delivery
                  </div>
                  <div className="first-section-card-company mt-5 mb-2">
                    Destination
                  </div>
                  <div className="first-section-card-location">
                    Admirity Way, Lekki phase 1, Lagos
                  </div>
                </div>
              </div>
              <div className="first-section flex mt-8">
              <div className={`settings-circle ${activeUser>3&&"circle-active"}`}></div>
                <div className={`first-section-card  p-3 ${activeUser===1&&"first-section-card-active"}`}>
                  <div className="first-section-card-title">Delivered</div>
                  <div className="pt-5 text-xs text-grayToggle">
                    <p className="">Your rating</p>
                    <p className="text-yellow">&#9734; &#9734; &#9734; &#9734; &#9734;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="settings-thirdCol w-1/4"><LoadDetails /></div>
        <div className="settings-fourthCol w-1/4"><ReceiverDetails /></div>
      </div>
    </DashboardLayout>
  );
};

export default Recent2Screen;
