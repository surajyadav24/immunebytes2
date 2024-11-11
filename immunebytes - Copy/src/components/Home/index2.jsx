<>
<Header />
<Herosection />
<div className="btn-wrapper">
  <PrimaryBtn text="Book Consultation" />
</div>

<LogoSlider />



{/* <div className="logo-section pb-5">
  <div className="container-fluid">
    <div className="text-icon">
      <ImageTextSection imageSrc={img10} />
      <ImageTextSection imageSrc={img8} />
      <ImageTextSection imageSrc={img7} />
      <ImageTextSection imageSrc={img9} />
      <ImageTextSection imageSrc={img1} />
      <ImageTextSection imageSrc={img3} />
      <ImageTextSection imageSrc={img5} />
      <ImageTextSection imageSrc={img2} />
      <ImageTextSection imageSrc={img14} />
      <ImageTextSection imageSrc={img13} />
      <ImageTextSection imageSrc={img6} />
      <ImageTextSection imageSrc={img11} />
    </div>
  </div>
</div> */}
<Cta />

<div className="services-wrapper">
<h1 className="text-center py-5  pb-5 heading-h1">Our Services</h1>
<Servicescomponent className="service-1"
  imageSrc={serviceimg}
  heading="Smart Contract Audit"
  paragraphtext="An extensive evaluation of your smart contract code’s security, business functionality, and adherence to industry-standards."
/>
<Servicescomponent className="service-2"
  imageSrc={serviceimg3}
  heading="Blockchain Security Service"
  paragraphtext="A thorough assessment of your blockchain’s security posture, encompassing smart contracts, architecture, and development framework.
"
/>
<Servicescomponent className='service-3'
  imageSrc={serviceimg2}
  heading="Penetration Testing"
  paragraphtext="In light of increasing traditional security breaches impacting Web3, ImmuneBytes offers penetration testing for decentralised applications."
/>
</div>


<h1 className="text-center py-5  pb-4 heading-h1">Audit Process</h1>
<AuditProcess/>
<div className="container pb-4">
<h1 className="text-center py-5  pb-4 heading-h1">Why Choose Us ?</h1>
<Whychooseus/>
<Whychooseusec/>
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
<div className="view-more py-5"><PrimaryBtn text="view More"/></div>
</div>
</div>
<div className="logo-wrapper">



</div>


<Community/>
<Footer />
</>
