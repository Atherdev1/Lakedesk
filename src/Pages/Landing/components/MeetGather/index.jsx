import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import "./style.css";
import { capabilities, features } from "../Constants";
import Heading from "../../../../Common/Heading";

const MeetGather = () => {
  return (
    <>
      <div className="meet_container mt-5">
        <Heading
          primaryText="One-of-a-kind no-code, unified data-to-outcome platform"
          secondaryText="MEET GATHER PLATFORM"
        />
        <div className="meet_card">
          <div className="row">
            {features?.map((feature) => {
              return (
                <div className="col-6 col-sm-4 col-lg">
                  <div className="feature_card">
                    <span>
                      <IoIosCheckmarkCircle color="4E5AFE" />
                    </span>
                    <p>{feature.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="capabilties_line">
            <hr class="hr-with-badge" />
            <div class="badge_label">CAPABLITIES</div>
          </div>
          <div className="row g-3 mt-5">
            {capabilities?.map((capability) => {
              return (
                <div className="col-6 col-sm-4 col-lg">
                  <div
                    className="capability_card"
                    style={{
                      backgroundColor: `${capability?.backgroundColor}`,
                    }}
                  >
                    <img
                      className="capability_image"
                      src={capability?.backgroundImg}
                      alt=""
                    />
                    <p className="m-0 mt-2 text-center">{capability?.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetGather;
