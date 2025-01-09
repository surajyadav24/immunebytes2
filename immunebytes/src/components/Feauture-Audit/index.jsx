import React from "react";
import "./style.css"; // Custom CSS file for this section
import PrimaryBtn from "../Primarybutton";

import Formpopup from "../Formpopup";
import iconarrow from "../../assets/images/arrowicon.svg"

function FeaturedAudit({
  title,
  auditCards,
  testimonial,
}) {
  return (
    <div className="container feature-wrapper">
      <div className="featured-audit-container">
        <h2 className="featured-audit-title">{title}</h2>
        <div className="featured-audit-grid">
          {auditCards.map((card, index) => (
            <div className={`featured-card ${card.className}`} key={index}>
              {card.logo && (
                <img src={card.logo} alt={`${card.title} Logo`} className={card.logoClass} />
              )}
              {card.content && <p>{card.content}</p>}
              {card.button && (
                <button className={card.button.className}>
                  <span>{card.button.text}</span>
                </button>
              )}
              {card.title && (
                <h3>
                  {card.title} <span>{card.subtitle}</span>
                </h3>
              )}
            </div>
          ))}
        </div>
        <div className="audit-flex-sec">
          <div className="featured-card talk-card">
            <h3>
              {testimonial.talkTitle} <span>{testimonial.talkSubtitle}</span>
            </h3>
            <Formpopup
          auditName="Request Audit"
          buttonClassName="btn btn-primary"
          arrowicon={iconarrow} // Pass the imported icon
        />
          </div>
          <div className="featured-card testimonial-card">
            <div className="testimonial-header">
              <img
                src={testimonial.image}
                alt="Profile"
                className="profile-image"
              />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
            <blockquote>{testimonial.quote}</blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedAudit;
