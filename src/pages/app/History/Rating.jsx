import React from "react";
import { useState } from "react";
import StarIcon from "./StarIcon";

const Rating = ({ maxRating, selectedRating, updateRating }) => {
  const [highLightedRating, setHighLightedRating] = useState(0);
  const renderStar = () => {
    const starsToRender = [];

    for (let i = 0; i < maxRating; i++) {
      const arrToUseForHighlighting = highLightedRating
        ? highLightedRating
        : selectedRating;

      starsToRender.push(
        <span
          onClick={() => updateRating(i + 1)}
          onMouseOver={() => setHighLightedRating(i + 1)}
          onMouseLeave={() => setHighLightedRating(0)}
        >
          <StarIcon color={i < arrToUseForHighlighting ? "#007683" : ""} />
        </span>
      );
    }
    return starsToRender;
  };

  return <>{renderStar()}</>;
};

export default Rating;
