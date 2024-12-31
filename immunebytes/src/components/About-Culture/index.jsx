import React from 'react'
import './style.css'
import culture1 from '../../assets/images/about-culture/culture1.png'
import culture2 from '../../assets/images/about-culture/culture2.png'
import culture3 from '../../assets/images/about-culture/culture3.png'
import culture4 from '../../assets/images/about-culture/culture4.png'
import culture5 from '../../assets/images/about-culture/culture5.png'
import culture6 from '../../assets/images/about-culture/culture6.png'
import culture7 from '../../assets/images/about-culture/culture7.png'


const Culture = () => {
  return (
    <>
<div className="container">
<div className='about-culture'>
        <h2 className='section-heading'>Our Culture</h2>
        <p className='sub-heading-section'>We are a closely-knitted team of Web3 nerds based in India, constantly looking for ways to improve the overall security model of decentralized finance and blockchain.</p>
        <div className='image-slidder'>
        <div className='image-slidder-one'>
          <img src={culture1} alt="culture1" />
          <img src={culture2} alt="culture2" />
          <img src={culture3} alt="culture3" />
          <img src={culture4} alt="culture4" />
          <img src={culture1} alt="culture1" />
          <img src={culture2} alt="culture2" />
          <img src={culture3} alt="culture3" />
          <img src={culture4} alt="culture4" />
        </div>
        <div className='image-slidder-two'>
        <img src={culture5} alt="culture5" />
          <img src={culture6} alt="culture6" />
          <img src={culture7} alt="culture7" />
          <img src={culture5} alt="culture5" />
          <img src={culture6} alt="culture6" />
          <img src={culture7} alt="culture7" />
        </div>

        </div>
      </div>
</div>
    </>
  )
}

export default Culture
