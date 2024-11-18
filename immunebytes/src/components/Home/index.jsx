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

// Import images
import img10 from "../../assets/images/img11.svg";
import img14 from "../../assets/images/img14.svg";
import serviceimg from "../../assets/images/services-img/services(1).svg";
import serviceimg2 from "../../assets/images/services-img/services (2).svg";
import serviceimg3 from "../../assets/images/services-img/services (3).svg";
import './style.css'
const Home = () => {
  return (
    <>
      <Header />
      <Herosection />
      <div className="btn-wrapper">
        <PrimaryBtn text="Book Consultation" />
      </div>
      <LogoSlider />
      <Cta title="Leading the Wave of Web3 Security" />
      <div className="services-wrapper">
        <h1 className="text-center py-5  pb-5 heading-h1">Our Services</h1>
        <Servicescomponent
          imageSrc={serviceimg}
          heading="Smart Contract Audit"
          paragraphtext="An extensive evaluation of your smart contract code’s security, business functionality, and adherence to industry standards."
        />
<div className="service-2">
<Servicescomponent
          imageSrc={serviceimg3}
          heading="Blockchain Security Service"
          paragraphtext="A thorough assessment of your blockchain’s security posture, encompassing smart contracts, architecture, and development framework."
        />
</div>
<div className="service-3">
<Servicescomponent
          imageSrc={serviceimg2}
          heading="Penetration Testing"
          paragraphtext="In light of increasing traditional security breaches impacting Web3, ImmuneBytes offers penetration testing for decentralized applications."
        />
</div>
      </div>
      <h1 className="text-center py-5  pb-4 heading-h1">Audit Process</h1>
      <AuditProcess />
      <div className="container pb-4">
        <h1 className="text-center py-5  pb-4 heading-h1">Why Choose Us?</h1>
        {/* <Whychooseus /> */}
        <Whychooseusec />
      </div>
      <h1 className="text-center py-5  pb-4 heading-h1 testimonial-heading">Testimonials</h1>
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
