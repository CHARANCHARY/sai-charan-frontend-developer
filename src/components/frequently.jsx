import React, { useState } from 'react';
import "../App.css";

const Question = () => {
  const faqData = [
    { question: "What is EthAi?", answer: "EthAi is a smart AI-powered platform that..." },
    { question: "How can EthAi help me as a Trader?", answer: "EthAi assists traders by analyzing..." },
    { question: "Who can use EthAi?", answer: "Anyone who needs AI-powered trading insights..." },
    { question: "How does EthAi track smart money flow?", answer: "EthAi tracks smart money flow by..." },
    { question: "How does EthAi ensure data security?", answer: "EthAi ensures data security by..." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span className='mr-5 '>{openIndex === index ? '-' : '+'}</span>
            <span>{faq.question}</span>
            
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
      </div>
    </div>
  );
};




export default Question;
