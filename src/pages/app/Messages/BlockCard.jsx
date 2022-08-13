import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/button";
import MessageModal from "./MessageModal";

const BlockCard = () => {
  return (
    <MessageModal>
      <h4 className="font-bold">Block John Doe</h4>
      <p className="text-sm">
        Blocked users will no longer be able to contact or interact with you
      </p>
      <div className="flex flex-col gap-2 mt-4">
        <Link to="/">
          <Button text="Yes, Block" ground="red" />
        </Link>
        <Link to="/app/settings/about">
          <Button text="No, Cancel" ground="white" color="#007683" />
        </Link>
      </div>
    </MessageModal>
  );
};

export default BlockCard;
