import React from 'react'
import './style.css'
import PrimaryBtn from '../Primarybutton'
const Cta = ({title}) => {
  return (
  <>
  <div className="container">
<div className="cta-wrapper">
  <h2>{title}</h2>
  <PrimaryBtn  text="Request Audit"/>
</div>
</div>
  </>
  )
}

export default Cta