import React, { useState } from 'react';
import DoughnutChart from '../Doughnutchart'; // Import the DoughnutChart component
import './style.css';
import close from '../../assets/images/portfolio/close-btn.svg'
// Data for multiple months
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
  February: {
    errors: [
      { severity: 'Medium', errorMsg: 'Lorem Ipsum is simply dummy', status: 'Redacted' },
      { severity: 'Informational', errorMsg: 'Lorem Ipsum is simply dummy', status: 'Fixed' },
    ],
    progress: {
      final: 25,
      resolved: 35,
      open: 10,
      acknowledged: 30
    }
  },
  March: {
    errors: [
      { severity: 'High', errorMsg: 'Lorem Ipsum is simply dummy', status: 'Open' },
      { severity: 'Critical', errorMsg: 'Lorem Ipsum is simply dummy', status: 'Fixed' },
    ],
    progress: {
      final: 20,
      resolved: 50,
      open: 20,
      acknowledged: 10
    }
  }
};

const PortfolioModal = ({ item, closeModal }) => {
  const [selectedMonth, setSelectedMonth] = useState('January');

  // Handle the month change to dynamically update data
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  // Get dynamic data based on selected month
  const monthData = auditData[selectedMonth] || { errors: [], progress: {} };
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}><img src={close} alt="" /></button>
        <div className="modal-left">
          <div className="company-info">
            <div className="company-logo">
              <img src={item.name} alt={item.name} />
            </div>
            <div className="company-name">{item.nameString}</div>
            <div className="platform-name">{item.platform}</div>
            {/* Pass the dynamic progress data to the DoughnutChart */}
            <DoughnutChart data={monthData.progress} />
            <div className="developer-response">Developer Response</div>
          </div>
        </div>
        <div className="modal-right">
          <div className="company-description">
            <h3>Company Description</h3>
            <p>{item.description}</p>
          </div>
          <div className="audit-date">
            <strong>Audit Date: </strong>{item.auditDate}
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
                  <div className="error-msg">
                    {error.errorMsg}
                  </div>
                  <div className={`status ${error.status.toLowerCase()}`}>
                    {error.status}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No errors to display for {selectedMonth}.</p>
          )}

          <div className="modal-actions">
            <button className="request-btn">Request Audit</button>
            <button className="download-btn">Download Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
