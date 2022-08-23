import React, { useState } from "react";
import "./styles.scss";
import User from "../../../../assets/images/message-user1.png";
import ratingFull from "../../../../assets/icons/rating-full.svg";
import ratingHalf from "../../../../assets/icons/rating-half.svg";
import dropdownBtn from "../../../../assets/icons/dropdownBtn.svg";
import acceptBtn from "../../../../assets/icons/acceptBtn.svg";
import declineBtn from "../../../../assets/icons/declineBtn.svg";
import negoBtn from "../../../../assets/icons/negoBtn.svg";
import DropDown from "./DropDown";
const Chat = ({
  handleAcceptClose,
  handleDeclineClose,
  handleNegotiateClose,
  handleBlock,
}) => {
  const data = [ratingFull, ratingFull, ratingFull, ratingFull, ratingHalf];

  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(false);
    handleBlock();
  };

  return (
    <div className="chat">
      <div className="right__panel-side">
        <div className="head1">
          <div className="flex">
            <img src={User} alt="/" />
            <h1 className="heading">
              Babatunde Raji
              <div className="icons">
                {data.map((item, index) => (
                  <div key={index}>
                    <img src={item} alt="rating-star" />
                  </div>
                ))}
                <p className="delivered">5 Loads delivered</p>
              </div>
            </h1>
          </div>
          <div className="modal__open">
            <img
              src={dropdownBtn}
              alt="drop-down-btn"
              onClick={() => setDropDown(true)}
            />
            {dropDown && <DropDown onClose={handleDropDown} />}
          </div>
        </div>
      </div>
      <div className="right__panel-side1">
        <div className="container">
          <div>
            <p className="offered">Amuont Offered</p>
            <h2 className="amount">₦2,500.00</h2>
          </div>
          <div className="flex gap-x-2">
            <div
              onClick={handleAcceptClose}
              className="btn__accept cursor-pointer"
            >
              <img src={acceptBtn} alt="accept-btn" />
              <button className="">Accept</button>
            </div>
            <div className="btn__decline" onClick={handleDeclineClose}>
              <img src={declineBtn} alt="decline-btn" />
              <button>Decline</button>
            </div>
            <div onClick={handleNegotiateClose} className="btn__negotiation">
              <img src={negoBtn} alt="decline-btn" />
              <button>Negotiation</button>
            </div>
          </div>
        </div>
        <div>
          <p className="messages">
            <span> Today</span>
            <span>Babatunde is avaliable to pick up Load</span>
            <span>Babatunde is requesting ₦2,500 to pick up load</span>
          </p>
        </div>
        {/*  */}
        <div className="flex">
          <img className="w-[30px] h-[30px] ml-4" src={User} alt="" />
          <div className="messages__box ml-1">
            <p>
              Nec risus tristique eget sed id ac sagittis, montes. Facilisi.
            </p>
          </div>
        </div>
        <div className="messages__box mt-1 ml-12">
          <p>
            Massa vitae enim volutpat quam at facilisi semper sed ultrices orci.
          </p>
        </div>
        <p className="time__ ml-12">3:00 pm</p>
        {/*  */}
        <div className="flex justify-between p-5">
          <div></div>
          <div>
            <div className="messages__box1">
              <p>Gravida dui dignissim.</p>
            </div>
            <p className="time__ flex justify-end mr-2 mt-1">3:00 pm</p>
          </div>
        </div>

        <p className="accepted">
          You have accepted the offer to pickup load for ₦2,500{" "}
        </p>
      </div>
    </div>
  );
};

export default Chat;
