import React, { useState,useRef,useEffect } from 'react'
import './style.css'
import Logo from '../../assets/images/logos/Logo.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




function ForgotPassword() {
  const [showPopup, setShowPopup] = useState(false); // Popup state
  const [email,setEmail]=useState()
  const navigate = useNavigate();
  const [error, setError] = useState(null);  // State to hold error message


  const handlePopupClose = () => {
    setShowPopup(false);
    navigate('/dashboard');
  };

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
        console.log("Setting showPopup to true");
        const resetToken = response.data.data.user.resetPasswordToken; // Assuming 'token' contains the reset token
        setShowPopup(true); // Show popup on success
        setTimeout(() => setShowPopup(false), 5000); // Auto-hide popup after 5 seconds
  // navigate(`/dashboard`)

      
        // console.log(response.data.data.accessToken)
        // setShowOtp(true);
      } else {
        alert(response.data.message || 'password failed');
      }
    }catch (error) {
      console.error(error);
      setError(null); // Clear the current error first
      setTimeout(() => {
        setError(error.response?.data?.message || 'Email id is invalid');
      }, 0);
    }
  };
  const inputRef = useRef(null);

  useEffect(() => {
    if (error && inputRef.current) {
      inputRef.current.focus(); // Focus the input when an error occurs
    }
  }, [error]); // Dependency array triggers focus when error state changes
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
        console.log("No error checking just ")
      }, 5000); // Error disappears after 3 seconds
      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [error]);

  return (
    <div className="form-container">
      <div className="container">
        <form  className="form" onSubmit={handleSubmit}>
          <img className="logo" src={Logo} alt="Logo" />
          <h2 className="title">Forgot Password</h2>

          {error && <div className="error-message">{error}</div>}  {/* Display error message */}
          <div className="input-group">
            <label className="label">Email</label>
         

            <input
            ref={inputRef}
              type="email"
              placeholder="Enter Your Email Address"
              className={`input ${error ? "input-error":""}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />
            {/* <a href="/" className="forgot-password resend-code">Resend Code</a> */}
          </div>

          <button type="submit" className="button">Submit</button>

        </form>
      </div>
       {/* Popup Modal */}
       {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>A link to reset your password has been sent to your email.</p>
            <button className="close-button" onClick={handlePopupClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ForgotPassword