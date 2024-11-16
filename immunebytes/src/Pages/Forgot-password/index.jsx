import React, { useState } from 'react'
import './style.css'
import Logo from '../../assets/images/logos/Logo.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




function ForgotPassword() {
  const [email,setEmail]=useState()
  const navigate = useNavigate();
  const [error, setError] = useState(null);  // State to hold error message


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/api/v1/users/Forgot-Password',
        { email},
        { withCredentials: true }
      );
      console.log("response-data",response.data)
  
      if (response.data.statusCode === 200) {
        const resetToken = response.data.data.user.resetPasswordToken; // Assuming 'token' contains the reset token
  navigate(`/resetpassword/${resetToken}`)
        // console.log(response.data.data.accessToken)
        // setShowOtp(true);
      } else {
        alert(response.data.message || 'password failed');
      }
    }catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'Email id is invalid');
    }
  };

  return (
    <div className="form-container">
      <div className="container">
        <form  className="form" onSubmit={handleSubmit}>
          <img className="logo" src={Logo} alt="Logo" />
          <h2 className="title">Forgot Password</h2>
          <div className="input-group">
            <label className="label">Email</label>
          {error && <div className="error-message">{error}</div>}  {/* Display error message */}

            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            <a href="/" className="forgot-password resend-code">Resend Code</a>
          </div>

          <button type="submit" className="button">Submit</button>

        </form>
      </div>
    </div>
  )
}

export default ForgotPassword