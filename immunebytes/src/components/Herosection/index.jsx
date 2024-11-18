import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import leftboximg from '../../assets/images/left-box.svg'
import rightboximg from '../../assets/images/right-box.svg'
import gifvideo from '../../assets/images/Hero-section/logo-v.mp4'
const Herosection = () => {
  return (
    <>
    <div className="hero-wrapper">
    <div className=" sm-py-2 hero-wrapper-sub">
      <div className="container">
      {/* <h1 className="display-4 heading font-weight-bold">
      <span>BLOCKCHAIN</span>  SECURITY
            </h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  </p> */}
        <div className="row align-items-center py-5">
          <div className="col-md-6 col-sm-6 d-flex justify-content-end">
           
    <div className="left-box">
{/* <img src={leftboximg
} alt="" /> */}
    </div>
          </div>
  
          <div className="col-md-6 col-sm-6 d-flex justify-content-start">
          <div className="right-box">
          {/* <img src={rightboximg
} alt="" /> */}
<video className='gif-video' src={gifvideo} autoPlay loop muted playsInline></video>

          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Herosection;
