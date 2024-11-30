import React, { useState, useEffect } from 'react';
import './style.css';
import { ReactComponent as Icon } from '../../assets/images/Pink.svg';
import { ReactComponent as Icon2 } from '../../assets/images/blue.svg';
import { ReactComponent as Icon3 } from '../../assets/images/Pink-Mobile.svg';
import { ReactComponent as Icon4 } from '../../assets/images/Blue-Mobile.svg';

const OtherWeb3Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen width is mobile-sized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Set initial value and add listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='otherweb3services'>
      <h2>Other Web3 Services</h2>
      <div className="otherweb3services-cards">
        <div className='otherweb3services-card'>
          <div className="svg">
            {isMobile ? <Icon3 /> : <Icon />}
          </div>
          <h3>Blockchain Security Service</h3>
          <p>A thorough assessment of your blockchain’s security posture, encompassing smart contracts, architecture, and development framework.</p>
        </div>
        <div className='otherweb3services-card'>
          <div className="svg">
            {isMobile ? <Icon4 /> : <Icon2 />}
          </div>
          <h3>Penetration Testing</h3>
          <p>In light of increasing traditional security breaches impacting Web3, ImmuneBytes offers penetration testing for decentralised applications.</p>
        </div>
      </div>
    </div>
  );
};

export default OtherWeb3Services;
