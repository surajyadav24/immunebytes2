import React from "react";
import "./style.css";

function AuditProcess() {
  const processSteps = [
    {
      icon: "📝",
      title: "Preparatory Stage",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "🔍",
      title: "Manual Examination",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "📃",
      title: "Final Audit Report",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "🔬",
      title: "Testing Automation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "📋",
      title: "Preliminary Audit Report",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon: "🔄",
      title: "Audit Support & Revisions",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
<>
<div className="container">

    <div className="audit-process-container">
      <h2 className="audit-process-title">Audit Process</h2>
      <div className="audit-process-grid">
        {processSteps.map((step, index) => (
          <div key={index} className="audit-process-card">
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
</div>
    </>
  );
}

export default AuditProcess;
