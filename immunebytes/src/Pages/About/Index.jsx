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
import PrimaryBtn from "../../components/Primarybutton";
import Cta from "../../components/Cta-components";
import VideoTestimonial from "../../components/Video-Testimonial";

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
    // console.log("View More clicked");
    setVisibleSteps(processSteps.length); // Show all steps
  };

  const handleViewLess = () => {
    // console.log("View Less clicked");
    setVisibleSteps(6); // Show only the initial six steps
  };

// Video Testimonial 
const testimonialsData = [
  {
    name: 'Adam Boudjemaa',
    position: 'Lead Blockchain Developer',
    company: 'Polytrade Finance',
    videoLink: 'IhFuCwL-VJg', 
  },
  {
    name: 'Jérémie Lepetit',
    position: 'Co-founder & CEO',
    company: 'Metaweb',
    videoLink: 'JD_rpOmeaZk', // Replace with an actual YouTube video ID
  },
  {
    name: 'Dr. Gabriel Allred',
    position: 'Founder',
    company: 'Biketter Labs',
    videoLink: 'aoQHInAOQCU', // Replace with an actual YouTube video ID
  },
  {
    name: 'Ebrahim Mohamed',
    position: 'Founder',
    company: 'Ethereum STK',
    videoLink: 'oxry0sps1zQ', // No video link provided
  },
];




  return (
    <div className="about">
      <Main />
      <Cta title="Leading the Wave of Web3 Security" />

      <Vision />


      <div className="about-process about-audit-process">
        <AuditProcessdummy
subheading="We are a closely-knitted team of Web3 nerds based in India, constantly looking for ways to improve the overall security model of decentralized finance and blockchain. Our team comprises security experts"
          title="Elevating Protocol Safety Standards"
          processSteps={processSteps.slice(0, visibleSteps)} // Display limited steps
        />
        {visibleSteps < processSteps.length ? (
          <PrimaryBtn className='view-more-btn' text="View More" onClick={handleViewMore} />
        ) : (
          <PrimaryBtn text="View Less" onClick={handleViewLess} />
        )}
      </div>
      <Success />
      <Map />
      <VideoTestimonial
      title="Video Testimonial"
      description="We are a closely-knitted team of Web3 nerds based in India, constantly looking for ways to improve the overall security model of decentralized finance and blockchain."
      testimonials={testimonialsData}
    />
      <Culture />
      <div className="secure-audit">
<h2>
Stay Ahead of the Security Curve.
</h2>
</div>
    </div>
  );
};

export default About;
