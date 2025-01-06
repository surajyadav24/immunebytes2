import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import './style.css'; // Your custom styles

// Import images
import img1 from "../../assets/images/646cda7f7639d2f9f439447d_222-p-500 1.png";
import img2 from "../../assets/images/demex_wordmark_primary_white_no_bg 1.png";
import img3 from "../../assets/images/download 1.png";
import img5 from "../../assets/images/logo (2) 1.png";
import img6 from "../../assets/images/logo (3) 1.png";
import img7 from "../../assets/images/maha-lg 1.png";
import img8 from "../../assets/images/mainvanar-logo 1.png";
import img9 from "../../assets/images/Monotone White 1.png";
import img10 from "../../assets/images/img11.svg";
import img11 from "../../assets/images/scallop-ramp 1.png";
import img14 from "../../assets/images/img14.svg";
import img13 from "../../assets/images/Group 24.svg";
import stader from '../../assets/images/sliderlogo/staderlogo.svg'
import csigma from '../../assets/images/sliderlogo/Csigma.png'
import ethernity from '../../assets/images/sliderlogo/ethernity.svg'
import bird from '../../assets/images/sliderlogo/bird.svg'
import farmsent from '../../assets/images/sliderlogo/farmsent.svg'
import retreeb from '../../assets/images/sliderlogo/retreeb.svg'
import sporticon from '../../assets/images/sliderlogo/sports-icon.svg'
import thron from '../../assets/images/sliderlogo/Thron.svg'
import wam from '../../assets/images/sliderlogo/wam.svg'



// Define image arrays for each slider
const logos1 = [img1, img2, img3, img5, img6,stader];
const logos2 = [img7, img8, img9, img10, img11, img14, img13,csigma, ethernity];
const logos3 = [ , farmsent, retreeb,sporticon,thron,wam,bird];

const LogoSliders = () => {
    useEffect(() => {
        // Initialize the first Splide slider
        const splide1 = new Splide('#splide1', {
            type   : 'loop',
            drag   : 'free',
            focus  : 'center',
            perPage: 3,
            autoScroll: {
                speed: 2,
                pauseOnHover: true,
            },
            breakpoints: {
                640: { perPage: 2 },
                768: { perPage: 3 },
                1024: { perPage: 3 },
            },
        }).mount({ AutoScroll });

        // Initialize the second Splide slider
        const splide2 = new Splide('#splide2', {
            type   : 'loop',
            drag   : 'free',
            focus  : 'center',
            perPage: 4,
            autoScroll: {
                speed: -2,
                pauseOnHover: true,
            },
            breakpoints: {
                640: { perPage: 2 },
                768: { perPage: 3 },
                1024: { perPage: 4 },
            },
        }).mount({ AutoScroll });
        // Initialize the second Splide slider
        const splide3 = new Splide('#splide3', {
            type   : 'loop',
            drag   : 'free',
            focus  : 'center',
            perPage: 4,
            autoScroll: {
                speed: 2,
                pauseOnHover: true,
            },
            breakpoints: {
                640: { perPage: 2 },
                768: { perPage: 3 },
                1024: { perPage: 4 },
            },
        }).mount({ AutoScroll });

        // Clean up on component unmount
        return () => {
            splide1.destroy();
            splide2.destroy();
            splide3.destroy();
        };
    }, []);

    return (
        <div className='logo-wrapper'>
              <h1 className="text-center py-5  pb-4 heading-h1 homepage-heading">Trusted by Partners</h1>
            <div className="splide" id="splide1">
                <div className="splide__track">
                    <ul className="splide__list">
                        {logos1.map((logo, index) => (
                            <li key={index} className="splide__slide">
                                <img src={logo} alt={`Logo ${index + 1}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="splide" id="splide2">
                <div className="splide__track">
                    <ul className="splide__list">
                        {logos2.map((logo, index) => (
                            <li key={index} className="splide__slide">
                                <img src={logo} alt={`Logo ${index - 1}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="splide" id="splide3">
                <div className="splide__track">
                    <ul className="splide__list">
                        {logos3.map((logo, index) => (
                            <li key={index} className="splide__slide">
                                <img src={logo} alt={`Logo ${index - 1}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LogoSliders;
