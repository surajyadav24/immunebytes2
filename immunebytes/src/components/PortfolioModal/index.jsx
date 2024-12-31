import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoughnutChart from '../Doughnutchart'; // Import the DoughnutChart component
import './style.css';
import close from '../../assets/images/portfolio/close-btn.svg';
// import Modal from './Modal.js'

const PortfolioModal = ({ selectedItemId, closeModal }) => {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data for the selected item when modal opens
  useEffect(() => {
    const fetchPortfolioData = async () => {
      if (!selectedItemId) {
        console.log("selectedItemId is not available");
        return;
      }
      try {
        const response = await axios.post(`/api/v1/users/getportfolio/${selectedItemId}`);
        if (response.data.statusCode === 200) {
          setPortfolioData(response.data.data.portfolio);
        } else {
          setError('Failed to fetch portfolio data.');
        }
      } catch (err) {
        console.error(err);
        setError('An error occurred while fetching portfolio data.');
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolioData();
  }, [selectedItemId]);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  // If portfolio data is loaded, extract the error entries
  const { errorEntries = [], auditData, name, image, platform, auditDate, companyDescription, pdf } = portfolioData || {};
  console.log(pdf,"pdf in portfolio modal")


  const formatAuditDate = (date) => {
    if (date) {
      return new Date(date).toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    }
    return 'N/A';
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }
  // Define mappings
const errorTypeClasses = {
  validation: 'validation',
  server: 'server',
  authentication: 'authentication',
  network: 'network',
};

const errorStatusClasses = {
  active: 'active',
  resolve: 'resolve',
  pending: 'pending',
  close: 'close',
};

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal} aria-label="Close">
          <img src={close} alt="Close" />
        </button>
        <div className="modal-left">
          <div className="company-info">
            <div className="company-logo">
              {image && <img src={image} alt={name} />}
            </div>
            <div className="company-name">{name}</div>
            <div className="platform-name">{platform}</div>
            {/* Add the DoughnutChart based on audit data */}
            <DoughnutChart data={auditData?.progress || "hey"} />
            <div className="developer-response">Developer Response</div>
          </div>
        </div>                    
        <div className="modal-right">
          <div className="company-description">
            <h3>Company Description</h3>
            <p>{companyDescription || 'No description available'}</p>
          </div>
          <div className="audit-date">
            <strong>Audit Date: </strong>{formatAuditDate(auditDate)}
          </div>
          {/* Month selector */}
          <div className="month-selector">
            <label htmlFor="month-select">Select Month:</label>
            <select id="month-select" value={selectedMonth} onChange={handleMonthChange}>
              {Object.keys(auditData || {}).map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
          {/* Error entries rendering */}
          {errorEntries.length > 0 ? (
            <div className="error-list">
              {errorEntries.map((error, index) => {
                  const errorTypeClass = errorTypeClasses[error.errorType.toLowerCase()] || 'unknown';
                  const errorStatusClass = errorStatusClasses[error.errorStatus.toLowerCase()] || 'unknown';
                  return ( // Add a return here
                    <div key={index} className="error-row">
                      <div className={`severity ${errorTypeClass}`}>
                        {error.errorType}
                      </div>
                      <div className="error-msg">{error.errorDescription}</div>
                      <div className={`status ${errorStatusClass}`}>
                        {error.errorStatus}
                      </div>
                    </div>
                  );
})}
            </div>
          ) : (
            <p>No errors to display for {selectedMonth}.</p>
          )}
          <div className="modal-actions">
            <button className="request-btn" aria-label="Request Audit">
              Request Audit
            </button>
            {pdf ? (
              <a
                href={pdf || "#" }
                className="download-btn"
                aria-label="Download Report"
                download={true}
              >
                Download Report
              </a>
            ) : (
              <button className="download-btn" aria-label="No Report Available" disabled>
                Download Report
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
