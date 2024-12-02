import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import leftboximg from '../../assets/images/hero-box.svg'
import rightboximg from '../../assets/images/hero-section.svg'
import gifvideo from '../../assets/images/Hero-section/logo-v.mp4'
const Serviceherosection = () => {
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
                  {/* <img src={leftboximg} alt="" /> */}
                  <div className='content'>
                    <h2>Smart <br /> <span>Contract Audit</span></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-sm-6 d-flex justify-content-start">
                <div className="right-box">
                  <img src={rightboximg} ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Serviceherosection;
