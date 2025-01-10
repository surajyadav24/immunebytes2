import React from 'react'
import './style.css'
// import main from '../../assets/images/About-main.png'
import WhyChooseUsSec from '../../components/Why-choose-sec'

const Main = () => {

  const cardsData = [
    { text: "5+ Experience in Web3 Security" },
    { text: "315+ Happy Clients Globally" },
    { text: "100+ Critical Issues Reported" }
  ];



  return (
    <>
<div className="container">
<div className='About-main'>
    <div className='main'>
     <h2>We're here to <span className='Red'>guarantee your success</span></h2>
      <p>A blockchain security audit firm with the goal of making the Web3 space more <p>secure to build through innovative and effective solutions.</p></p></div>
      <div className="">

{/* <div className="Image">
  <img src={main} alt="" />
</div> */}

<WhyChooseUsSec className=" pt-8 pb-4" cards={cardsData} />


</div>
</div>
</div>
    </>
  )
}

export default Main
