import React from 'react';
import './style.css';
import github from "../../assets/images/github-white.svg"
import linkedin from "../../assets/images/linkedin-white.svg"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
        <div className="col-lg-3 col-md-6  footer-section  footer-section-4 footer-mobile">
            <h3>Subscribe</h3>
            <form>
              <label htmlFor="first&lastname">First & Last Name</label>
              <input type="text" placeholder="First & Last Name" />
              <label htmlFor="email">E-mail</label>
              <input type="email" placeholder="Email Address" />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 footer-section footer-section-1">
            <h3>Home</h3>
            <ul>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Request audit</a></li>
            </ul>
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/immunebytes"><img src={linkedin} alt="" /></a>
              <a href="https://github.com/ImmuneBytes"><img src={github} alt="" /></a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 footer-section footer-section-2">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Smart contract audit</a></li>
              <li><a href="#">Blockchain security service</a></li>
              <li><a href="#">Penetration Testing</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 footer-section footer-section-3">
            <h3>Contact us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="col-lg-3 col-md-6  footer-section  footer-section-4">
            <h3>Subscribe</h3>
            <form>
              <label htmlFor="first&lastname">First & Last Name</label>
              <input type="text" placeholder="First & Last Name" />
              <label htmlFor="email">E-mail</label>
              <input type="email" placeholder="Email Address" />
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="social-icons mobile-social">
          <a href="https://www.linkedin.com/company/immunebytes"><img src={linkedin} alt="" /></a>
          <a href="https://github.com/ImmuneBytes"><img src={github} alt="" /></a>
            </div>

          <div className="col-12 footer-bottom  d-flex justify-content-between align-items-center">
            <p>©2024 ImmuneBytes. All Rights Reserved</p>
            <div className="footer-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
