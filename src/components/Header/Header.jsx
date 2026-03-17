import React from 'react';
import './Header.css';
// Import your logo from the assets folder
import logo from '../../assets/logo.svg'; 

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-top-nav">
        <div className="header-container">
          {/* Left: Logo using your SVG file */}
          <div className="logo-wrapper">
            <a href="/">
              <img src={logo} alt="Modern Aminos Logo" className="site-logo" />
            </a>
          </div>

          {/* Center: Navigation Pill */}
          <nav className="navigation">
            <div className="nav-pills-container">
              <a href="/" className="nav-pill-item active">Home</a>
              <a href="/contact" className="nav-pill-item">Contact Us</a>
            </div>
          </nav>

          {/* Right: Profile Icon */}
          <div className="header-actions">
            <div className="user-profile-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005B82" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Announcement Bar */}
      <div className="announcement-banner">
        <p>Login for the full experience. - For laboratory research use only. Not for human consumption.</p>
      </div>
    </header>
  );
};

export default Header;