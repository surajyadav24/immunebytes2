import './style.css';
import PrimaryBtn from '../Primarybutton';
function MyComponent() {
  return (
    <div className="container">
      <h1 className="heading-thank">
        Thank <span className="highlight-you">You!</span>
      </h1>
      <p className="description-thank">We are glad to receive your query! One of our team members will connect with you shortly and answer any questions you may have. Your security concerns are our highest priority now. Let’s get this journey started!</p>
<div className="thank-btn">
<PrimaryBtn text="Explore Services"/>
</div>

<div className="secure-audit">
<h2>
Stay Ahead of the Security Curve.
</h2>
</div>

    </div>
  );
}

export default MyComponent;
