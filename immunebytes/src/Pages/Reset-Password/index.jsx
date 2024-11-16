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
        // Check if passwords match
        if (password !== confirmpassword) {
          setError('Passwords do not match');
          return;
        }

    if(!resetPasswordToken){
      console.log("Reset password token is not accessible")
    }
    try {
      const response = await axios.post(
        `/api/v1/users/Reset-Password/${resetPasswordToken}`,
        { password,confirmpassword},
        { withCredentials: true }
      );
      console.log("response-data",response.data)
      console.log("Response received:", response.data)
  
      if (response.data.statusCode === 200) {
        navigate('/dashboard')
        // console.log(response.data.data.accessToken)
        // setShowOtp(true);
      } else {
        alert(response.data.message || 'Password Reset failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during Reset password');
    }
  };

  return (
    <div className="form-container">
      <div className="container">
        <form  className="form" onSubmit={handleSubmit}>
          <img className="logo" src={Logo} alt="Logo" />
          <h2 className="title">Forgot Password</h2>
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