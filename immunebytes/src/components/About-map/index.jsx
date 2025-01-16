import React from 'react'
import './style.css'
import {ReactComponent as MapIcon} from '../../assets/images/WorldMap.svg'

const Map = () => {
  return (
    <>
<div className="container">
 <div className='about-map'>
        <h2>We’re here for you <br />
        <span>no matter where you are</span></h2>
        <p className="sub-heading-section">Global Security Solutions for the Web3 Ecosystem. Providing expert auditing and support to safeguard your blockchain projects, wherever you are in the world.</p>

        
        <div className='map'>
        <div className='map-topright'>
          <div className="tooltip">
            <h3>Lomad</h3>
            <p>ImmuneBytes collaborated with Lomad, decentralized platform facilitating the creation and management of DAOs, to conduct thorough penetration testing. By uncovering potential vulnerabilities and providing strategic mitigation measures, ImmuneBytes ensured Lomad's evolving ecosystem was fortified against security threats, enhancing its trustworthiness and user safety.</p>
          </div>
        </div>
        <MapIcon className='custom-svg' />
        <div className='map-bottomcenter'>
          <div className="tooltip">
            <h3>Vanar</h3>
            <p>Robots can do audits, but the personal touch makes a difference. That's why we love Immunebytes! Not only do they do top-class audits, but they also take the time to understand our project and why certain things are done in specific ways. They take the time to ensure we feel heard, which shows in their work.
            </p>
          </div>
        </div>
        <div className='map-bottomright'>
            <div className="tooltip">
              <h3>cSigma</h3>
              <p>cSigma, a leading decentralized lending protocol, partnered with ImmuneBytes to secure their smart contracts. Through an in-depth audit, we identified critical vulnerabilities and implemented robust solutions, ensuring the cSigma platform's reliability. The collaboration not only enhanced their security posture but also enforced trust among its users. This case study showcases our expertise in delivering top-notch blockchain security solutions.</p>
            </div>
          </div>
      </div>
      </div>
</div>
    </>
  )
}

export default Map
