import React from "react";
const StarIcon = ({ color, onClick }) => {
  return (
    <svg
      width="59"
      height="56"
      viewBox="0 0 59 56"
      fill={color || "#E5E5E5"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M29.5 44.6513L47.2675 55.375L42.5525 35.1637L58.25 21.565L37.5788 19.8113L29.5 0.75L21.4212 19.8113L0.75 21.565L16.4475 35.1637L11.7325 55.375L29.5 44.6513Z" />
    </svg>
  );
};

export default StarIcon;
