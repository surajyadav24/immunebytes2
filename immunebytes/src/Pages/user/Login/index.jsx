import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import Logo from '../../../assets/images/logos/Logo.svg';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);  // State to hold error message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);  // Reset the error message before each request

    try {
      const response = await axios.post(
        '/api/v1/users/login',
        { username, password },
        { withCredentials: true }
      );
      console.log("response-data", response.data);

      if (response.data.statusCode === 200) {
        navigate('/otpform');
      } else {
        setError(response.data.message || 'Login failed');  // Set the error message from response
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'Username and Password id invalid');
    }
  };

  return (
    <div className="form-container">
      <div className="container">
        <form onSubmit={handleLogin} className="form">
          <img className="logo" src={Logo} alt="Logo" />
          <h2 className="title">Login to your Dashboard</h2>
          <p className="subtitle">Welcome back! Select method to login</p>

          {error && <div className="error-message">{error}</div>}  {/* Display error message */}

          <div className="input-group">
            <label className="label">User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Name"
              className="input"
            />
          </div>

          <div className="input-group">
            <label className="label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input"
            />
            <a href="/forgotpassword" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
