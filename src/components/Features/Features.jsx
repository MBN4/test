import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-grid">
          
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/>
              </svg>
            </div>
            <h3>Third party tested</h3>
            <p>
              Third Party Multi Vial Batch Tested: Our products undergo rigorous third-party, 
              multi-vial batch testing to ensure exceptional safety, purity, and quality. 
              Batch testing also allows you to easily match each peptide to its corresponding 
              Certificate of Analysis (COA).
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" ry="2"/><line x1="16" y1="8" x2="20" y2="8"/><line x1="16" y1="12" x2="23" y2="12"/><path d="M22 5h-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </div>
            <h3>Fast Shipping</h3>
            <p>
              Same-Day Shipping Monday through Friday when you order before 12 PM CST! 
              At Modern Aminos, we take pride in our fast, reliable shipping to ensure 
              your order arrives without delay.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>24/7 Customer Support <br /> (Monday–Friday)</h3>
            <p>
              Our dedicated customer service team is available Monday through Friday, 
              and for most of the day on weekends, to ensure your needs are handled 
              quickly and efficiently.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;