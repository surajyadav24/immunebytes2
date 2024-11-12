import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const StatsSection = () => {
  return (
    <div className="container stats-container">
      <div className="row justify-content-between">
        <div className="col-lg-3 col-md-4 col-sm-12 stat-card yellow-border">
          <h2>205+</h2>
          <p>Project Audited</p>
        </div>
        <div className="col-lg-6 col-md-4 col-sm-12 stat-card red-border">
          <h2>5.2Bn</h2>
          <p>Onchain Value Secured</p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12 stat-card green-border">
          <h2>175+</h2>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
