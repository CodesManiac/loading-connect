import React, { useState } from 'react'
import DriverLoadCard from './DriverLoadCard';

const DriverListOfLoad = () => {
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
    }
  ];
  return (
    <div className="flex flex-wrap justify-center mt-10 gap-10">
        {data.map((item, index) => (
          <DriverLoadCard
            card={1}
            details={item}
            index={index}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        ))}
      </div>
  )
}

export default DriverListOfLoad