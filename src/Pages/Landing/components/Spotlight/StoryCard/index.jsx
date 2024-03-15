import React from "react";
import "./style.css";

const StoryCard = ({ title, subTitle, backgroundImg }) => {
  return (
    <>
      <div
        className="story_card"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <p className="title">{title?.toUpperCase()}</p>
        <p className="sub_title">{subTitle}</p>
        <button className="arrow_right"></button>
      </div>
    </>
  );
};

export default StoryCard;
