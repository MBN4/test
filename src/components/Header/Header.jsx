import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-top-nav">
        <div className="header-container">
          <div className="logo-wrapper">
            <svg width="210" height="50" viewBox="0 0 210 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.1 10.5L10.5 17.8V32.2L23.1 39.5L35.7 32.2V17.8L23.1 10.5ZM23.1 14.1L32.7 19.6V30.4L23.1 35.9L13.5 30.4V19.6L23.1 14.1Z" fill="#005B82"/>
              <path d="M23.1 18.5L17.5 21.7V28.3L23.1 31.5L28.7 28.3V21.7L23.1 18.5ZM23.1 21.2L26 22.9V27.1L23.1 28.8L20.2 27.1V22.9L23.1 21.2Z" fill="#005B82"/>
              <text x="50" y="28" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18" fill="#001B2B">MODERN AMINOS</text>
              <text x="50" y="40" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="7" fill="#005B82" letterSpacing="0.5">QUALITY PRODUCTS WITH QUALITY SERVICE</text>
            </svg>
          </div>

          <nav className="navigation">
            <div className="nav-pills">
              <a href="/" className="nav-item active">Home</a>
              <a href="/contact" className="nav-item">Contact Us</a>
            </div>
          </nav>

          <div className="header-actions">
            <div className="user-profile-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#005B82" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="announcement-banner">
        <div className="container">
          Login for the full experience. - For laboratory research use only. Not for human consumption.
        </div>
      </div>
    </header>
  );
};

export default Header;