import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-outer-wrapper">
      <div className="container">
        <div className="hero-inner-card">
          <div className="hero-flex">
            
            <div className="hero-content-left">
              <h1>Thank you for Visiting <br /> Modern Aminos</h1>
              <p className="hero-description">
                At Modern Aminos, we are committed to maintaining a highly compliant and researcher-friendly experience. To support this commitment, we now require researchers to log in to their user account in order to view our full selection of research materials. If you do not have an existing account with us please register below.
              </p>
              <p className="hero-legal-notice">
                <strong>Please be advised:</strong> All compounds and research materials provided by Modern Aminos are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment
              </p>
              <button className="btn-register-outline">Register Now</button>
            </div>

            <div className="hero-login-right">
              <div className="login-border-box">
                <span className="login-tag">[login_notice]</span>
                <h2>Login</h2>
                <div className="form-item">
                  <label>Username or email address *</label>
                  <input type="text" />
                </div>
                <div className="form-item">
                  <label>Password *</label>
                  <input type="password" />
                </div>
                <div className="remember-me-row">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <button className="btn-login-submit">Log In</button>
                <div className="forgot-links">
                  <a href="#">Lost your password?</a> <a href="#">Register</a>
                </div>
                <div className="social-divider">
                  <button className="btn-social google">
                    <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="" />
                    Continue with <strong>Google</strong>
                  </button>
                  <button className="btn-social microsoft">
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