import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import rightboximg from '../../assets/images/hero-section.svg'
const Serviceherosection = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className=" sm-py-2 hero-wrapper-sub">
          <div className="container">
            <div className="row align-items-center py-5">
              <div className="col-md-6 col-sm-6 d-flex justify-content-end">
                <div className="left-box">
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
