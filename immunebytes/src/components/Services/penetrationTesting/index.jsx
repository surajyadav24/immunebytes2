import React from "react";
import Serviceherosection from "../../Service-Hero-Section";
import RequestAudit from "../../Request-Audit";
import AuditProcess from "../../Service-Audit-Process";
// import FeaturedAudit from '../../Feauture-Audit'
// import FeatureSection from '../../Why-us-Feature'
import OtherWeb3Services from "../../Other-Web3-Services";
import EngagementModel from "../../Engagement-Model";
import HeroSection2 from "../../Hero-section-2";
import serviceimg from "../../../assets/images/services-img/service1.gif";

import FAQ from "../../FAQ";
import AuditProcessdummy from "../penetrationTesting/auditprocessdummy";

import icon1 from "../../../assets/images/services-main/Penetration/icon1.gif";
import icon2 from "../../../assets/images/services-main/Penetration/icon2.gif";
import icon3 from "../../../assets/images/services-main/Penetration/icon3.gif";
import icon4 from "../../../assets/images/services-main/Penetration/icon4.gif";
import icon5 from "../../../assets/images/services-main/Penetration/icon5.gif";
import icon6 from "../../../assets/images/services-main/Penetration/icon6.gif";


import FeaturedAudit from "../../Feauture-Audit";
import staderLogo from "../../../assets/images/sliderlogo/staderlogo.svg";
import profileImage from "../../../assets/images/testimonial/testimonial (4).png";

// FEATURE SECTION WHY US
import FeatureSection from "../../Why-us-Feature";


import pinkImage from "../../../assets/images/services-img/service3.gif"
import blueImage from "../../../assets/images/services-img/service2.gif"

import team from "../../../assets/images/services-main/feature-icon/Team-of-Highly-Skilled-Auditors.gif"
import centric from "../../../assets/images/services-main/feature-icon/Client-Centric-Approach.gif";
import comp from "../../../assets/images/services-main/feature-icon/Comprehensive-Audit-Process.gif";
import Post from "../../../assets/images/services-main/feature-icon/Post-Audit-Support.gif";
import Tailored from "../../../assets/images/services-main/feature-icon/Tailored-Approach.gif";
import Focus from "../../../assets/images/services-main/feature-icon/TR.gif";
import Proven from "../../../assets/images/services-main/Blockchain-icon/Proven-Track-Record.gif";
import Seal from "../../../assets/images/services-main/Penetration/below-six.gif";


import downarrow from "../../../assets/images/services-main/down-arrow.svg";
import downarrowmobile from "../../../assets/images/Down-Arrow-Mobile.svg";
import rightarrowmobile from "../../../assets/images/Right-Arrow-Mobile.svg";
import rightarrow from "../../../assets/images/services-main/right-arrow.svg";

