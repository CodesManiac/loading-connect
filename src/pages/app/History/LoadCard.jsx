import React from "react";
import Message from "../../../assets/icons/message.svg";
import Call from "../../../assets/icons/call.svg";

const index = ({ details, index, activeCard, setActiveCard }) => {
  return (
    <div key={index} onClick={() => setActiveCard(index)}>
      <div
        className={`rounded-xl bg-gray  mb-4 w-[343px] cursor-pointer ${
          activeCard === index && "border-[5px] border-secondary"
        }`}
      >
        <div className="p-3">
          <div className="flex justify-between">
            <p className="font-light">
              From
              <div className="font-medium"> {details.from}</div>
            </p>
          </div>
          <p className="font-light my-3">
            To
            <div className="font-medium"> {details.to}</div>
          </p>
          <div className="flex mt-1.5 justify-between">
            <div className="w-30">
              <p className="font-light">Weight</p>
              <p className="font-medium">{details.weight}</p>
            </div>
            <div className="w-30">
              <p className="font-light">Capacity</p>
              <p className="font-medium">{details.capacity}</p>
            </div>
            <div className="w-30">
              <p className="font-light">Pickup date</p>
              <p className="font-medium">{details.pickupDate}</p>
            </div>
          </div>
          <div className="flex my-3 justify-between">
            <div className="w-30">
              <p className="font-light">Category</p>
              <p className="font-medium">{details.category}</p>
            </div>
            <div className="w-30">
              <p className="font-light">Distance</p>
              <p className="font-medium">{details.distance}</p>
            </div>
            <div className="w-30">
              <p className="font-light">Estimate free</p>
              <p className="font-medium text-secondary">{details.estimate}</p>
            </div>
          </div>
          <div className="flex justify-between mt-2 pl-1.5">
            <div>
              <p className="font-bold">{details.seller}</p>
              <p className="font-light">{details.time}</p>
            </div>
            <div className=" flex gap-4 items-center">
              <div className="bg-darkGray rounded-lg p-3">
                <a href="/app/dashboard">
                  <img src={Message} alt="add" className="w-4"></img>
                </a>
              </div>
              <div className="bg-darkGray rounded-lg p-3">
                <a href="/app/dashboard">
                  <img src={Call} alt="telephone" className="w-4"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFE081]  text-center font-light mt-4 rounded-b-xl p-2">
          {details.status}
        </div>
      </div>
    </div>
  );
};

export default index;
