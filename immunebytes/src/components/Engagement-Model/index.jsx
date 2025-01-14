import React from 'react'
import './style.css'
import Ctacomponents from '../Cta-components'

import Formpopup from '../Formpopup';
import iconarrow from '../../assets/images/iconarrow.svg';

const EngagementModel = () => {
  return (
    <>
    <div className='engagementmodel'>
      <h2>Engagement Model</h2>
      <div className='engagementmodel-boxes'>
        <div className='engagementmodel-box'>
            <h3>Fixed Price</h3>
            <p>A comprehensive, end-to-end audit with a one-time cost, ensuring thorough analysis and a detailed report within a fixed budget.</p>
        </div>
        <div className='engagementmodel-box'>
            <h3>PPV</h3>
            <p>Pay only for confirmed vulnerabilities discovered during the audit, making it a cost-effective option for targeted security assessments.</p>
        </div>
        <div className='engagementmodel-box'>
            <h3>Retainer</h3>
            <p>Ongoing security support with periodic audits and updates, ensuring your project remains secure as it evolves over time.            </p>
        </div>
      </div>
      {/* <div className='engagementmodel-yellow-box'>
     <div className="content">
     <h3 className='engagementmodel-yellow-box-text'>Our security professionals are ready to guide you toward a safer future.</h3>
     <div className="button-container">
    
     </div>
     </div>
      </div> */}
  

  <Ctacomponents title="Leading the Wave of Web3 Security"/>
  
      </div>
    </>
  )
}

export default EngagementModel