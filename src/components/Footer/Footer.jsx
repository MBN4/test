import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <>
      <div className="footer-white-spacer"></div>

      <footer className="footer-main">
        <div className="footer-container">
          
          <div className="footer-top-grid">
            <div className="footer-col brand-col">
              <img src={logo} alt="Modern Aminos" className="footer-white-logo" />
              <p className="footer-brand-text">
                Quality products and exceptional service are <br /> very important to us
              </p>
            </div>

            <div className="footer-col info-stack-col">
              <div className="info-group">
                <h3>Contact Us</h3>
                <div className="footer-contact-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href="mailto:cs@modernaminos.com">cs@modernaminos.com</a>
                </div>
              </div>

              <div className="info-group links-mt">
                <h3>Quick Links</h3>
                <ul className="footer-link-list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/contact">Contact us</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-col subscribe-col">
              <h3>Subscribe now to save 15%</h3>
              <p className="sub-description">
                Subscribe and Get Exclusive Updates <br /> Straight to your Inbox for Free
              </p>
              <div className="footer-subscribe-pill">
                <input type="email" placeholder="Email" />
                <button className="btn-footer-subscribe">
                  Send 
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="footer-legal-centered">
            Please be advised: All compounds and research materials provided by Modern Aminos are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment.
          </div>

          <div className="footer-bottom-bar">
            <p>Copyright 2026, All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Refund Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;