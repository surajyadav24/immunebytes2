import "./style.css";
import PrimaryBtn from "../Primarybutton";
import { useNavigate } from "react-router-dom";
function Eror4o4() {
  const navigate = useNavigate()
  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <h1 className="heading-thank heading-error eror-thank">
      404 <span className="highlight-you"></span>
      </h1>
      <p className="description-thank-eror ">
      Oops! Looks like you
      took a wrong turn.
      </p>
      <div className="thank-btn">
        <PrimaryBtn text="Back To Home" onClick={handleBackToHome}  />
      </div>

      <div className="secure-audit pt-7">
        <h2>Stay Ahead of the Security Curve.</h2>
      </div>
    </div>
  );
}

export default Eror4o4;
