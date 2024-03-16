import React from "react";
import Header from "../Header";
import Spotlight from "../Spotlight";
import HeroCard from "../HeroCard";
const Landing = () => {
  return (
    <>
      <div className="w-100">
        <Header />
        <HeroCard />
        <Spotlight />
      </div>
    </>
  );
};

export default Landing;
