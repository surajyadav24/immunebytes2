import React, { useState } from 'react';
import Logo from '../../../../assets/images/logos/Logo.svg'; // Adjust this import path to your project structure
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OtpForm() { // onOtpChange is now passed as a prop
  const [otp, setOtp] = useState('');
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(null);  // State to hold error message


  const handleResendOtp = async () => {
    setIsResending(true); // Indicate resend in progress
    try {
      const response = await axios.post('/api/v1/users/resend-otp', null, {
        withCredentials: true,
      });

      if (response.data && response.data.message) {
        alert(response.data.message); // Display success message
      }
    } catch (error) {
      console.error(error);
      alert('Failed to resend OTP. Please try again.');
    } finally {
      setIsResending(false); // Reset button status
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    // Allow only numeric input and restrict to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
      // onOtpChange(value); // Call the onOtpChange function passed from the parent
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Reset the error message before each request

  
    try {
      const response = await axios.post(
        '/api/v1/users/email-verify',
        { otp },
        { withCredentials: true }
      );
  
      if (response.data.statusCode === 200) {
        navigate('/dashboard-main');
      } else {
        alert(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'Otp is invalid');
    }
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg max-w-sm mx-auto shadow-lg"
    >
      <img src={Logo} alt="Logo" className="mb-4" />
      <p className="text-lg font-semibold mb-4">OTP</p>
      {error && <div className="error-message">{error}</div>}  {/* Display error message */}

      <input
        type="text"
        value={otp}
        onChange={handleChange}
        maxLength="6"
        className="w-full text-center text-2xl border border-gray-500 rounded-md bg-gray-900 text-white p-2 mb-5 focus:outline-none focus:border-blue-500"
        placeholder="Enter OTP"
      />
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-lg rounded-md hover:bg-blue-700 transition duration-300"
      >
        Submit
      </button>
      <div className="mt-4 text-sm text-gray-400">
        Didn’t receive the code?{' '}
        <button
          type="button"
          onClick={handleResendOtp}
          disabled={isResending}
          className="text-red-500 hover:underline focus:outline-none"
        >
          Resend Code
        </button>
      </div>
    </form>
  );
}

export default OtpForm;
