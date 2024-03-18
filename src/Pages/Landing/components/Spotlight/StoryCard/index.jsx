import React from "react";
import { HiMiniArrowRight } from "react-icons/hi2";
import "./style.css";

const StoryCard = ({ title, subTitle, backgroundImg }) => {
  return (
    <>
      <div
        className="story_card"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <p className="title mb-1">{title?.toUpperCase()}</p>
        <p className="sub_title">{subTitle}</p>
        <button className="arrow_right">
          <HiMiniArrowRight />
        </button>
      </div>
    </>
  );
};

export default StoryCard;
