import React from 'react';
import './style.css';

const ImageTextSection = ({ imageSrc, text }) => {
  return (
    <div className="image-text-section">
      <img src={imageSrc} alt="Section" className="section-image" />
      <p className="coin-text">{text}</p>
    </div>
  );
};

export default ImageTextSection;