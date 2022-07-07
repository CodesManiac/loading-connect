// import React, {useState} from "react";
import "./switch.scss";

const Switch = ({ showMonthly, setShowMonthly}) => {
  return (
    <div className="switch__container">
      <p className={!showMonthly ? "green-color" : "normal-color"}>Monthly</p>
      {/* <label className="switch" htmlFor="">
        <input type="checkbox" />
        <span className="slider"></span>
      </label> */}
      <label
        for="checked-toggle"
        class="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="checked-toggle"
          class="sr-only peer"
          checked={showMonthly}
          onClick={() => setShowMonthly(!showMonthly)}
        />
        <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-[rgba(120, 120, 128, 0.32)] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007683] "></div>
        {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span> */}
      </label>
      <p className={showMonthly ? "green-color" : "normal-color"}>Annually</p>
    </div>
  );
};

export default Switch;
