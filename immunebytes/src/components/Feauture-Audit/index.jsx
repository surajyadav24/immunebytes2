import React from "react";
import "./style.css"; // Custom CSS file for this section
import staderLogo from "../../assets/images/sliderlogo/staderlogo.svg"; // Replace with actual logo path
import arrowIcon from "../../assets/images/arrow.svg"; // Replace with actual arrow icon path
import profileImage from "../../assets/images/testimonial/testimonial (4).png"; // Replace with actual profile image path
import PrimaryBtn from "../Primarybutton";
function FeaturedAudit() {
  return (
<div className="container feature-wrapper">
      <div className="featured-audit-container">
      <h2 className="featured-audit-title">Featured Audit</h2>
      <div className="featured-audit-grid">
        {/* Stader Card */}
        <div className="featured-card stader-card">
          <img src={staderLogo} alt="Stader Logo" className="stader-logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        {/* Case Study Card */}
        
        <div className="featured-card case-study-card">
          <h3>CASE <span>STUDY</span></h3>
          <button className="arrow-btn">
          <span>→</span>
          </button>
        </div>
        {/* Talk With Us Card */}
 
      </div>
<div className="audit-flex-sec">
<div className="featured-card talk-card">
          <h3>TALK <span>WITH US</span></h3>
          <PrimaryBtn text="Request Audit"/>
        </div>
        {/* Testimonial Card */}
        <div className="featured-card testimonial-card">
          <div className="testimonial-header">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <div>
              <h4>DHEERAJ BORRA</h4>
              <p>Stader Labs, Co-Founder</p>
            </div>
          </div>
          <blockquote>
            “ImmuneBytes demonstrated the perfect blend of expertise, commitment, and accountability, resulting in an audit that surpassed expectations. Their thorough approach and dedication ensured a high-quality outcome, reflecting their capability and professionalism in delivering exceptional service.”
          </blockquote>
        </div>
</div>


    </div>
</div>
  );
}

export default FeaturedAudit;
