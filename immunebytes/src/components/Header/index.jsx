import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../../assets/images/logos/Logo.svg';
import Formpopup from '../Formpopup';
import dropdown from '../../assets/images/dropdown.svg'

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For Services dropdown (desktop)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // For Services dropdown (mobile)

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu on click
  };

  const toggleDropdown = (state) => {
    setIsDropdownOpen(state);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <>
      <header className="text-white p-3">
        <div className="container d-flex justify-content-between align-items-center p-0">
          <div className="h3 font-weight-bold logo">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>

          {/* Desktop Nav: Hidden on mobile/tablet */}
          <nav className="desktop-nav d-none d-lg-block">
            <ul className="nav">
              <li
                className="nav-item dropdown"
                onMouseEnter={() => toggleDropdown(true)}
                onMouseLeave={() => toggleDropdown(false)}
              >
                <a href="#" className="nav-link text-white">Services <span><img src={dropdown} alt="" /></span></a>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><a href="/smartcontract" className="dropdown-item">Smart Contract</a></li>
                    <li><a href="/penetration-testing" className="dropdown-item">Penetration Testing</a></li>
                    <li><a href="/blockchainaudit" className="dropdown-item">Blockchain Audit</a></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <a href="/portfolio" className="nav-link text-white">Portfolio</a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link text-white">About Us</a>
              </li>
              <li className="nav-item">
                <a href="/blog" className="nav-link text-white">Blog</a>
              </li>
            </ul>
          </nav>

          {/* Request Button */}
          <div className="desktop-btn-request">
            <Formpopup />
          </div>

          {/* Hamburger Menu for Mobile & Tablet */}
          <div className="hamburger d-lg-none" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        {/* Mobile/Tablet Menu */}
        {isOpen && (
          <nav className="mobile-nav d-lg-none">
            <ul className="nav flex-column">
              <li className="nav-item">
                <div className="nav-link text-white" onClick={toggleMobileDropdown}>Services</div>
                {isMobileDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><a href="/smartcontract" className="dropdown-item">Smart Contract</a></li>
                    <li><a href="/penetration-testing" className="dropdown-item">Penetration Testing</a></li>
                    <li><a href="/blockchainaudit" className="dropdown-item">Blockchain Audit</a></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <a href="/portfolio" className="nav-link text-white">Portfolio</a>
              </li>
              <li className="nav-item">
                <a href="/about-us" className="nav-link text-white">About Us</a>
              </li>
              <li className="nav-item">
                <a href="/blog" className="nav-link text-white">Blog</a>
              </li>
              <li className="nav-item">
                <Formpopup />
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
