import React from 'react';
import Logo from '../../../../assets/images/logos/Logo.svg';

function OtpForm({ otp = [], onOtpChange, onSubmit, onResend }) {
  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      onOtpChange(index, value);
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center bg-gray-900 text-white p-6 rounded-lg max-w-sm mx-auto"
    >
      <img src={Logo} alt="Logo" className="mb-4" />
      <p className="text-lg font-semibold mb-4">OTP</p>
      <div className="flex gap-3 mb-5">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            maxLength="1"
            className="w-12 h-12 text-center text-2xl border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:border-gray-500"
            aria-label={`OTP digit ${index + 1}`}
          />
        ))}
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-gray-700 text-lg rounded-md hover:bg-gray-600 transition duration-300"
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
