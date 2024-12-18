import React from 'react'
import './style.css'
import PrimaryBtn from "../Primarybutton";



const EngagementModel = () => {
  return (
    <>
    <div className='engagementmodel'>
      <h2>Engagement Model</h2>
      <div className='engagementmodel-boxes'>
        <div className='engagementmodel-box'>
            <h3>Fixed Price</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est rerum unde, debitis quae delectus perspiciatis in tempore voluptatibus at consequatur quasi saepe repellat, velit facere. Aliquam necessitatibus mollitia omnis odit.</p>
        </div>
        <div className='engagementmodel-box'>
            <h3>PPV</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est rerum unde, debitis quae delectus perspiciatis in tempore voluptatibus at consequatur quasi saepe repellat, velit facere. Aliquam necessitatibus mollitia omnis odit.</p>
        </div>
        <div className='engagementmodel-box'>
            <h3>Retainer</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est rerum unde, debitis quae delectus perspiciatis in tempore voluptatibus at consequatur quasi saepe repellat, velit facere. Aliquam necessitatibus mollitia omnis odit.</p>
        </div>
      </div>
      <div className='engagementmodel-yellow-box'>
     <div className="content">
     <h3 className='engagementmodel-yellow-box-text'>Our security professionals are ready to guide you toward a safer future.</h3>
     <div className="button-container">
     <PrimaryBtn text="Let's Talk!" />
     </div>
     </div>
      </div>
      </div>
    </>
  )
}

export default EngagementModel