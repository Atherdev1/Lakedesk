import React from "react";
import "./style.css";

const TestimonialCard = ({
  backgroundColor,
  profileImage,
  message,
  name,
  role,
}) => {
  return (
    <div
      className="testimonial_card d-flex flex-column justify-content-between"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="testimonial d-flex ">
        <img src={profileImage} alt="" />
        <p className="m-0 ms-4 ">{message}</p>
      </div>
      <div className="name_role  d-flex flex-column align-items-end">
        <p className="m-0">{name}</p>
        <p className="m-0">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
