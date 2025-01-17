import React from "react";
import Serviceherosection from "../../Service-Hero-Section";
import RequestAudit from "../../Request-Audit";
import AuditProcess from "../../Service-Audit-Process";
// import FeaturedAudit from '../../Feauture-Audit'
// import FeatureSection from '../../Why-us-Feature'
import OtherWeb3Services from "../../Other-Web3-Services";
import EngagementModel from "../../Engagement-Model";
import HeroSection2 from "../../Hero-section-2";
import serviceimg2 from "../../../assets/images/services-img/service2.gif";

import pinkImage from "../../../assets/images/services-img/service3.gif"
import blueImage from "../../../assets/images/services-img/service1.gif"


import FAQ from "../../FAQ";
import AuditProcessdummy from "../penetrationTesting/auditprocessdummy";

import icon1 from "../../../assets/images/services-main/smart-icon/Preparatory-Stage.gif";
import icon2 from "../../../assets/images/services-main/smart-icon/Preliminary-Audit-Report.gif";
import icon3 from "../../../assets/images/services-main/smart-icon/TESTING-AUTOMATION.gif";
import icon4 from "../../../assets/images/services-main/smart-icon/Final-Audit-Report.gif";
import icon5 from "../../../assets/images/services-main/smart-icon/manual-examination.gif";
import icon6 from "../../../assets/images/services-main/smart-icon/Audit-Support-&-Revisions.gif";

import FeaturedAudit from "../../Feauture-Audit";
import staderLogo from "../../../assets/images/sliderlogo/staderlogo.svg";
import profileImage from "../../../assets/images/testimonial/testimonial (4).png";

// FEATURE SECTION WHY US
import FeatureSection from "../../Why-us-Feature";


import team from "../../../assets/images/services-main/feature-icon/Team-of-Highly-Skilled-Auditors.gif"
import centric from "../../../assets/images/services-main/feature-icon/Client-Centric-Approach.gif";
import comp from "../../../assets/images/services-main/feature-icon/Comprehensive-Audit-Process.gif";
import Post from "../../../assets/images/services-main/feature-icon/Post-Audit-Support.gif";
import Tailored from "../../../assets/images/services-main/feature-icon/Tailored-Approach.gif";
import Focus from "../../../assets/images/services-main/feature-icon/TR.gif";
import Proven from "../../../assets/images/services-main/Blockchain-icon/Proven-Track-Record.gif";
import Seal from "../../../assets/images/services-main/feature-icon/Cost-Effective Security.gif";


import downarrow from "../../../assets/images/services-main/down-arrow.svg";
import downarrowmobile from "../../../assets/images/Down-Arrow-Mobile.svg";
import rightarrowmobile from "../../../assets/images/Right-Arrow-Mobile.svg";
import rightarrow from "../../../assets/images/services-main/right-arrow.svg";

const processSteps = [
  {
    icon: icon1,
    title: "Unveiling Vulnerabilities",
    subTitleProcess:
      "Comprehensive Analysis of Your Smart Contract’s Functional and Logic Layers",
    description:
      "Discover unseen risks through deep dives into functional behaviors, logic workflows, and critical contract interdependencies."
  },
  {
    icon: icon2,
    title: "Scenario-Driven Simulations",
    subTitleProcess: "Proactively Defending Against Exploitation",
    description:
      "Simulate real-world attack scenarios to ensure your contracts withstand malicious exploits and operational stress."
  },
  {
    icon: icon3,
    title: "Advanced Automated Tools",
    subTitleProcess: "Detecting Complex Risks Beyond the Surface",
    description:
      "Leverage state-of-the-art automation to identify intricate vulnerabilities like reentrancy, gas optimization flaws, and unchecked call risks."
  },
  {
    icon: icon4,
    title: "Beyond the Code",
    subTitleProcess:
      "Evaluating Security Through Governance and Ecosystem Dependencies",
    description:
      "Address multi-layered security risks across integrations, protocol governance, and external interactions for a holistic audit."
  },
  {
    icon: icon5,
    title: "Human Expertise Meets Technology",
    subTitleProcess: "Detailed Manual Code Audits",
    description:
      "Pair automation with meticulous human inspection to uncover logical loopholes and edge-case scenarios machines often miss."
  },
  {
    icon: icon6,
    title: "Actionable Insights",
    subTitleProcess:
      "Delivering Transparent Reports with Clear Mitigation Steps",
    description:
      "Transform findings into concise, actionable insights that strengthen your contract’s reliability and bolster stakeholder trust."
  }
];

const auditCards = [
  {
    className: "stader-card",
    logo: staderLogo,
    logoClass: "stader-logo",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    className: "case-study-card",
    title: "CASE",
    subtitle: "STUDY",
    button: {
      className: "arrow-btn",
      text: "→"
    }
  }
];

const testimonial = {
  talkTitle: "TALK",
  talkSubtitle: "WITH US",
  talkButtonText: "Request Audit",
  image: profileImage,
  name: "DHEERAJ BORRA",
  role: "Stader Labs, Co-Founder",
  quote:
    "“ImmuneBytes demonstrated the perfect blend of expertise, commitment, and accountability, resulting in an audit that surpassed expectations.”"
};

