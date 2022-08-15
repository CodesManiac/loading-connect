import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import MessageModal from "./MessageModal";

const DeclineCard = () => {
  return (
    <MessageModal>
      <h4 className="font-bold 20px">
        Decline the offered amount of &#8358;2,500?
      </h4>
      <p className="text-sm">
        You would be declining the offered amount of &#8358;2,500 making
        yourself available to pick up other waiting loads.
      </p>
      <div className="flex flex-col mt-4 gap-2">
        <Link to="/">
          <Button text="Yes, Decline" ground="red" />
        </Link>
        <Link to="/app/settings/about">
          <Button text="No, Cancel" ground="white" color="#007683" />
        </Link>
      </div>
    </MessageModal>
  );
};

export default DeclineCard;
