import React from 'react';
import Logo from '../../../../assets/images/logos/Logo.svg';

function OtpForm({ otp, onOtpChange, onSubmit, onResend }) {
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {  // Allow only up to 6 digits (adjust as needed)
      onOtpChange(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {  // Check if OTP is complete
      onSubmit();
    } else {
      alert("Please enter a 6-digit OTP.");
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-lg max-w-sm mx-auto shadow-lg"
    >
      <img src={Logo} alt="Logo" className="mb-4" />
      <p className="text-lg font-semibold mb-4">OTP</p>
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
        Send Code
      </button>
      <div className="mt-4 text-sm text-gray-400">
        Don’t receive the code?{' '}
        <button
          type="button"
          onClick={onResend}
          className="text-red-500 hover:underline focus:outline-none"
        >
          Resend Code
        </button>
      </div>
    </form>
  );
}

export default OtpForm;
