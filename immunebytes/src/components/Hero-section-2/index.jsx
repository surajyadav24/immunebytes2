import React from "react";
import "./style.css";
import PrimaryBtn from "../Primarybutton";
import Formpopup from "../Formpopup";
import iconarrow from '../../assets/images/arrowicon.svg'



const HeroSection2 = ({ 
  title, 
  highlight, 
  description, 
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
          <Formpopup
          auditName="Book Consultation"
          buttonClassName="btn btn-primary"
          arrowicon={iconarrow} // Pass the imported icon
        />
          </div>
        </div>
        <div className="hero-video">
          <img src={imageSrc} alt={altText} />
        </div>
        <div className="btn-wrapper mobile-hidden">
        <Formpopup
          auditName="Book Consultation"
          buttonClassName="btn btn-primary"
          arrowicon={iconarrow} // Pass the imported icon
        />
          </div>
      </div>
    </div>
  );
};

export default HeroSection2;
