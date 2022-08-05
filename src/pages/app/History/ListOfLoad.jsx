import React, { useState } from "react";
import LoadCard from "./LoadCard";
import Sort from "../../../components/sort";
import Filter from "../../../components/filter";


const Middle = ({ type, display }) => {
  const [activeCard, setActiveCard] = useState(1);
  const data = [
    {
      from: "Commercial Ave Sabo yaba, Lagos",
      to: "Admirity Way, Lekki phase 1, Lagos",
      weight: "523.2",
      capacity: "Full Truck Load",
      pickupDate: "January 25",
      category: "Mini Truck",
      distance: "23",
      estimate: "200,000",
      seller: "John Doe",
      time: "Just now",
      status: "Waiting for an offer.....",
    },
    {
      from: "Commercial Ave Sabo yaba, Lagos",
      to: "Admirity Way, Lekki phase 1, Lagos",
      weight: "523.2",
      capacity: "Full Truck Load",
      pickupDate: "January 25",
      category: "Mini Truck",
      distance: "23",
      estimate: "200,000",
      seller: "John Doe",
      time: "Just now",
      status: "Negotiating",
    },
    {
      from: "Commercial Ave Sabo yaba, Lagos",
      to: "Admirity Way, Lekki phase 1, Lagos",
      weight: "523.2",
      capacity: "Full Truck Load",
      pickupDate: "January 25",
      category: "Mini Truck",
      distance: "23",
      estimate: "200,000",
      seller: "John Doe",
      time: "Just now",
      status: "offer",
    },
  ];
  return (
    <div className="text-xs">
      <div className="flex justify-between">
        <div>
          <p className="font-bold">{type}</p>
        </div>
        <div className="flex gap-5 z-20">
          <Sort />
          <Filter />
        </div>
      </div>
      <hr className="text-gray my-3" />
      <div className="card-item">
        {data.map((item, index) => (
          <LoadCard
            card={1}
            details={item}
            index={index}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Middle;
