import React from "react";
import "./style.css";
import icon1 from '../../assets/images/services-main/Preparatory stage.gif'
import icon2 from '../../assets/images/services-main/manual examination.gif'
import icon3 from '../../assets/images/services-main/audit-reprt.gif'
import icon4 from '../../assets/images/services-main/search.gif'
import icon5 from '../../assets/images/services-main/PreliminaryAudit.gif'
import icon6 from '../../assets/images/services-main/auditRevision.gif'



function AuditProcess() {
  const processSteps = [
    {
      icon:icon1 ,
      title: "Unveiling Vulnerabilities",
      subTitleProcess:"Comprehensive Analysis of Your Smart Contract’s Functional and Logic Layers",
      description:
        "Discover unseen risks through deep dives into functional behaviors, logic workflows, and critical contract interdependencies.",
    },
    {
      icon:icon2 ,
      title: "Scenario-Driven Simulations",
      subTitleProcess:"Proactively Defending Against Exploitation",
      description:"Simulate real-world attack scenarios to ensure your contracts withstand malicious exploits and operational stress.",
    },
    {
      icon: icon3,
      title: "Advanced Automated Tools",
      subTitleProcess:"Detecting Complex Risks Beyond the Surface",
      description:
        "Leverage state-of-the-art automation to identify intricate vulnerabilities like reentrancy, gas optimization flaws, and unchecked call risks.",
    },
    {
      icon: icon4,
      title: "Beyond the Code",
      subTitleProcess:"Evaluating Security Through Governance and Ecosystem Dependencies",
      description: "Address multi-layered security risks across integrations, protocol governance, and external interactions for a holistic audit.",
    },
    {
      icon:icon5,
      title: "Human Expertise Meets Technology",
      subTitleProcess:"Detailed Manual Code Audits",
      description:
        "Pair automation with meticulous human inspection to uncover logical loopholes and edge-case scenarios machines often miss.",
    },
    {
      icon: icon6,
      title: "Actionable Insights",
      subTitleProcess:"Delivering Transparent Reports with Clear Mitigation Steps",
      description:"Transform findings into concise, actionable insights that strengthen your contract’s reliability and bolster stakeholder trust.",
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
            <h5>{step.subTitleProcess}</h5>
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
