import React from "react";
import Header from "../Header";
import Spotlight from "../Spotlight";
import HeroCard from "../HeroCard";
import MeetGather from "../MeetGather";
import UseCases from "../UseCases";
import Testimonials from "../Testimonials";
import ActionCard from "../ActionCard";
import Footer from "../Footer";
const Landing = () => {
  return (
    <>
      <div className="w-100">
        <Header />
        <HeroCard />
        <Spotlight />
        <MeetGather />
        <UseCases />
        <Testimonials />
        <ActionCard />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
