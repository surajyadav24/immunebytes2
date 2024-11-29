import React, { useState } from "react";
import "./style.css"
import downarrow from "../../assets/images/services-main/down-arrow.svg"
import rightarrow from "../../assets/images/services-main/right-arrow.svg"
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Smart Contract Auditing?",
      answer:
        "Smart contract auditing is the process that involves (manual and automated) analysis of the smart contract's code and functionality to identify potential vulnerabilities, security risks, and flaws in the business logic.",
    },
    {
      question: "What Tools and Technologies Are Used in Smart Contract Audits?",
      answer: "Answer for this question.",
    },
    {
      question: "Can You Audit Smart Contracts on Different Blockchains?",
      answer: "Answer for this question.",
    },
    {
      question: "How Long Does a Typical Smart Contract Audit Take?",
      answer: "Answer for this question.",
    },
  ];

  return (
    <div className="  p-6">
      <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">
        FAQs
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-btn  border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center bg-gray-800 text-white px-4 py-3 text-left"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? <img src={downarrow} alt="" /> :<img src={rightarrow} alt="" />}</span>
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
  );
};

export default FAQ;
