import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressBar from '../Progressbar';
import './style.css'; // Custom styles for the section
import AuditProgress from '../Audit-Progress';
import Formpopup from '../Formpopup'
import AuditCarousel  from '../Audit-slider';
const AuditSection = () => {
  const [percentages, setPercentages] = useState({
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    informational: 0,
  });

  useEffect(() => {
    const fetchSeverityData = async () => {
      try {
        const response = await axios.post('/api/v1/users/getseverity');
        if (response.data && response.data.data && response.data.data.percentages) {
          setPercentages(response.data.data.percentages); // Use percentages from the response
        } else {
          console.error('Invalid response data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching severity data', error);
      }
    };

    fetchSeverityData();
  }, []);

  return (
    <div className="container">
      <div className="audit-section">
        <h2 className="audit-section-title">
          <span className="highlight">EXPLORE</span> OUR AUDITS
        </h2>
        <p className="audit-section-description">
        Discover our portfolio of meticulously conducted security audits, where each audit reflects our commitment to enhancing blockchain security and reliability. Browse through to see how we’ve helped clients build trust and safeguard their Web3 solutions.
        </p>

        <div className="audit-content">
          <div className="audit-details"> 

          <AuditCarousel />
            
{/* <div className="audit-slider">
<h3>Smart Contract Audit</h3>
            <p>
              An extensive evaluation of your smart contract code’s security, business functionality, and adherence to industry standards.
            </p>
           
            <Formpopup auditName="Contact Us" buttonClassName="register-btn" />

</div> */}
          </div>

          <div className="audit-progress">
            <h4>Severity Found</h4>
            <ProgressBar label="Critical" color="#B22222" percentage={percentages.critical} />
            <ProgressBar label="High" color="#DC143C" percentage={percentages.high} />
            <ProgressBar label="Medium" color="#FF8C00" percentage={percentages.medium} />
            <ProgressBar label="Low" color="#DAA520" percentage={percentages.low} />
            <ProgressBar label="Informational" color="#228B22" percentage={percentages.informational} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditSection;
