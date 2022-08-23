import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import MessageModal from "./MessageModal";

const AcceptCard = ({ onClose }) => {
  return (
    <MessageModal>
      <h4 className="font-bold">Accept the offered amount of &#8358;2,500?</h4>
      <p className="text-sm">
        Babatunde will come pickup and deliver your load for ₦2,500. This cannot
        be changed later on.
      </p>
      <div className="flex flex-col mt-4 gap-2">
        <Link to="/">
          <Button text="Yes, Accept" ground="#007683" />
        </Link>
        {/* <Link to="/app/settings/about"> */}
        {/* <Button
          onClick={() => alert("Accept")}
          text="No, Cancel"
          ground="white"
          color="#007683"
        /> */}
        <button className="text-[#007683] font-bold mt-4" onClick={onClose}>
         No, Cancel
        </button>
        {/* </Link> */}
      </div>
    </MessageModal>
  );
};

export default AcceptCard;
