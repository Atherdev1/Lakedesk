import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import caseImg from '../../../../../Assets/Landing/case_image.svg'
import "./style.css";
import ActionButton from "../../../../../Common/ActionButton";

const CaseCard = ({title}) => {
  return (
    <div className="case_card d-lg-flex">
      <div className="case_content">
        <p className="case_heading">{title}</p>
        <p className="case_text">
          The first open approach to secure data sharing means you can easily
          share live data sets, models, dashboards and notebooks to collaborate
          with anyone on any platform.
        </p>
        <ul className="uses_list p-0 d-flex flex-column gap-2">
          <li>
            <BsCheckCircleFill color="#4E5AFE"/>
            <span className="ms-2">No proprietary formats or expensive replication</span>
          </li>
          <li>
            <BsCheckCircleFill color="#4E5AFE" /> <span  className="ms-2">No complicated ETL</span>
          </li>
          <li>
            <BsCheckCircleFill color="#4E5AFE"/>
            <span  className="ms-2">Monetize sharing with the Databricks Marketplace</span>
          </li>
        </ul>
        <ActionButton px={20} py={10}>
          View More
        </ActionButton>
      </div>
      <div className="case_image d-none d-lg-block">
        <img src={caseImg} alt="" />
      </div>
    </div>
  );
};

export default CaseCard;
