import React from "react";
import "./style.css";

const Heading = ({ primaryText, secondaryText }) => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="sub_heading">{secondaryText}</div>
        <div className="heading">{primaryText}</div>;
      </div>
    </>
  );
};

export default Heading;
