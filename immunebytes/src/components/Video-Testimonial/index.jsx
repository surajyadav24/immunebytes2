import React from 'react';
import './style.css'; // Optional CSS for styling

// Video Testimonial Component
const VideoTestimonial = ({ title, description, testimonials }) => {
  return (
<div className="container">
<div className="video-testimonial">
      <h2 className="section-heading">{title}</h2>
      <p className="sub-heading-section">{description}</p>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            {testimonial.videoLink ? (
              <iframe
                className="video-iframe"
                src={`https://www.youtube.com/embed/${testimonial.videoLink}`}
                title={`Video testimonial by ${testimonial.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="video-placeholder"></div>
            )}
            <h3>{testimonial.name}</h3>
            <p>{testimonial.position}</p>
            <p>{testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default VideoTestimonial;