const processSteps = [
  {
    icon: icon1,
    title: "Application Resilience",
    subTitleProcess:
      "Identifying Weak Spots in DApp Frontends and Smart Contracts",
    description:
      "Uncover vulnerabilities in your DApp’s interfaces, workflows, and underlying smart contracts to ensure seamless user experiences."
  },
  {
    icon: icon2,
    title: "Performance Under Pressure",
    subTitleProcess: "Stress Testing Across Real-World Conditions",
    description:
      "Simulate high-traffic, heavy-load, and malicious-actor scenarios to validate your dApp’s robustness."
  },
  {
    icon: icon3,
    title: "Protocol and API Testing",
    subTitleProcess: "Strengthening Backend Interactions Against Exploits",
    description:
      "Test APIs and protocols for flaws like injection attacks, cross-domain vulnerabilities, and improper validations."
  },
  {
    icon: icon4,
    title: "End-to-End Vulnerability Assessments",
    subTitleProcess:
      "Mapping Attack Surfaces from Users to Protocols",
    description:
      "Analyze potential attack surfaces through holistic, end-to-end penetration testing for maximum threat coverage."
  },
  {
    icon: icon5,
    title: "Security Through Integration",
    subTitleProcess: "Ensuring Safe Interactions Across DApp Dependencies",
    description:
      "Evaluate how your DApp interacts with external contracts, oracles, and middleware for hidden security risks."
  },
  {
    icon: icon6,
    title: "Closing the Loop",
    subTitleProcess:
      "Comprehensive Reporting with Strategic Mitigation Recommendations",
    description:
      "Receive in-depth reports with clear fixes, empowering you to enhance security and build user confidence."
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
    title: "Expert Security Professionals",
    icon: team, // Replace with your GIF URL
    description:
      "Our team of skilled penetration testers are experts in various attack vectors, providing detailed insights and strategies for securing your system.",
    backgroundColor: "bg-blue-500" // Unique background color
  },
  {
    title: "Client First Approach",
    icon: centric, // Replace with your GIF URL
    description:
      "Your success is our priority. We work closely with you, maintaining transparent communication and focusing on your project’s long-term security needs. ",
    backgroundColor: "bg-green-500" // Unique background color
  },
  {
    title: "Cutting-Edge Testing Methodologies",
    icon: comp, // Replace with your GIF URL
    description:
      "Our penetration tests use the latest industry-leading tools and techniques, ensuring accurate assessments of your system’s security.",
    backgroundColor: "bg-red-500" // Unique background color
  },
  {
    title: "Comprehensive Risk Assessment",
    icon: Post, // Replace with your GIF URL
    description:
      "We perform in-depth penetration testing to identify and exploit vulnerabilities in your systems, ensuring all potential threats are discovered. ",
    backgroundColor: "bg-yellow-500" // Unique background color
  },
  {
    title: "Tailored Testing Approach",
    icon: Tailored, // Replace with your GIF URL
    description:
      "We customize our approach to meet the requirements of your project, simulating attacks to identify threats specific to your environment.",
    backgroundColor: "bg-purple-500" // Unique background color
  },
  {
    title: "Transparent Reporting",
    icon: Focus, // Replace with your GIF URL
    description:
      "We deliver actionable reports that outline discovered issues, potential impacts, and specific recommendations for enhancing your system's security. ",
    backgroundColor: "bg-teal-500" // Unique background color
  },
  {
    title: "Proven Track Record",
    icon: Proven, // Replace with your GIF URL
    description:
      "Trusted by organizations across industries, we have a history of delivering successful penetration tests that provide valuable insights to our clients.",
    backgroundColor: "bg-orange-500" // Unique background color
  },
  {
    title: "Continuous Improvement",
    icon: Seal, // Replace with your GIF URL
    description:
      "Our testing processes are continually updated to reflect emerging threats, ensuring your systems are protected against evolving attack methods.",
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
    answer: "We adhere to strict confidentiality agreements and use secure channels to handle your code. We prioritize the privacy and security of your project throughout the entire audit process."
  },
  {
    question: "What methodologies do you use for smart contract audits?",
    answer: "We use a combination of manual reviews, static/dynamic analysis, symbolic execution, and scenario-based attack simulations based on the project’s needs."
  },
  {
    question: "Can you audit contracts written in languages other than Solidity?",
    answer: "Yes, we support multiple languages like Solidity, Vyper, Rust, and Cairo, using tailored tools and methodologies for each environment."
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
    title: 'Smart Contract Audit',
    description: 'An extensive evaluation of your smart contract code for security, verification of business specifications, and adherence to industry standards for code reusability.',
  },
];
// services

const icons = {
  downArrowDesktop: downarrow,
  downArrowMobile: downarrowmobile,
  rightArrowDesktop: rightarrow,
  rightArrowMobile: rightarrowmobile
};

function Penetration (){
  return (
    <>
<div className="service-hero">
<HeroSection2
        title="Penetration"
        highlight="Testing"
        description="Fortify your systems and achieve robust security with Penetration Testing as a Service (PTaaS), tailored for organizations that value speed and precision."
        buttonText="Book Consultation"
        imageSrc={serviceimg}
        altText="Immunebytes Hero GIF"
      />
</div>
      <div className="container-fluid">
        <RequestAudit
          text="Get your smart contracts audited today and build a"
          spantext="safer tomorrow."
          buttonText="Request Audit"
        />

<div className="smart-contract-process homepage-heading">
<AuditProcessdummy
          title="Shield Your DApp"
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
      </div>
    </>
  );
}

export default Penetration;
