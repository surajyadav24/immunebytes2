// src/components/CaseStudyCard.js
import React from 'react';
import './style.css';

const CaseStudyCard = ({ title, description, buttonText, imageSrc }) => {
  return (
    <div className="case-study-card home-casestudy">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">{buttonText}</button>
      </div>
      <div className="card-image">
        <img src={imageSrc} alt="Case study visual" />
      </div>
    </div>
  );
};

export default CaseStudyCard;
