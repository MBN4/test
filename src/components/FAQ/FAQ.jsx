import React, { useState } from 'react';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const questions = [
    "Do you ship internationally?",
    "Why do I need an account to view the site?",
    "How long do orders take to arrive?"
  ];

  return (
    <section className="faq-area">
      <div className="container">
        <div className="faq-badge">Frequently Asked Questions</div>
        <h2 className="section-title">Need Help?</h2>
        <div className="faq-box">
          <div className="faq-header">GENERAL QUESTIONS</div>
          {questions.map((q, i) => (
            <div key={i} className="faq-item" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
              <span>{q}</span>
              <span>{activeFaq === i ? '−' : '+'}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;