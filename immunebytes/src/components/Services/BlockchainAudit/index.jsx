import React from "react";
import Serviceherosection from "../../Service-Hero-Section";
import RequestAudit from "../../Request-Audit";
import AuditProcess from "../../Service-Audit-Process";
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
    title: "Layer-by-Layer Defense",
    subTitleProcess:
      "Securing Blockchain Systems from Infrastructure to Protocol",
    description:
      "Build robust defenses by addressing risks across infrastructure, network, data, and protocol layers of your blockchain."
  },
  {
    icon: icon2,
    title: "Data Integrity Assurance",
    subTitleProcess: "Mitigating Cryptographic and Transaction-Level Attacks",
    description:
      "Secure your blockchain’s data with resilient protections against hash collisions, private key leaks, and transaction replay."
  },
  {
    icon: icon3,
    title: "Protocol Stability and Consensus Security",
    subTitleProcess: "Safeguarding Against Complex Attacks",
    description:
      "Mitigate risks like 51% attacks, stake grinding, and nothing-at-stake vulnerabilities with advanced protocol-level safeguards."
  },
  {
    icon: icon4,
    title: "Validator Infrastructure Security",
    subTitleProcess:
      "Mitigating Threats to Staking and Delegation Mechanisms",
    description:
      "Protect against stake-based attacks like nothing-at-stake, stake grinding, and validator bribery to fortify PoS infrastructure."
  },
  {
    icon: icon5,
    title: "Fortifying Networks",
    subTitleProcess: "Advanced Detection for Sybil, Eclipse, and Timejacking Attacks",
    description:"Strengthen P2P and RPC communications against network partitioning, hijacking, and eavesdropping threats."
  },
  {
    icon: icon6,
    title: "Custom Security Solutions",
    subTitleProcess:
      "Tailored Testing and Defensive Strategies for Unique Ecosystem Needs",
    description:
      "Harness tailored methodologies and innovative solutions to address your blockchain’s unique security landscape."
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
      "Our auditing team holds expertise in blockchain architecture and industry standards, ensuring your code is error-free. ",
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
    title: "Tailored Approach",
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
      "With a history of successful audits and satisfied clients, we’ve built a reputation for delivering reliable security solutions you can trust ",
    backgroundColor: "bg-orange-500" // Unique background color
  },
  {
    title: "Cost-Effective Security",
    icon: Seal, // Replace with your GIF URL
    description:
      "We deliver top-tier security solutions with competitive pricing, providing high-value protection for your Web3 projects ",
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

function BlockchainAudit() {
  return (
    <>
      <HeroSection2
        title="Blockchain"
        highlight="Audit"
        description="Secure your blockchain with us through seamless audits and trusted solutions to protect your decentralized assets from the very start."
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

export default BlockchainAudit;
