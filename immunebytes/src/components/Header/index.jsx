import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/images/logos/Logo.svg";
import Formpopup from "../Formpopup";
import dropdown from "../../assets/images/dropdown.svg";
import defi from "../../assets/images/header/defi.svg";
import nft from "../../assets/images/header/crypto.svg";
import token from "../../assets/images/header/token.svg";
import dapp from "../../assets/images/header/dapp.svg";

function DropdownMenu({ title, links }) {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link text-white">
        {title} <span><img src={dropdown} alt="dropdown icon" /></span>
      </a>
      <ul className="dropdown-menu">
        {links.map((link, index) => (
          <li key={index} className="nav-item dropdown">
            <a href={link.href} className="dropdown-item">
              {link.label}
            </a>
            {link.subLinks && (
              <ul className="dropdown-menu sub-menu">
                {link.subLinksLabel && (
                  <span className="dropdown-header">{link.subLinksLabel}</span>
                )}
                {link.subLinks.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <a href={subLink.href} className="dropdown-item">
                      {subLink.icon && <img src={subLink.icon} alt={subLink.label} className="menu-icon" />}
                      {subLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {link.subLinksByServices && (
              <ul className="dropdown-menu sub-menu submenu-services">
                {link.subLinksLabelServices && (
                  <span className="dropdown-header">{link.subLinksLabelServices}</span>
                )}
                {link.subLinksByServices.map((subLink, subIndex) => (
                  <li key={subIndex}>
                    <a href={subLink.href} className="dropdown-item">
                      {subLink.icon && <img src={subLink.icon} alt={subLink.label} className="menu-icon" />}
                      {subLink.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const dropdownLinks = [
    {
      href: "/smartcontract",
      label: "Smart Contract",
      subLinksLabel: "By Type",
      subLinks: [
        { href: "/new-menu1", label: "Defi", icon: defi },
        { href: "/new-menu2", label: "Nft", icon: nft },
        { href: "/new-menu3", label: "Token", icon: token },
        { href: "/new-menu4", label: "Dapp", icon: dapp },
      ],
      subLinksLabelServices: "By Services",
      subLinksByServices: [
        { href: "/service-menu1", label: "Ethereum", icon: defi },
        { href: "/service-menu2", label: "Solana", icon: nft },
        { href: "/service-menu3", label: "Service 3", icon: token },
        { href: "/service-menu4", label: "Service 4", icon: dapp },
      ],
    },
    {
      href: "/penetration-testing",
      label: "Penetration Testing",
    },
    {
      href: "/blockchainaudit",
      label: "Blockchain Audit",
    },
  ];

  return (
    <header className="text-white p-3">
      <div className="container d-flex justify-content-between align-items-center p-0">
        <div className="h3 font-weight-bold logo">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        <nav className="desktop-nav d-none d-lg-block">
          <ul className="nav">
            <DropdownMenu title="Services" links={dropdownLinks} />
            <li className="nav-item">
              <a href="/portfolio" className="nav-link text-white">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link text-white">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link text-white">
                Blog
              </a>
            </li>
          </ul>
        </nav>

        <div className="desktop-btn-request">
          <Formpopup />
        </div>

        <div className="hamburger d-lg-none" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {isOpen && (
        <nav className="mobile-nav d-lg-none">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="/services" className="nav-link text-white">
                Services
              </a>
              <ul className="dropdown-menu">
                {dropdownLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="dropdown-item">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <a href="/portfolio" className="nav-link text-white">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link text-white">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link text-white">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <Formpopup />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
