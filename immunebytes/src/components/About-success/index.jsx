import React from 'react'
import './style.css'
import Aabhas from '../../assets/images/about-team/Aabhas-Sood-hvr.png'
import Naveen from '../../assets/images/about-team/Naveen-Rawat-hvr.png'

import Zaryab from '../../assets/images/about-team/Zaryab-Afser-hvr.png'

import Shubhi from '../../assets/images/about-team/Shubhi-Saran-hvr.png'

import Sheetal from '../../assets/images/about-team/Sheetal-Sinha-hvr.png'


const Success = () => {
  return (
    <>
      <div className='about-success'>
        <h2>Our Success Team</h2>
        <div className='about-card'>
            <div className='card'>
                <img src={Aabhas} alt="" />
               <div className="content">
               <h3>Aabhas Sood</h3>
               <p>Founder & CEO</p>
               </div>
            </div>
            <div className='card'>
                <img src={Zaryab} alt="" />
            <div className="content">
            <h3>Zaryab Afser</h3>
            <p>Lead Auditor</p>
            </div>
            </div>
            <div className='card'>
                <img src={Naveen} alt="" />
         <div className="content">
         <h3>Naveen Rawat</h3>
         <p>Marketing Lead</p>
         </div>
            </div>
            <div className='card'>
                <img src={Shubhi} alt="" />
                <div className='content'>
                    <h3>Shubhi Saran</h3>
                <p>Security Engineer</p></div>
            </div>
            <div className='card'>
                <img src={Sheetal} alt="" />
               <div className="content">
               <h3>Sheetal Sinha</h3>
               <p>Business Development</p>
               </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Success
