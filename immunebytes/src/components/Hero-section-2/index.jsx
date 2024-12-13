import React from "react";
import "./style.css";
import PrimaryBtn from "../Primarybutton";

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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-element"
        >
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
</div>
  );
};

export default HeroSection2;
