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
        <p className="sub-heading-section">We are a closely-knitted team of Web3 nerds based in India, constantly looking for ways to improve the overall security model of decentralized finance and blockchain..</p>

        
        <div className='map'>
        <div className='map-topright'>
          <div className="tooltip">
            <h3>Top Right</h3>
            <p>This is a detailed description for the top-right location.</p>
          </div>
        </div>
        <MapIcon className='custom-svg' />
        <div className='map-bottomcenter'>
          <div className="tooltip">
            <h3>Bottom Center</h3>
            <p>This is a detailed description for the bottom-center location.</p>
          </div>
        </div>
        <div className='map-bottomright'>
            <div className="tooltip">
              <h3>Bottom Right</h3>
              <p>This is a detailed description for the bottom-right center location.</p>
            </div>
          </div>
      </div>
      </div>
</div>
    </>
  )
}

export default Map
