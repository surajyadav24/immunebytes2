import React from "react";
import "./style.css";
import PrimaryBtn from "../Primarybutton";

const HeroSection2 = ({ 
  title, 
  highlight, 
  description, 
  buttonText, 
  imageSrc, 
  altText 
}) => {
  return (
    <div className="container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="homepage-heading">
            <span>{title}</span>
            <span className="highlight">{highlight}</span>
          </h1>
          <p>{description}</p>
          <div className="btn-wrapper dekstop-hidden">
            <PrimaryBtn text={buttonText} />
          </div>
        </div>
        <div className="hero-video">
          <img src={imageSrc} alt={altText} />
        </div>
        <div className="btn-wrapper mobile-hidden">
            <PrimaryBtn text={buttonText} />
          </div>
      </div>
    </div>
  );
};

export default HeroSection2;
