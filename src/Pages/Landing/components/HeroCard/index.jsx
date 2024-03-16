import React from "react";
import ActionButton from "../../../../Common/ActionButton";
import "./style.css";

const HeroCard = () => {
  return (
    <>
      <div className="hero_card">
        <div className="action_text ">
          <p className="mb-0 hero_text">
            Your Data, Your <span className="ai">AI</span>
          </p>
          <p className="hero_text">
            Your <span className="fut">Future</span>
          </p>
          <div className="helper_text mb-3">
            Own them all on the new data intelligence platform
          </div>
          <ActionButton px={36} py={12}>
            Explore Demo
          </ActionButton>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
