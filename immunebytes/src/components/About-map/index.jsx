import React from 'react'
import './style.css'
import map from '../../assets/images/About-map.png'

const Map = () => {
  return (
    <>
      <div className='about-map'>
        <h2>We’re here for you <br />
        <span>no matter where you are</span></h2>
        <div className='map'>
          <img src={map} alt="" />
        </div>
      </div>
    </>
  )
}

export default Map
