import React from "react";
import "./style.css";
import Aabhas from "../../assets/images/about-team/Aabhas-Sood-hvr.png";
import Naveen from "../../assets/images/about-team/Naveen-Rawat-hvr.png";
import Zaryab from "../../assets/images/about-team/Zaryab-Afser-hvr.png";
import Shubhi from "../../assets/images/about-team/Shubhi-Saran-hvr.png";
import Sheetal from "../../assets/images/about-team/Sheetal-Sinha-hvr.png";
import linkedin from "../../assets/images/about-team/Linkedin.svg"
import telegram from "../../assets/images/about-team/telegram.svg"

const Success = () => {
  const team = [
    {
      name: "Aabhas Sood",
      designation: "Founder & CEO",
      image: Aabhas,
      linkedin: "https://www.linkedin.com/in/aabhas-sood",
      telegram: "https://t.me/aabhassood",
    },
    {
      name: "Zaryab Afser",
      designation: "Lead Auditor",
      image: Zaryab,
      linkedin: "https://www.linkedin.com/in/zaryab-afser",
      telegram: "https://t.me/zaryabafser",
    },
    {
      name: "Naveen Rawat",
      designation: "Marketing Lead",
      image: Naveen,
      linkedin: "https://www.linkedin.com/in/naveen-rawat",
      telegram: "https://t.me/naveenrawat",
    },
    {
      name: "Shubhi Saran",
      designation: "Security Engineer",
      image: Shubhi,
      linkedin: "https://www.linkedin.com/in/shubhi-saran",
      telegram: "https://t.me/shubhisaran",
    },
    {
      name: "Sheetal Sinha",
      designation: "Business Development",
      image: Sheetal,
      linkedin: "https://www.linkedin.com/in/sheetal-sinha",
      telegram: "https://t.me/sheetalsinha",
    },
  ];

  return (
<div className="container">
<div className="about-success">
      <h2 className="section-heading">Our Success Team</h2>
      <p className="sub-heading-section">We are a closely-knitted team of Web3 nerds based in India, constantly looking for ways to improve the overall security model of decentralized finance and blockchain. Our team comprises security experts with significant experience developing and auditing DeFi protocols, smart contracts, and NFTs.</p>
      <div className="about-card">
        {team.map((member, index) => (
          <div className="card" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="content">
              <h3>{member.name}</h3>
              <p>{member.designation}</p>
              <div className="social-links-team">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="" />
                </a>
                <a href={member.telegram} target="_blank" rel="noopener noreferrer">
                <img src={telegram} alt="" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default Success;
