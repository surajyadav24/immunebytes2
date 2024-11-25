import React from "react";
import "./style.css";
import icon1 from '../../assets/images/services-main/Preparatory stage.gif'
import icon2 from '../../assets/images/services-main/manual examination.gif'
import icon3 from '../../assets/images/services-main/search.gif'
import icon4 from '../../assets/images/services-main/search.gif'
import icon5 from '../../assets/images/services-main/Preparatory stage.gif'
import icon6 from '../../assets/images/services-main/Preparatory stage.gif'



function AuditProcess() {
  const processSteps = [
    {
      icon:icon1 ,
      title: "Preparatory Stage",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      icon:icon2 ,
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
            <div className={step.title}> <img src={step.icon}  /></div>
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
