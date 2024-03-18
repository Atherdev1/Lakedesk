import React from "react";
import "./style.css";
import ActionButton from "../../../../Common/ActionButton";
const ActionCard = () => {
  return (
    <div className="raw_container">
      <div className="data_card text-center">
        <p>Raw data to business outcomes at scale and 50X faster</p>
        <p><span>Take the</span> first steps<span> in your transformation</span> </p>
        <div className="d-flex flex-column flex-sm-row justify-content-sm-center align-items-center gap-2">
          <ActionButton px={16} py={8}>
            Get an Estimate
          </ActionButton>
          <ActionButton px={16} py={8}>
            Schedule Demo
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
