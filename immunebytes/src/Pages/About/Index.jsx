import React, { useState } from "react";
import Culture from "../../components/About-Culture";
import Main from "../../components/About-main";
import Vision from "../../components/About-vision";
import Map from "../../components/About-map";
import Success from "../../components/About-success";
import AuditProcessdummy from "../../components/Services/penetrationTesting/auditprocessdummy";
import icon1 from '../../assets/images/about-team/icon-1.svg'
import icon2 from '../../assets/images/about-team/icon-2.svg'
import icon3 from '../../assets/images/about-team/icon-3.svg'
import './style.css'
import { icon } from "@fortawesome/fontawesome-svg-core";
const About = () => {
  const processSteps = [
    {
      icon:icon1,
      title: "Billic",
      subTitleProcess: "",
      description:
        "Uncover vulnerabilities in your DApp’s interfaces, workflows, and underlying smart contracts to ensure seamless user experiences.",
    },
    {
      icon:icon2,
      title: "MEXC global",
      subTitleProcess: "",
      description:
        "Simulate high-traffic, heavy-load, and malicious-actor scenarios to validate your dApp’s robustness.",
    },
    {
      icon:icon3,
      title: "BitMart",
      subTitleProcess: "",
      description:
        "Test APIs and protocols for flaws like injection attacks, cross-domain vulnerabilities, and improper validations.",
    },
    {
      icon:icon1,
      title: "Billic",
      subTitleProcess: "",
      description:
        "Analyze potential attack surfaces through holistic, end-to-end penetration testing for maximum threat coverage.",
    },
    {
      icon:icon2,
      title: "MEXC global",
      subTitleProcess: "",
      description:
        "Evaluate how your DApp interacts with external contracts, oracles, and middleware for hidden security risks.",
    },
    {
      icon:icon3,
      title: "BitMart",
      subTitleProcess:
        "",
      description:
        "Receive in-depth reports with clear fixes, empowering you to enhance security and build user confidence.",
    },
    {
      icon:icon1,
      title: "Extra Process 1",
      subTitleProcess: "",
      description: "Description for extra process step 1.",
    },
    {
      icon:icon2,
      title: "Extra Process 2",
      subTitleProcess: "",
      description: "Description for extra process step 2.",
    },
    {
      icon:icon3,
      title: "Extra Process 3",
      subTitleProcess: "",
      description: "Description for extra process step 3.",
    },
    {
      icon:icon1,
      title: "Extra Process 4",
      subTitleProcess: "",
      description: "Description for extra process step 4.",
    },
    {
      icon:icon2,
      title: "Extra Process 5",
      subTitleProcess: "",
      description: "Description for extra process step 5.",
    },
    {
      icon:icon3,
      title: "Extra Process 6",
      subTitleProcess: "",
      description: "Description for extra process step 6.",
    },

  ];

  const [visibleSteps, setVisibleSteps] = useState(6); // Initially display six steps

  const handleViewMore = () => {
    setVisibleSteps(processSteps.length); // Show all steps
  };

  const handleViewLess = () => {
    setVisibleSteps(6); // Show only the initial six steps
  };

  return (
    <div className="about">
      <Main />
      <Vision />
      <Map />
      <div className="about-process">
        <AuditProcessdummy
          title="Elevating Protocol Safety Standards"
          processSteps={processSteps.slice(0, visibleSteps)} // Display limited steps
        />
        {visibleSteps < processSteps.length ? (
          <button className="view-more-btn btn btn-primary" onClick={handleViewMore}>
            View More
          </button>
        ) : (
          <button className="view-more-btn btn btn-primary" onClick={handleViewLess}>
            View Less
          </button>
        )}
      </div>
      <Success />
      <Culture />
    </div>
  );
};

export default About;
