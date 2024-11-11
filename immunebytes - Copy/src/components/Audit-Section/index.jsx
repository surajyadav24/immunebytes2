// AuditSection.jsx
import React from 'react';
import ProgressBar from '../Progressbar';
import './style.css'; // Custom styles for the section

const AuditSection = () => {
  return (
<div className="container">    <div className="audit-section">
      <h2 className="audit-section-title">
        <span className="highlight">EXPLORE</span> OUR AUDITS
      </h2>
      <p className="audit-section-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>

      <div className="audit-content">
        <div className="audit-details">
          <h3>Smart Contract Audit</h3>
          <p>
            An extensive evaluation of your smart contract code’s security, business functionality, and adherence to industry standards.
          </p>
          <button className="contact-btn">Contact us</button>
        </div>

        <div className="audit-progress">
          <h4>Severity Found</h4>
          <ProgressBar label="Critical" color="#ff4d4d" percentage={58} />
          <ProgressBar label="High" color="#ff9966" percentage={70} />
          <ProgressBar label="Medium" color="#ffcc66" percentage={30} />
          <ProgressBar label="Low" color="#66ff66" percentage={60} />
          <ProgressBar label="Informational" color="#66cc66" percentage={90} />
        </div>
      </div>
    </div></div>
  );
};

export default AuditSection;
