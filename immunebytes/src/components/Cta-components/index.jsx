import React from 'react';
import './style.css';
import PrimaryBtn from '../Primarybutton';
import Formpopup from '../Formpopup';
import iconarrow from '../../assets/images/iconarrow.svg'; // Correctly import the icon

const Cta = ({ title }) => {
  return (
    <div className="container">
      <div className="cta-wrapper">
        <h2>{title}</h2>
        <Formpopup
          auditName="Request Audit"
          buttonClassName="btn btn-primary"
          arrowicon={iconarrow} // Pass the imported icon
        />
      </div>
    </div>
  );
};

export default Cta;
