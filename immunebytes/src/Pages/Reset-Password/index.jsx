import React, { useState } from 'react'
import './style.css'
import Logo from '../../assets/images/logos/Logo.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function ResetPassword() {
  const{resetPasswordToken}=useParams()
  const [password,setPassword]=useState('')
  const [confirmpassword,setConfirmpassword]=useState('')
  const navigate = useNavigate()
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    // Check if the password fields are empty
    if (!password || !confirmpassword) {
      setError('Password and Confirm Password cannot be empty');
      return;
    }
  
    // Check if passwords match
    if (password !== confirmpassword) {
      setError('Passwords do not match');
      return;
    }
  
    // Check password strength (example: minimum length of 6)
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }
  
    if(!resetPasswordToken){
      console.log("Reset password token is not accessible")
      return;
    }
  
    try {
      const response = await axios.post(
        `/api/v1/users/Reset-Password/${resetPasswordToken}`,
        { password, confirmpassword },
        { withCredentials: true }
      );
      console.log("response-data", response.data)
      if (response.data.statusCode === 200) {
        navigate('/dashboard')
      } else {
        alert(response.data.message || 'Password Reset failed');
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'Password or Confirm Password is invalid');
    }
  
  };

  return (
    <div className="form-container">
      <div className="container">
        <form  className="form" onSubmit={handleSubmit}>
          <img className="logo" src={Logo} alt="Logo" />
          <h2 className="title">Reset Password</h2>

          {error && <div className="error-message">{error}</div>}  {/* Display error message */}

          <div className="input-group">
            <label className="label">New Password</label>
            <input
              type="password"
              placeholder="Enter New Password"
              className="input"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label className="label">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm New Password"
              className="input"
              value={confirmpassword}
              onChange={(e)=>{setConfirmpassword(e.target.value)}}
            />
            <a href="/" className="forgot-password resend-code">Resend Code</a>
          </div>

          <button type="submit" className="button">Submit</button>

        </form>
      </div>
    </div>
  )
}

export default ResetPassword