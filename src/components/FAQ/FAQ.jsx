import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Do you ship internationally?",
      answer: "At the moment we only ship to the USA."
    },
    {
      question: "Why do I need an account to view the site?",
      answer: "To ensure compliance with industry regulations and to provide a tailored experience for our researchers, we require an account to access our full catalog."
    },
    {
      question: "How long do orders take to arrive?",
      answer: "Standard shipping typically takes 3-5 business days. Express options are available at checkout."
    },
    {
      question: "I think my package may be lost, or I'm having an order issue, what should I do?",
      answer: "Please contact our support team immediately at cs@modernaminos.com with your order number, and we will resolve the issue for you."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header-area">
          <span className="faq-badge">Frequently Asked Questions</span>
          <h2 className="faq-main-title">Need Help?</h2>
        </div>

        <div className="faq-accordion-box">
          <div className="faq-category-header">
            GENERAL QUESTIONS
          </div>
          
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div key={index} className={`faq-item-group ${activeIndex === index ? 'is-open' : ''}`}>
                <button 
                  className="faq-toggle-btn" 
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="faq-q-text">{item.question}</span>
                  <span className="faq-plus-minus">{activeIndex === index ? '−' : '+'}</span>
                </button>
                
                <div className="faq-collapse">
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;