import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import MessageModal from "./MessageModal";

const NegotiateCard = ({onClose}) => {
  return (
    <MessageModal>
      <h4 className="font-bold">Send a new offer</h4>
      <p className="text-sm">
        Enter the amount you want the driver to deliver the load for
      </p>
      <input
        className="placeholder"
        type="currency"
        placeholder="Amount(&#8358;)"
        min="0"
        required
      ></input>
      <div className="flex flex-col mt-2 gap-2">
        <Link to="/">
          <Button text="Send New Offer" ground="#007683" />
        </Link>
        <button className="text-[#007683] font-bold mt-4" onClick={onClose}>
          No, Cancel
        </button>
      </div>
    </MessageModal>
  );
};

export default NegotiateCard;
