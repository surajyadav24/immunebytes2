// ProgressBar.jsx
import React from 'react';
import './style.css'; // Add custom styles here

const ProgressBar = ({ label, color, percentage }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-label">
        <span>{label}</span>
       
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
      <span>{percentage}%</span>
    </div>
  );
};

export default ProgressBar;
