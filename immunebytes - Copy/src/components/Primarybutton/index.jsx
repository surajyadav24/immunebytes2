import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const PrimaryBtn = ({text}) => {
  return (
    <>
      <Button 
        style={{ backgroundColor: 'transparent', color: 'white' }} 
      >
        {text}
        <span>
            {/* <FontAwesomeIcon icon={faArrowRight} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="21" viewBox="0 0 28 21" fill="none">
<path d="M15.5862 0.559592C15.9613 0.201285 16.4699 0 17.0003 0C17.5306 0 18.0392 0.201285 18.4143 0.559592L27.4144 9.16028C27.7894 9.51869 28 10.0047 28 10.5115C28 11.0183 27.7894 11.5044 27.4144 11.8628L18.4143 20.4635C18.0371 20.8116 17.5319 21.0043 17.0075 20.9999C16.4831 20.9956 15.9814 20.7946 15.6106 20.4402C15.2398 20.0858 15.0294 19.6065 15.0249 19.1053C15.0203 18.6042 15.2219 18.1214 15.5862 17.761L21.0003 12.4228H2.00003C1.46959 12.4228 0.960874 12.2214 0.585795 11.863C0.210717 11.5046 0 11.0184 0 10.5115C0 10.0046 0.210717 9.5185 0.585795 9.16007C0.960874 8.80164 1.46959 8.60028 2.00003 8.60028H21.0003L15.5862 3.26212C15.2113 2.9037 15.0007 2.41765 15.0007 1.91085C15.0007 1.40406 15.2113 0.918007 15.5862 0.559592Z" fill="white"/>
</svg>
            </span>
      </Button>
    </>
  );
};

export default PrimaryBtn;
