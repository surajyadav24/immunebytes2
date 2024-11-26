import React from 'react'
import './style.css'

const Vision = () => {
  return (
    <>
    <div className='about-vision'>
      <h2>Our Vision</h2>
      <div className='table'>
      <table>
        <tbody>
            <tr>
                <td>Securing DeFi</td>
                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scra </td>
            </tr>
            <tr>
                <td>Transparent Growth</td>
                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scra </td>
            </tr>
            <tr>
                <td>Blockchain Adoption</td>
                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scra </td>
            </tr>
            <tr>
                <td>Web3 Confidence</td>
                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scra </td>
            </tr>
        </tbody>
    </table>

      </div>
    </div>
      {/* Mobile version */}
      <div className="mobile-version">
            <div className="vision-item">
              <h3>Securing DeFi</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
            <div className="vision-item">
              <h3>Transparent Growth</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
            <div className="vision-item">
              <h3>Blockchain Adoption</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
            <div className="vision-item">
              <h3>Web3 Confidence</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            </div>
          </div>
    </>
  )
}

export default Vision


