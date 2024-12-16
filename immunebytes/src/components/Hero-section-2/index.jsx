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
          <h1>
            <span>{title}</span> <br />
            <span className="highlight">{highlight}</span>
          </h1>
          <p>{description}</p>
          <div className="btn-wrapper">
            <PrimaryBtn text={buttonText} />
          </div>
        </div>
        <div className="hero-video">
          <img src={imageSrc} alt={altText} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
