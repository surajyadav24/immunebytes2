import React from 'react'
import './style.css'
import Logo from '../../assets/images/logos/Logo.svg'
function ResetPassword() {
  return (
    <div className="form-container">
      <div className="container">
        <form  className="form">
          <img className="logo" src={Logo} alt="Logo" />
          <h2 className="title">Forgot Password</h2>
          <div className="input-group">
            <label className="label">New Password</label>
            <input
              type="password"
              placeholder="Enter New Password"
              className="input"
            />
          </div>
          <div className="input-group">
            <label className="label">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm New Password"
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

export default ResetPassword