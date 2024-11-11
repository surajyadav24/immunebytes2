import React, { useState } from "react";
import "./style.css"; // Create this CSS file
import close from '../../assets/images/portfolio/close-btn.svg'
const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  // To toggle popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="popup-container">
      <button className="open-popup-btn btn register-btn text-white" onClick={togglePopup}>
        Request a Quote
      </button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h2>Request a Quote</h2>
            <form>
              <div className="form-group">
                <div className="input-block">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="input-block">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className="form-group">
                <div className="input-block">
                  <label htmlFor="projectWebsite">Project Website</label>
                  <input type="text" id="projectWebsite" placeholder="Enter your project website" />
                </div>
                <div className="input-block">
                  <label htmlFor="github">GitHub Link/Smart Contract Address</label>
                  <input type="text" id="github" placeholder="Enter GitHub/Smart Contract link" />
                </div>
              </div>

              <div className="form-group">
                <div className="input-block">
                  <label htmlFor="username">Username - Telegram/Skype/X</label>
                  <input type="text" id="username" placeholder="Enter your username" />
                </div>
                <div className="input-block">
                  <label htmlFor="services">Services</label>
                  <select id="services">
                    <option value="" disabled selected>
                      Select a service
                    </option>
                    {/* Add service options here */}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="input-block">
                  <label htmlFor="timeline">Timeline</label>
                  <input type="date" id="timeline" placeholder="Select a timeline" />
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>

            <button className="close-popup-btn" onClick={togglePopup}>
       <img src={close} alt="" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
