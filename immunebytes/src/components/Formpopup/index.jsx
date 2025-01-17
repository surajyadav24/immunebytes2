import React, { useState } from "react";
import "./style.css"; // Create this CSS file
import close from "../../assets/images/portfolio/close-btn.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Formpopup = ({ auditName = "", buttonClassName = "", arrowicon = "" }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    projectwebsite: "",
    githublink: "",
    services: "",
    auditdeadline: "",
  });
  const [message, setMessage] = useState("");

  const togglePopup = () => setShowPopup(!showPopup);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/users/requestquote", formData);
      if (response.status === 200) {
        setMessage("Your request has been submitted successfully!");
        // setMessage("Your request has been submitted successfully!");
        setFormData({
          name: "",
          username: "",
          email: "",
          projectwebsite: "",
          githublink: "",
          services: "",
          auditdeadline: "",
        });
        setShowPopup(false); // Close the popup
        navigate("/thankyoupage")
      } else {
        setMessage("Failed to submit. Please check the details!");
        navigate("/error")

      }
    } catch (error) {
      setMessage("Failed to submit the form. Please try again later.");
    }
  };

  return (
    <div className="popup-container">
      <button
        className={`open-popup-btn btn text-white ${buttonClassName}`}
        onClick={togglePopup}
      >
        {auditName}
        {arrowicon && <img src={arrowicon} alt="Button Icon" className="btn-icon" />}
      </button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h3>Request Audit</h3>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-block">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-block">
                  <label htmlFor="projectwebsite">Project Website</label>
                  <input
                    type="text"
                    id="projectwebsite"
                    value={formData.projectwebsite}
                    onChange={handleChange}
                    placeholder="Enter your project website"
                    required
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="githublink">GitHub Link/Smart Contract Address</label>
                  <input
                    type="text"
                    id="githublink"
                    value={formData.githublink}
                    onChange={handleChange}
                    placeholder="Enter GitHub/Smart Contract link"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-block">
                  <label htmlFor="username">Username - Telegram/Skype/X</label>
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="input-block">
                  <label htmlFor="services">Services</label>
                  <select
                    id="services"
                    value={formData.services}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Service 1">Smart Contract Audit</option>
                    <option value="Service 2">Blockchain Security Audit</option>
                    <option value="Service 3">Penetration Testing</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="input-block">
                  <label htmlFor="auditdeadline">Audit Deadline</label>
                  <input
                    type="date"
                    id="auditdeadline"
                    value={formData.auditdeadline || new Date().toISOString().split("T")[0]}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]} // Prevent past dates
                  />
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>

            <button className="close-popup-btn" onClick={togglePopup}>
              <img src={close} alt="Close" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formpopup;
