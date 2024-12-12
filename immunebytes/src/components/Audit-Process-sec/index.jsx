import React, { useState, useEffect } from "react";
import "./style.css";
import PrimaryBtn from "../Primarybutton";
import au1 from '../../assets/images/audit-process/au-1.svg';
import au2 from '../../assets/images/audit-process/au-2.svg';
import au3 from '../../assets/images/audit-process/au-3.svg';
import au4 from '../../assets/images/audit-process/au-4.svg';
import au5 from '../../assets/images/audit-process/au-5.svg';
import au6 from '../../assets/images/audit-process/au-6.svg';

const auditSteps = [
  {
    title: "Onboarding",
    description: "Kick Off The Process With A Seamless Onboarding Experience Tailored To Your Project's Needs.",
    image: au1,
  },
  {
    title: "Requirement Gathering",
    description: "Gather all the necessary requirements to ensure a smooth audit process.",
    image: au2,
  },
  {
    title: "Audit Initiation",
    description: "Initiate the audit process to identify areas of improvement.",
    image: au3,
  },
  {
    title: "Initial Audit Report",
    description: "Receive a detailed initial audit report for your review.",
    image: au4,
  },
  {
    title: "Code Refactoring",
    description: "Refactor your codebase to meet the audit recommendations.",
    image: au5,
  },
  {
    title: "Final Audit Report",
    description: "Get the final audit report with a summary of improvements made.",
    image: au6,
  },
];

const AuditProcessSec = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload all images
    const preloadImages = () => {
      return Promise.all(
        auditSteps.map((step) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = step.image;
            img.onload = resolve;
            img.onerror = reject;
          });
        })
      );
    };

    // Wait for all images to load
    preloadImages()
      .then(() => setIsLoaded(true))
      .catch((err) => console.error("Error preloading images:", err));
  }, []);

  if (!isLoaded) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="audit-process">
      <h2 className="heading">Audit Process</h2>
      <div className="audit-container">
        {/* Left Steps Section */}
        <div className="steps">
          {auditSteps.map((step, index) => (
            <div
              key={index}
              className={`step ${activeStep === index ? "active" : ""}`}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="circle"></div>
              <p>{step.title}</p>
            </div>
          ))}
        </div>
        {/* Right audit-content Section */}
        <div className="audit-content">
          <img
            src={auditSteps[activeStep].image}
            alt={auditSteps[activeStep].title}
          />
          <p>{auditSteps[activeStep].description}</p>
          <PrimaryBtn text="Request Audit" />
        </div>
      </div>
    </div>
  );
};

export default AuditProcessSec;
