import React from 'react';
import './QuoteBanner.css';

const QuoteBanner = () => {
  return (
    <section className="parallax-quote-section">
      <div className="parallax-overlay">
        <div className="parallax-content">
          <div className="quote-badge">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12L13.017 12V9C13.017 7.34315 14.3601 6 16.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H5.01697C4.46468 8 4.01697 8.44772 4.01697 9V12L2.01697 12V9C2.01697 7.34315 3.36012 6 5.01697 6H8.01697C9.67382 6 11.017 7.34315 11.017 9V15C11.017 18.3137 8.33068 21 5.01697 21H3.01697Z" />
            </svg>
          </div>
          <h2 className="parallax-text">
            Quality products and exceptional service <br /> are very important to us
          </h2>
        </div>
      </div>
    </section>
  );
};

export default QuoteBanner;