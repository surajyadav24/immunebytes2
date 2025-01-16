import React from 'react';
import './style.css';

const OtherWeb3Services = ({ services }) => {
  return (
<div className="container">
<div className='otherweb3services'>
      <h2>Other Web3 Services</h2>
      <div className="otherweb3services-cards">
        {services.map((service, index) => (
          <div key={index} className='otherweb3services-card'>
            <div className="image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default OtherWeb3Services;
