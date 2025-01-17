import React from "react";
import Serviceherosection from "../../Service-Hero-Section";
import RequestAudit from "../../Request-Audit";
import AuditProcess from "../../Service-Audit-Process";
// import FeaturedAudit from '../../Feauture-Audit'
// import FeatureSection from '../../Why-us-Feature'
import OtherWeb3Services from "../../Other-Web3-Services";
import EngagementModel from "../../Engagement-Model";
import HeroSection2 from "../../Hero-section-2";
import gif1 from "../../../assets/images/Hero-section/hero-gif.gif";
import FAQ from "../../FAQ";
import AuditProcessdummy from "../penetrationTesting/auditprocessdummy";

import icon2 from "../../../assets/images/services-main/manual examination.gif";
import icon3 from "../../../assets/images/services-main/audit-reprt.gif";
import icon1 from "../../../assets/images/services-main/Preparatory stage.gif";
import icon4 from "../../../assets/images/services-main/search.gif";
import icon5 from "../../../assets/images/services-main/PreliminaryAudit.gif";
import icon6 from "../../../assets/images/services-main/auditRevision.gif";

import FeaturedAudit from "../../Feauture-Audit";
import staderLogo from "../../../assets/images/sliderlogo/staderlogo.svg";
import profileImage from "../../../assets/images/testimonial/testimonial (4).png";

// FEATURE SECTION WHY US
import FeatureSection from "../../Why-us-Feature";
import team from "../../../assets/images/services-main/team.gif";
import comp from "../../../assets/images/services-main/Comprehensive Audit Process.gif";
import centric from "../../../assets/images/services-main/Client-Centric Approach.gif";
import Post from "../../../assets/images/services-main/Post-Audit Support.gif";
import Tailored from "../../../assets/images/services-main/Tailored Approach.gif";
import Focus from "../../../assets/images/services-main/Focus on Innovation.gif";
import Proven from "../../../assets/images/services-main/Proven Track Record.gif";
import Seal from "../../../assets/images/services-main/ImmuneBytes Seal of Trust.gif";
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
    title: "Team of Highly Skilled Auditors",
    icon: team, // Replace with your GIF URL
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
    backgroundColor: "bg-blue-500" // Unique background color
  },
  {
    title: "Client-Centric Approach",
    icon: centric, // Replace with your GIF URL
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
    backgroundColor: "bg-green-500" // Unique background color
  },
  {
    title: "Comprehensive Audit Process",
    icon: comp, // Replace with your GIF URL
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
    backgroundColor: "bg-red-500" // Unique background color
  },
  {
    title: "Post-Audit Support",
    icon: Post, // Replace with your GIF URL
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
    backgroundColor: "bg-yellow-500" // Unique background color
  },
  {
    title: "Tailored Approach",
    icon: Tailored, // Replace with your GIF URL
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
    backgroundColor: "bg-purple-500" // Unique background color
  },
  {
    title: "Focus on Innovation",
    icon: Focus, // Replace with your GIF URL
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
    backgroundColor: "bg-teal-500" // Unique background color
  },
  {
    title: "Proven Track Record",
    icon: Proven, // Replace with your GIF URL
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
    backgroundColor: "bg-orange-500" // Unique background color
  },
  {
    title: "Immunebytes Seal of Trust",
    icon: Seal, // Replace with your GIF URL
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
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

const icons = {
  downArrowDesktop: downarrow,
  downArrowMobile: downarrowmobile,
  rightArrowDesktop: rightarrow,
  rightArrowMobile: rightarrowmobile
};

function Defi() {
  return (
    <>
      <HeroSection2
        title="Smart Contract ,"
        highlight="Audit"
        description="Unlock the full potential of your decentralized projects with comprehensive smart contract audits — ensuring security, performance, and trust."
        buttonText="Book Consultation"
        imageSrc={gif1}
        altText="Immunebytes Hero GIF"
      />
      <div className="container-fluid">
        <RequestAudit
          text="Get your smart contracts audited today and build a"
          spantext="safer tomorrow."
          buttonText="Request Audit"
        />

        <AuditProcessdummy
          title="Elevating Protocol Safety Standards"
          processSteps={processSteps}
        />
        {/* <AuditProcess/> */}
        <FeaturedAudit
          title="Featured Audit"
          auditCards={auditCards}
          testimonial={testimonial}
        />
        <FeatureSection title="Why Us?" features={features} />
        {/* <FeatureSection/> */}
        <EngagementModel />
        <OtherWeb3Services />

        <div>
          <FAQ title="FAQs" faqs={faqs} icons={icons} />
        </div>

        {/* <FAQ/> */}
      </div>
    </>
  );
}

export default Defi;
