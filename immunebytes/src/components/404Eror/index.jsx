import "./style.css";
import PrimaryBtn from "../Primarybutton";
function Eror4o4() {
  return (
    <div className="container">
      <h1 className="heading-thank eror-thank">
      404 <span className="highlight-you"></span>
      </h1>
      <p className="description-thank-eror ">
      Oops! Looks like you
      took a wrong turn.
      </p>
      <div className="thank-btn">
        <PrimaryBtn text="Explore Services" />
      </div>

      <div className="secure-audit">
        <h2>Stay Ahead of the Security Curve.</h2>
      </div>
    </div>
  );
}

export default Eror4o4;
