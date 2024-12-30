import React from "react";
import "./style.css";

const WhyChooseUsSec = ({ cards }) => {
  return (
    <div className="why-choose-us">
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSec;
