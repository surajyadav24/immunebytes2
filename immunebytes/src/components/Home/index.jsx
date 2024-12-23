// Home.jsx
import React from "react";
import Header from "../Header";
import PrimaryBtn from "../Primarybutton";
import Herosection from "../Herosection";
import Cta from "../Cta-components";
// import Whychooseus from "../Whychooseus";

import Servicescomponent from "../Servicescomponent";
import TestimonialSlider from "../Testimonial slider";
import LogoSlider from "../Logo-Slider";
import AuditProcess from "../Audit-Process";
import Whychooseusec from "../WhychooseusSec";
import CaseStudyCard from "../Case-study";
import Community from "../Joinourcommunity";
import Footer from "../Footer";

import PortfolioTable from "../PortfolioTable";
// import AuditProcess from "../Audit-Process";
import AuditProcessSec from "../Audit-Process-sec"
import HeroSection2 from "../Hero-section-2";
// Import images
import img10 from "../../assets/images/img11.svg";
import img14 from "../../assets/images/img14.svg";
import serviceimg from "../../assets/images/services-img/service1.gif";
import serviceimg2 from "../../assets/images/services-img/service2.gif";
import serviceimg3 from "../../assets/images/services-img/service3.gif";
import gif1 from "../../assets/images/Hero-section/hero-gif.gif";
import "./style.css";
import WhyChooseUsSec from "../Why-choose-sec";
const Home = () => {
  return (
    <>
      <Header />
      <HeroSection2
        title="Threat Perspective,"
        highlight="Defense Expertise!"
        description="Securing the Web3 industry through rigorous code audits as we empower protocols with trust, transparency, and impenetrable defense."
        buttonText="Book Consultation"
        imageSrc={gif1}
        altText="Immunebytes Hero GIF"
      />
      {/* <Herosection /> */}

      <LogoSlider />
      <Cta title="Leading the Wave of Web3 Security" />
<div className="container">
<div className="services-wrapper">
        <h1 className="text-center py-5  pb-5 heading-h1">Our Services</h1>
        <Servicescomponent
          imageSrc={serviceimg2}
          heading="Smart Contract Audit"
          paragraphtext="An extensive evaluation of your smart contract code for security, verification of business specifications, and adherence to industry standards for code reusability"
        />
        <div className="service-2">
          <Servicescomponent
            imageSrc={serviceimg3}
            heading="Blockchain Audit"
            paragraphtext="A thorough assessment of your blockchain’s security posture, encompassing architecture, network layer, transaction layer, ledger layer, and other frameworks."
          />
        </div>
        <div className="service-3">
          <Servicescomponent
            imageSrc={serviceimg}
            heading="Penetration Testing"
            paragraphtext="Amid the rising incidence of traditional security breaches affecting Web3, ImmuneBytes provides penetration testing services explicitly tailored for Web3 applications."
          />
        </div>
      </div>
</div>

<div className="portfolio-container homapage-prtfolio">
<PortfolioTable showEditButton={false} />
<PrimaryBtn text="View More" />
</div>
      <h1 className="text-center py-5  pb-4 heading-h1">Audit Process</h1>
<AuditProcessSec/>

      {/* <AuditProcess /> */}
      <div className="container pb-4 why-sec-choose">
        <h1 className="text-center py-5  pb-4 heading-h1">Why Choose Us?</h1>
        {/* <Whychooseus /> */}
        {/* <Whychooseusec /> */}

<WhyChooseUsSec/>

      </div>
      <h1 className="text-center py-5  pb-4 heading-h1 testimonial-heading">
        Testimonials
      </h1>
      <div className="container testimonial-slider">
        <TestimonialSlider />
      </div>

      <div className="container">
        <div className=" case-study-wrapper">
          <h1 className="text-center py-5  pb-4 heading-h1">Case Studies</h1>

          <div className="row">
            <div className="col-lg-6 md-6 col-sm-12">
              <div className="card-bg-1 pb-4 ">
                <CaseStudyCard
                  title="Case study name"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                  buttonText="Learn More"
                  imageSrc="https://via.placeholder.com/100" // Replace with actual image URL
                />
              </div>
            </div>
            <div className="col-lg-6 md-6 col-sm-12">
              <div className="card-bg-2 pb-4 d-flex justify-content-end">
                <CaseStudyCard
                  title="Case study name"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                  buttonText="Learn More"
                  imageSrc="https://via.placeholder.com/100" // Replace with actual image URL
                />
              </div>
            </div>
            <div className="col-lg-6 md-6 col-sm-12">
              <div className="card-bg-3 pt-4">
                <CaseStudyCard
                  title="Case study name"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                  buttonText="Learn More"
                  imageSrc="https://via.placeholder.com/100" // Replace with actual image URL
                />
              </div>
            </div>
            <div className="col-lg-6 md-6 d-flex justify-content-end col-sm-12">
              <div className="card-bg-4 pt-4">
                <CaseStudyCard
                  title="Case study name"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                  buttonText="Learn More"
                  imageSrc="https://via.placeholder.com/100" // Replace with actual image URL
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Community />
      <Footer />
    </>
  );
};

export default Home;
