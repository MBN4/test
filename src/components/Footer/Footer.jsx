import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand">
            <div className="footer-logo-svg">
              {/* SVG Logo same as Header */}
              <svg width="210" height="50" viewBox="0 0 210 50" fill="none">
                <path d="M23.1 10.5L10.5 17.8V32.2L23.1 39.5L35.7 32.2V17.8L23.1 10.5Z" fill="#ffffff"/>
                <text x="50" y="28" fontFamily="Inter" fontWeight="700" fontSize="18" fill="#ffffff">MODERN AMINOS</text>
                <text x="50" y="40" fontFamily="Inter" fontWeight="400" fontSize="7" fill="#ffffff" letterSpacing="0.5">QUALITY PRODUCTS WITH QUALITY SERVICE</text>
              </svg>
            </div>
            <p>Quality products and exceptional service are very important to us</p>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>cs@modernaminos.com</span>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Subscribe now to save 15%</h4>
            <p>Subscribe and Get Exclusive Updates Straight to your Inbox for Free</p>
            <div className="newsletter-box">
              <input type="email" placeholder="Email" />
              <button className="btn-send">
                <span>Send</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>Please be advised: All compounds and research materials provided by Modern Aminos are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment.</p>
        </div>

        <div className="footer-bottom">
          <div className="copyright">Copyright 2026, All Rights Reserved.</div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="fixed-cart-btn">
        <span className="count">0</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
      </div>
    </footer>
  );
};

export default Footer;