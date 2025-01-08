import React from "react";
import "./style.css";
import PrimaryBtn from "../Primarybutton";

const ServicesComponent = ({ heading, paragraphtext, imageSrc, className }) => {
  return (
    <div className={`services-component ${className}`}>
      <div className="container-fluid">
  
        <div className="row">
          <div className="col-lg-7 md-6 col-sm-8 col-xs-8 left-serv">
            <div className="service-discription">
              <h2>{heading}</h2>
              <p>{paragraphtext}</p>
              <PrimaryBtn text="View More" />
            </div>
          </div>
          <div className="col-lg-5 md-6 col-sm-4 col-xs-4 right-serv">
            <div className="service-img">
              <img src={imageSrc} alt="Services" className="services-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
