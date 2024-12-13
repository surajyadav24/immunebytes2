import React from "react";
import "./style.css";
import PrimaryBtn from "../Primarybutton";

import gif1 from "../../assets/images/Hero-section/hero-gif.gif"

const HeroSection2 = () => {
  return (
<div className="container">
<div className="hero-section">
      <div className="hero-content">
        <h1>
          <span>Threat Perspective,</span> <br />
          <span className="highlight">Defense Expertise!</span>
        </h1>
        <p>
          Securing the Web3 industry through rigorous code audits as we empower
          protocols with trust, transparency, and impenetrable defense.
        </p>
        <div className="btn-wrapper">
        <PrimaryBtn text="Book Consultation" />
      </div>
      </div>
      <div className="hero-video">
<img src={gif1} alt="immnunebytes" />
      </div>
    </div>
</div>
  );
};

export default HeroSection2;
