import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoughnutChart from '../Doughnutchart'; // Import the DoughnutChart component
import './style.css';
import close from '../../assets/images/portfolio/close-btn.svg';

const PortfolioModal = ({ selectedItemId, closeModal }) => {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data for the selected item when modal opens
  useEffect(() => {
    const fetchPortfolioData = async () => {
      if (!selectedItemId) {
        // setError('No item selected.');
        console.log("selecteditemid is not available")
        // setLoading(false);
        // return;
      }
      try {
        if (selectedItemId) {
          const response = await axios.post(`/api/v1/users/getportfolio/${selectedItemId}`);
          if (response.data.statusCode === 200) {
            setPortfolioData(response.data.data.portfolio);
            console.log("Response select item id",response)
          } else {
            setError('Failed to fetch portfolio data.');
          }
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

  // Get dynamic data based on selected month (you can replace this with fetched data as needed)
  const auditData = {
    January: {
      errors: [
        { severity: 'High', errorMsg: 'Lorem Ipsum is simply dummy', status: 'Fixed' },
        { severity: 'Medium', errorMsg: 'Lorem Ipsum is simply dummy', status: 'Open' },
        { severity: 'Critical', errorMsg: 'Lorem Ipsum is simply dummy', status: 'Acknowledged' },
        { severity: 'Medium', errorMsg: 'Lorem Ipsum is simply dummy', status: 'Redacted' },
        { severity: 'Informational', errorMsg: 'Lorem Ipsum is simply dummy', status: 'Fixed' },
        { severity: 'High', errorMsg: 'Lorem Ipsum is simply dummy', status: 'Open' },
        { severity: 'Critical', errorMsg: 'Lorem Ipsum is simply dummy', status: 'Fixed' },
      ],
      progress: {
        final: 30,
        resolved: 40,
        open: 15,
        acknowledged: 15
      }
    },
    // Additional months can be defined similarly...
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const monthData = auditData[selectedMonth] || { errors: [], progress: {} };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Destructure portfolioData
  const { image, name, platform, auditDate,companyDescription,errorDescription,errorStatus,errorType,pdf,status,errorBags } = portfolioData || {};

  const formatAuditDate = (date) => {
    if (date) {
      const localDate = new Date(date).toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      return localDate;
    }
    return 'N/A';
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
            {/* Pass the dynamic progress data to the DoughnutChart */}
            <DoughnutChart data={monthData.progress} />
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

          {/* Month Selector */}
          <div className="month-selector">
            <label htmlFor="month-select">Select Month:</label>
            <select id="month-select" value={selectedMonth} onChange={handleMonthChange}>
              {Object.keys(auditData).map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* Dynamic Error List based on selected month */}
          {monthData.errors.length > 0 ? (
            <div className="error-list">
              {monthData.errors.map((error, index) => (
                <div key={index} className="error-row">
                  <div className={`severity ${error.severity.toLowerCase()}`}>
                    {error.severity}
                  </div>
                  <div className="error-msg">{errorDescription}</div>
                  <div className={`status ${status.toLowerCase()}`}>
                    {status}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No errors to display for {selectedMonth}.</p>
          )}

          <div className="modal-actions">
            <button className="request-btn" aria-label="Request Audit">Request Audit</button>
            {pdf ? (
  <a
    href={pdf}
    download // This ensures the file is downloaded directly
    className="download-btn"
    aria-label="Download Report"
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
