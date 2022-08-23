import React, { useRef, useState } from "react";
import filter from "../../assets/icons/filter.svg";
import fill from "../../assets/icons/fill-filter.svg";
import close from "../../assets/icons/close-fill.svg";
import Button from "../button";
import greenTick from '../../assets/icons/green-tick.svg';
import Slider from "../slider";
import { useEffect } from "react";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [seleectLoadStatus, setSeleectLoadStatus] = useState(["Negotiating", "Full Truck Load", "Mini Truck"]);
  const [weightValue, setWeightValue] = useState(0);

  const handleSelectedStatus = (status) => {
    if (seleectLoadStatus.includes(status)) {
      const remaingStatus = seleectLoadStatus.filter((item) => item !== status);
      return setSeleectLoadStatus(remaingStatus);
    }
    setSeleectLoadStatus([...seleectLoadStatus, status]);
  };

  const handleClickOutside=()=>{
    setShowFilter(showFilter)
  }

  const useOutsideClick = () =>{
    const ref = useRef();

    useEffect(()=>{
      const handleClick =(event)=>{
        // callback();
        if (ref.current && !ref.current.contains(event.target)) {
          handleClickOutside();
        }
      };
      document.addEventListener('click', handleClick);

      return ()=>{
        document.removeEventListener('click', handleClick);
      };
    }, []);

    return ref;
  };

  const ref = useOutsideClick(handleClickOutside)

  const status = [
    "Created",
    "Negotiating",
    "Out for delivery",
    "Ready for pickup",
    "Delivered",
    "Cancelled",
    "Delivery failed",
    "Expired",
  ];

  const type = ["Full Truck Load", "Less Than Truck Load"];

  const category = ["Any", "Mini Truck", "Van", "Trailer"];
  return (
    <div ref={ref} className="cursor-pointer relative z-10">
      <img src={filter} alt="" onClick={() => setShowFilter(!showFilter)}></img>
      {showFilter && (
        <div  className="w-96 absolute -top-3 left-20 text-sm bg-semiwhite rounded-lg p-4">
          <div className=" flex justify-between text-grayToggle">
            <div className="flex gap-2">
              <img src={fill} alt=""></img>
              <p className="text-xs">Filter By</p>
            </div>
            <div>
              <img
                src={close}
                alt=""
                onClick={() => setShowFilter(!showFilter)}
              ></img>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-semiblack">
            <div className="mt-4">
              <p className="text-xs text-grayToggle">Load Status</p>
              <div className="flex flex-wrap gap-1">
                {status.map((child, index) => (
                  <p
                    className={` text-center font-medium opacity-50 border rounded-2xl py-1 px-2 mt-1 ${
                      seleectLoadStatus.includes(child) &&
                      "border-secondary border-2 flex gap-1 opacity-90"
                    }`}
                    onClick={() => handleSelectedStatus(child)}
                    key={index}
                  >
                    {seleectLoadStatus.includes(child) && <img src={greenTick} alt="g" className="flex flex-col"></img>}
                    {child}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-grayToggle">Load Type</p>
              <div className="flex flez-wrap gap-1">
                {type.map((child, index) => (
                  <p 
                    className={` text-center font-medium opacity-50 border rounded-2xl py-1 px-2 mt-1 ${
                      seleectLoadStatus.includes(child) &&
                      "border-secondary border-2 flex gap-1 opacity-90"
                    }`}
                    onClick={() => handleSelectedStatus(child)}
                    key={index}
                  >
                    {seleectLoadStatus.includes(child) && <img src={greenTick} alt="g" className="flex flex-col"></img>}
                    {child}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-grayToggle">Truck Category</p>
              <div className="flex flex-wrap gap-1">
                {category.map((child, index) => (
                  <p
                    className={` text-center font-medium opacity-50 border rounded-2xl py-1 px-2 mt-1 ${
                      seleectLoadStatus.includes(child) &&
                      "border-secondary border-2 flex gap-1 opacity-90"
                    }`}
                    onClick={() => handleSelectedStatus(child)}
                    key={index}
                  >
                    {seleectLoadStatus.includes(child) && <img src={greenTick} alt="g" className="flex flex-col"></img>}
                    {child}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center text-center">
              <p className="text-xs text-left text-grayToggle">Load Weight</p>
              <div className="mb-10">
                <div className="flex justify-between mt-1 mb-1 items-center">
                  <p className="bg-gray p-2 rounded-lg">0kg</p>
                  <p>{weightValue}kg</p>
                  <p className="bg-gray p-2 rounded-lg">100kg</p>
                </div>
                <div className="mb-3">
                  <Slider weightValue={weightValue} setWeightValue={setWeightValue}/>
                </div>
              </div>
              
              <Button text="Apply Filters" />
              <p className="text-primary my-8" onClick={()=> setSeleectLoadStatus('') }>Reset</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
