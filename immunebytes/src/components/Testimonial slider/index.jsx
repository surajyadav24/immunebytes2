import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./style.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import Autoplay styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import testimonial1 from '../../assets/images/testimonial/testimonial (4).svg'
import testimonial2 from '../../assets/images/testimonial/testimonial (2).svg'
import testimonial3 from '../../assets/images/testimonial/testimonial (1).svg'
import testimonial4 from '../../assets/images/testimonial/testimonial (3).svg'
const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dheeraj Borra',
      designation:"Stader Labs, Co-Founder",
      image:testimonial1,
      quote: "ImmuneBytes demonstrated the perfect blend of expertise, commitment, and accountability, resulting in an audit that surpassed expectations. Their thorough approach and dedication ensured a high-quality outcome, reflecting their capability and professionalism in delivering exceptional service."
    },
    {
      id: 2,
      name: 'Yog Shrusti',
      designation:"Farmsent, Co-Founder & CEO",
      image: testimonial2,
      quote: "Robots can do audits, but the personal touch makes a difference. That's why we love Immunebytes! Not only do they do top-class audits, but they also take the time to understand our project and why certain things are done in specific ways. They take the time to ensure we feel heard, which shows in their work."
    },
    {
      id: 3,
      name: 'Mac P,',
      designation:" Ethernity, Chief Engineer",
      image:testimonial3 ,
      quote: 'We are thoroughly impressed by their team, who left no scope for a communication gap and provided a quick turnaround time. They took up each requirement with utmost detail and acted on it. It was a pleasing experience to work with you. Looking to working with you guys again!'
    },
    {
      id: 4,
      name: 'Aruje Jahan',
      designation:"Lokr, Product Owner",
      image: testimonial4,
      quote: "We partnered with ImmuneBytes for a security audit of our products. Their expertise and professionalism instilled confidence throughout the process. They promptly addressed our questions, and their thorough analysis significantly enhanced our project's security, safeguarding our users' assets. We highly recommend ImmuneBytes and look forward to future collaborations."
    },
    
  ];

  return (
    <div className='testimonial-wrapper'>
      <Swiper
        spaceBetween={50}
        navigation
        centeredSlides={true}
        pagination={{ dynamicBullets: true }}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView:1,
            spaceBetween:30// 1 slide on mobile screens
          },
          768: {
            slidesPerView: 2, // 2 slides on medium screens
          },
          1024: {
            slidesPerView: 3, // 3 slides on larger screens
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div style={{ textAlign: 'center' }}>
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                style={{ borderRadius: '50%', marginBottom: '10px' }} 
              />
              <h3>{testimonial.name}</h3>
            <h5>{testimonial.designation}</h5>
              <p>"{testimonial.quote}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
