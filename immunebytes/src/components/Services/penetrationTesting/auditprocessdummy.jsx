import React from "react";
// import "./style.css";

function AuditProcessdummy({ title, processSteps,subheading }) {
  return (
    <div className="container">
      <div className="audit-process-container">
        <h2 className="audit-process-title">{title}</h2>
        <p className="sub-heading-section">{subheading}</p>
        <div className="audit-process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="audit-process-card">
              <div>
                <img src={step.icon} alt={step.title} />
              </div>
              <h3>{step.title}</h3>
              <h5>{step.subTitleProcess}</h5>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AuditProcessdummy;
