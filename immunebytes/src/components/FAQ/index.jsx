import React, { useState } from "react";
import "./style.css";

const FAQ = ({ title, faqs, icons }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<div className="container">
<div className="p-6 faq-container">
      <h2 className="text-2xl font-bold text-center heading mb-6 pb-6">
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-btn question border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left"
            >
              <span
                className={`${
                  openIndex === index ? "text-pink-500" : "text-white"
                }`}
              >
                {faq.question}
              </span>
              <span>
                {openIndex === index ? (
                  <>
                    <img
                      src={icons.downArrowDesktop}
                      alt="Desktop Down Arrow"
                      className="desktop-arrow"
                    />
                    <img
                      src={icons.downArrowMobile}
                      alt="Mobile Down Arrow"
                      className="mobile-arrow"
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={icons.rightArrowDesktop}
                      alt="Desktop Right Arrow"
                      className="desktop-arrow"
                    />
                    <img
                      src={icons.rightArrowMobile}
                      alt="Mobile Right Arrow"
                      className="mobile-arrow"
                    />
                  </>
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="answer bg-gray-900 text-gray-300 px-4 py-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default FAQ;
