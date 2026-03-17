import React from 'react';
import './Hero.css';
import bgImage from '../../assets/Background-Image.webp';

const Hero = () => {
  return (
    <section className="hero-outer-wrapper">
      <div className="hero-full-container">
        <div className="hero-inner-card" style={{ backgroundImage: `linear-gradient(rgba(5, 20, 31, 0.9), rgba(5, 20, 31, 0.9)), url(${bgImage})` }}>
          <div className="hero-grid-layout">
            
            <div className="hero-left-text">
              <h1>Thank you for Visiting <br /> Modern Aminos</h1>
              <p className="description-main">
                At Modern Aminos, we are committed to maintaining a highly compliant and researcher-friendly experience. To support this commitment, we now require researchers to log in to their user account in order to view our full selection of research materials. If you do not have an existing account with us please register below.
              </p>
              <p className="legal-disclaimer">
                <strong>Please be advised:</strong> All compounds and research materials provided by Modern Aminos are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment
              </p>
              <button className="btn-reg-outline">Register Now</button>
            </div>

            <div className="hero-right-form">
              <div className="login-card-container">
                <h2 className="login-title">Login</h2>
                
                <div className="input-group-row">
                  <label>Username or email address *</label>
                  <input type="text" className="hero-input" />
                </div>
                
                <div className="input-group-row">
                  <label>Password *</label>
                  <input type="password" className="hero-input" />
                </div>

                <div className="remember-row">
                  <input type="checkbox" id="rem-me" />
                  <label htmlFor="rem-me">Remember Me</label>
                </div>

                <button className="btn-submit-login">Log In</button>
                
                <div className="login-footer-nav">
                  <a href="/">Lost your password?</a>
                  <a href="/">Register</a>
                </div>

                <div className="social-login-sep">
                  <button className="btn-social-hero google">
                    <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="" />
                    Continue with <strong>Google</strong>
                  </button>
                  <button className="btn-social-hero microsoft">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="" />
                    Continue with <strong>Microsoft</strong>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;