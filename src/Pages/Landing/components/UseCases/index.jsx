import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./style.css";
import Heading from "../../../../Common/Heading";
import CaseCard from "./CaseCard";
import { useCasesTabs } from "../Constants";

const UseCases = () => {
  const [key, setKey] = useState("dataSharing");

  return (
    <div className="use_cases_container">
      <Heading
        primaryText="
Unify all your data + AI
"
        secondaryText="USE CASES"
      />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {useCasesTabs?.map((tab) => {
          return (
            <Tab eventKey={tab.id} title={tab.label}>
              <CaseCard title={tab.label} />
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
};

export default UseCases;
