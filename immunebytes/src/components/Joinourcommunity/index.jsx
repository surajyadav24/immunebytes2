import React from "react";
import "./style.css";
import telegram from "../../assets/images/twitter.svg";
import twitter from "../../assets/images/telegram.svg";
const Community = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="join-wrapper pt-5">
            <h2>Join Our Community</h2>
            <p>
              Be part of a thriving network, shaping the future of secure
              decentralization.
            </p>
            <div className="btn-section">
              <div className="telegram-btn">
              <a href="https://t.me/aabhas_sood">
                <button className="telegram">
                  <img src={twitter} alt="" />
                  Join Telegram
                </button>
                </a>
              </div>

              <div className="x-btn">
              <a href="https://x.com/ImmuneBytes">
                <button className="twit-x">
                  <img src={telegram} alt="" />
                  Join X
                </button>
                </a>
              </div>
            </div>
            <div className="secure-audit">
              <h2>Stay Ahead of the Security Curve.</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
