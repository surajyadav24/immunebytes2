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
        "A cyber security startup with an extensive product suite to focus on digital asset forensics, fraud prevention techniques and secured payment services.",
    },
    {
      icon:icon2,
      title: "MEXC global",
      subTitleProcess: "",
      description:
        "One of the first movers and pioneers of DeFi and blockchain, MEXC Global aims to become the go-to platform for traders and investors with their products - Futures, Spot and Leveraged ETFs.",
    },
    {
      icon:icon3,
      title: "BitMart",
      subTitleProcess: "",
      description:
        "One of the most trusted cryptocurrency trading platforms with an added ease of use, 800+ trading pairs, hot and cold wallet systems and an advanced risk management system.",
    },
    {
      icon:icon1,
      title: "Billic",
      subTitleProcess: "",
      description:
        "Web3 software development company dedicated to providing the best blockchain solutions to existing and emerging businesses, startups and industries with a use case of blockchain technology.",
    },
    {
      icon:icon2,
      title: "MEXC global",
      subTitleProcess: "",
      description:
        "Professional videogame developers with an experience of over a decade in traditional and blockchain gaming. They provide a unique process of in-depth incubation program for gamefi projects.",
    },
    {
      icon:icon3,
      title: "BitMart",
      subTitleProcess:
        "",
      description:
        "One of the most trusted cryptocurrency trading platforms with an added ease of use, 800+ trading pairs, hot and cold wallet systems and an advanced risk management system.",
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
        title="Elevating Protocol Safety Standards"
subheading="We are committed to raising the bar for Web3 safety through meticulous audits and innovative security solutions. By addressing vulnerabilities proactively, we empower blockchain projects to operate with confidence and resilience."
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
      description="Hear directly from our clients as they share their experiences with ImmuneBytes. Discover how our Web3 security expertise has helped them achieve their goals with confidence and trust."
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
