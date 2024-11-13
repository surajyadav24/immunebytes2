import React from 'react'
import './style.css'
import Logo from '../../assets/images/logos/Logo.svg'
function ForgotPassword() {
  return (
    <div className="form-container">
      <div className="container">
        <form  className="form">
          <img className="logo" src={Logo} alt="Logo" />
          <h2 className="title">Forgot Password</h2>
          <div className="input-group">
            <label className="label">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="input"
            />
            <a href="#" className="forgot-password resend-code">Resend Code</a>
          </div>

          <button type="submit" className="button">Submit</button>

        </form>
      </div>
    </div>
  )
}

export default ForgotPassword