import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import Formpopup from '../Formpopup';
import './AuditCarousel.css';

const AuditCarousel = () => {
  const slides = [
    {
      id: 1,
      title: 'Smart Contract Audit',
      description:
        "An extensive evaluation of your smart contract code for security, verification of business specifications, and adherence to industry standards for code reusability.",
    },
    {
      id: 2,
      title: 'Blockchain Security Audit',
      description:
        "A thorough assessment of your blockchain’s security posture, encompassing architecture, network layer, transaction layer, ledger layer, and other frameworks.",
    },
    {
      id: 3,
      title: 'Penetration Testing',
      description:
        "Amid the rising incidence of traditional security breaches affecting Web3, ImmuneBytes provides penetration testing services explicitly tailored for Web3 applications.",
    },
  ];

  return (
    <div className="audit-carousel">
      <Carousel
        autoPlay
        interval={500000}
        infiniteLoop
        showArrows={false} // Remove left/right navigation icons
        showStatus={false} // Remove the status text
        showIndicators={false} // Remove the dots below the carousel
        stopOnHover={false}
        swipeable
        emulateTouch
      >
        {slides.map((slide) => (
          <div key={slide.id} className="audit-slide">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </Carousel>
      <Formpopup auditName="Contact Us" buttonClassName="register-btn" />
    </div>
  );
};

export default AuditCarousel;