// const features = [
//   {
//     title: "Team of Highly Skilled Auditors",
//     icon: team,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     backgroundColor: "bg-blue-500",
//   },
//   {
//     title: "Client-Centric Approach",
//     icon: centric,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     backgroundColor: "bg-green-500",
//   },
//   {
//     title: "Comprehensive Audit Process",
//     icon: comp,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     backgroundColor: "bg-red-500",
//   },
//   {
//     title: "Post-Audit Support",
//     icon: Post,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     backgroundColor: "bg-yellow-500",
//   },
// ];
const features = [
  {
    title: "Highly Skilled Auditing team",
    icon: team, // Replace with your GIF URL
    description:
      "Our auditing team holds expertise in blockchain architecture and industry standards, ensuring your code is error-free.",
    backgroundColor: "bg-blue-500" // Unique background color
  },
  {
    title: "Client First Approach",
    icon: centric, // Replace with your GIF URL
    description:
      "Your success is our priority. We maintain transparent communication and focus on your project’s long-term security needs.",
    backgroundColor: "bg-green-500" // Unique background color
  },
  {
    title: "CoMPREHENSIVE Security Audit",
    icon: comp, // Replace with your GIF URL
    description:
      "We conduct comprehensive smart contract audits using the latest tools and methodologies to uncover critical vulnerabilities.",
    backgroundColor: "bg-red-500" // Unique background color
  },
  {
    title: "Post audit support",
    icon: Post, // Replace with your GIF URL
    description:
      "We offer continuous support after the audit, assisting with any issues or updates to secure your smart contracts long-term.",
    backgroundColor: "bg-yellow-500" // Unique background color
  },
  {
    title: "Tailored approach",
    icon: Tailored, // Replace with your GIF URL
    description:
      "We customize our audits to meet the specific needs of your project, ensuring the highest level of protection for your unique use case.",
    backgroundColor: "bg-purple-500" // Unique background color
  },
  {
    title: "Transparent Reporting",
    icon: Focus, // Replace with your GIF URL
    description:
      "Our detailed audit reports are clear and actionable, providing a transparent overview of risks and recommendations",
    backgroundColor: "bg-teal-500" // Unique background color
  },
  {
    title: "Proven Track Record",
    icon: Proven, // Replace with your GIF URL
    description:
      "With a history of successful audits and satisfied clients, we’ve built a reputation for delivering reliable security solutions you can trust",
    backgroundColor: "bg-orange-500" // Unique background color
  },
  {
    title: "Cost-Effective Security",
    icon: Seal, // Replace with your GIF URL
    description:
      "We deliver top-tier security solutions with competitive pricing, providing high-value protection for your Web3 projects",
    backgroundColor: "bg-pink-500" // Unique background color
  }
];
// FAQ CONTENT
const faqs = [
  {
    question: "How long does a smart contract audit take?",
    answer:
      "The time required for an audit depends on the complexity and size of the smart contract. Typically, audits take a few days to a few weeks. Once we assess the project, we provide a clear timeline."
  },
  {
    question: "How confidential is the audit process?",
    answer:
      "We adhere to strict confidentiality agreements and use secure channels to handle your code. We prioritize the privacy and security of your project throughout the entire audit process."
  },
  {
    question: "What methodologies do you use for smart contract audits?",
    answer:
      "We use a combination of manual reviews, static/dynamic analysis, symbolic execution, and scenario-based attack simulations based on the project’s needs."
  },
  {
    question:
      "Can you audit contracts written in languages other than Solidity?",
    answer:
      "Yes, we support multiple languages like Solidity, Vyper, Rust, and Cairo, using tailored tools and methodologies for each environment."
  }
];

// Services
const services = [
  {
    image: pinkImage,
    title: 'Blockchain Security Audit',
    description: 'A thorough assessment of your blockchain’s security posture, encompassing smart contracts, architecture, and development framework.',
  },
  {
    image: blueImage,
    title: 'Penetration Testing',
    description: 'In light of increasing traditional security breaches impacting Web3, ImmuneBytes offers penetration testing for decentralised applications.',
  },
];
// services


const icons = {
  downArrowDesktop: downarrow,
  downArrowMobile: downarrowmobile,
  rightArrowDesktop: rightarrow,
  rightArrowMobile: rightarrowmobile
};

function SmartContract() {
  return (
    <>
<div className="service-hero">
<HeroSection2
        title="Smart Contract"
        highlight="Audit"
        description="Unlock the full potential of your decentralized projects with comprehensive smart contract audits — ensuring security, performance, and trust."
        buttonText="Book Consultation"
        imageSrc={serviceimg2}
        altText="Immunebytes Hero GIF"
      />
</div>
      <div className="container-fluid">
        <RequestAudit
          text="Get your smart contracts audited today and build a"
          spantext="safer tomorrow."
          buttonText="Request Audit"
        />

<div className="smart-contract-process">
<AuditProcessdummy
          title="Elevating Protocol Safety Standards"
          processSteps={processSteps}
        />
</div>
        {/* <AuditProcess/> */}
        <FeaturedAudit
          title="Featured Audit"
          auditCards={auditCards}
          testimonial={testimonial}
        />
        <FeatureSection title="Why Us?" features={features} />
        {/* <FeatureSection/> */}
        <EngagementModel />

        <OtherWeb3Services services={services} />

        <div>
          <FAQ title="FAQs" faqs={faqs} icons={icons} />
        </div>

        {/* <FAQ/> */}

        <div className="secure-audit"><h2>Stay Ahead of the Security Curve.</h2></div>

      </div>
    </>
  );
}

export default SmartContract;
