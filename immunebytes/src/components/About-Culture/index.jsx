import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import './style.css'; // Your custom styles

// Import images for culture slider
import culture1 from '../../assets/images/about-culture/culture (2).jpg';
import culture2 from '../../assets/images/about-culture/culture (3).jpg';
import culture3 from '../../assets/images/about-culture/culture (4).jpg';
import culture4 from '../../assets/images/about-culture/culture (5).jpg';
import culture5 from '../../assets/images/about-culture/culture (6).jpg';
import culture6 from '../../assets/images/about-culture/culture (7).jpg';
import culture8 from '../../assets/images/about-culture/culture (8).jpg';
import culture9 from '../../assets/images/about-culture/culture (9).jpg';
import culture10 from '../../assets/images/about-culture/culture (10).jpg';
import culture11 from '../../assets/images/about-culture/culture (11).jpg';
import culture12 from '../../assets/images/about-culture/culture (12).jpg';
import culture13 from '../../assets/images/about-culture/culture (13).jpg';
import culture14 from '../../assets/images/about-culture/culture (14).jpg';
import culture15 from '../../assets/images/about-culture/culture (15).jpg';
import culture16 from '../../assets/images/about-culture/culture (16).jpg';
import culture17 from '../../assets/images/about-culture/culture (17).jpg';
import culture7 from '../../assets/images/about-culture/culture1.jpg';

// Define image arrays for each slider
const cultureLogos1 = [culture1, culture2, culture3, culture4, culture5, culture6, culture7, culture8 ];
const cultureLogos2 = [culture9, culture10, culture11, culture12, culture13, culture14 , culture15, culture16 , culture17];

const CultureSliders = () => {
  useEffect(() => {
    // Initialize the first culture Splide slider (smooth loop)
    const splide1 = new Splide('#cultureSplide1', {
      type: 'loop',
      drag: true,
      focus: 'center',
      cloning: true,
      gap  :  '2px',
      perPage: 4,
      autoScroll: {
        speed: 1, // Speed for the scroll
        pauseOnHover: true,
        easing: 'linear', // Smooth linear animation
      },
      autoplay: true,  // Enable autoplay
      pagination: false,  // Disable pagination
      breakpoints: {
        640: { perPage: 2 },
        768: { perPage: 3 },
        1024: { perPage: 3 },
      },
    }).mount({ AutoScroll });

    // Initialize the second culture Splide slider (smooth loop)
    const splide2 = new Splide('#cultureSplide2', {
      type: 'loop',
      drag:true,
      cloning: true,
      gap    : '0.2rem',

      focus: 'center',
      perPage: 4,
      autoScroll: {
        speed: -1, // Speed for the scroll
        pauseOnHover: true,
        easing: "linear", // Smooth linear animation
      },
      autoplay: true,  // Enable autoplay
      pagination: false,  // Disable pagination
      breakpoints: {
        640: { perPage: 2 },
        768: { perPage: 3 },
        1024: { perPage: 3 },
      },
    }).mount({ AutoScroll });

    // Clean up on component unmount
    return () => {
      splide1.destroy();
      splide2.destroy();
    };
  }, []);

  return (
    <div className="culture-wrapper">
 <div className="container">
 <h1 className="text-center heading-h1 culture-heading">Our Culture</h1>
<p className="sub-heading-section pb-4">
At ImmuneBytes, our culture is built on innovation, integrity, and collaboration. We strive to create a supportive environment that fosters creativity, values diverse perspectives, and empowers our team to push the boundaries of Web3 security.
</p>
 </div>
      {/* Culture Slider 1 */}
      <div className="splide mb-0" id="cultureSplide1" >
        <div className="splide__track">
          <ul className="splide__list ">
            {cultureLogos1.map((logo, index) => (
              <li key={index} className="splide__slide ">
                <img src={logo} alt={`Culture Image ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Culture Slider 2 */}
      <div className="splide" id="cultureSplide2">
        <div className="splide__track">
          <ul className="splide__list">
            {cultureLogos2.map((logo, index) => (
              <li key={index} className="splide__slide ">
                <img src={logo} alt={`Culture Image ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CultureSliders;
