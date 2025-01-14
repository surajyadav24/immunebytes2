import React , {useEffect, useState} from 'react';
import './style.css';
import github from "../../assets/images/github-white.svg"
import linkedin from "../../assets/images/linkedin-white.svg"
import axios from 'axios'
const Footer = () => {

  const [message, setMessage] = useState("");


  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/users/subscribe", formData);
      // console.log("response :: ",response)
      const user = response.data.data
      // setFormData(user)

      if (response.status === 200) {
        // console.log("Your request has been submitted successfully!");
        setMessage("Your Details have been submitted successfully!");
        setFormData({
          name: "",
          email: "",
        });
        // navigate("/thankyoupage")
      } else {
        setMessage("Failed to submit. Please check the details!");
        // navigate("/error")

      }
    } catch (error) {
      setMessage("Failed to submit the form. Please try again later.");
    }
  };
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 2000); // Message disappears after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [message]);
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
        <div className="col-lg-3 col-md-6  footer-section  footer-section-4 footer-mobile">
            <h3>Subscribe</h3>
            <form>
              <label htmlFor="first&lastname">First & Last Name</label>
              <input type="text" placeholder="First & Last Name" id="name"
                    value={formData.name}
                    onChange={handleChange} />
              <label htmlFor="email">E-mail</label>
              <input type="email" placeholder="Email Address"  id="email"
                    value={formData.email}
                    onChange={handleChange} />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 footer-section footer-section-1">
            <h3>Home</h3>
            <ul>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/immunebytes"><img src={linkedin} alt="" /></a>
              <a href="https://github.com/ImmuneBytes"><img src={github} alt="" /></a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 footer-section footer-section-2">
            <h3>Services</h3>
            <ul>
              <li><a href="/smartcontract">Smart Contract Audit</a></li>
              <li><a href="/blockchainaudit">Blockchain Security Audit</a></li>
              <li><a href="/penetration-testing">Penetration Testing</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 footer-section footer-section-3">
            <h3>Contact us</h3>
            <p>
            Have questions or need a security audit for your next project? Reach out to our experts today and ensure your blockchain solutions are secure and reliable!



            </p>
          </div>

          <div className="col-lg-3 col-md-6  footer-section  footer-section-4">
          <h3>Subscribe</h3>
            <form onSubmit={handleSubmit}>
            {message && <p className="message text-[#F9116C] text-sm">{message}</p>}
              <label htmlFor="first&lastname">First & Last Name</label>
              <input type="text" placeholder="First & Last Name" id="name"
                    value={formData.name}
                    onChange={handleChange} />
              <label htmlFor="email">E-mail</label>
              <input type="email" placeholder="Email Address"  id="email"
                    value={formData.email}
                    onChange={handleChange} />
              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="social-icons mobile-social">
          <a href="https://www.linkedin.com/company/immunebytes"><img src={linkedin} alt="" /></a>
          <a href="https://github.com/ImmuneBytes"><img src={github} alt="" /></a>
            </div>

          <div className="col-12 footer-bottom  d-flex justify-content-between align-items-center">
            <p>©2024 ImmuneBytes. All Rights Reserved</p>
            <div className="footer-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
