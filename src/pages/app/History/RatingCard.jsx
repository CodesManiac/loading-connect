import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MessageModal from "./MessageModal";
import Rating from "./Rating";

const RatingCard = () => {
  const [rating, setRating] = useState(0);

  return (
    <MessageModal>
      <h4 className="font-bold text-[#19352A] w-[343px] h-[180px] text-[20px]">
        How was your experience with this sender?
      </h4>
      <div className="flex gap-x-3 mb-6">
        <Rating
          maxRating={5}
          selectedRating={rating}
          updateRating={setRating}
        />
      </div>
      <textarea
        className="flex flex-row items-center w-full h-[67px] resize-none overflow-hidden bg-[#F7F7F7] outline-none rounded-[10px] p-[28px] "
        placeholder="Describe Your Experince"
      ></textarea>
      <div className="flex flex-col mt-2 gap-2">
        <Link to="/">
          <button className="bg-[#007683] text-white w-[358px] h-[68px] rounded-[10px]">
            Save and Continue
          </button>
        </Link>
        <button className="text-[#007683] font-bold mt-4">Cancel</button>
      </div>
    </MessageModal>
  );
};

export default RatingCard;
