import React from "react";
import "./style.css";

const WhyChooseUsSec = () => {
  const cards = [
    { text: "5+ Experience in Web3 Security" },
    { text: "315+ Happy Clients Globally" },
    { text: "100+ Critical Issues Reported" }
  ];

  return (
    <div className="why-choose-us">
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
           
          >
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsSec;
