import React from 'react';
import './Guarantee.css';
import chemistImg from '../../assets/male-chemist-holds-test-tube-glass-1-1024x682.webp';
import labImg from '../../assets/ind13-1.webp';

const Guarantee = () => {
  return (
    <section className="guarantee-section">
      <div className="container">
        <h2 className="section-title">The Modern Aminos Guarantee</h2>

        <div className="guarantee-row">
          <div className="guarantee-image">
            <img src={chemistImg} alt="Chemist testing" />
          </div>
          <div className="guarantee-content">
            <h3>3rd Party Multi Vial Batch Tested</h3>
            <p>
              At Modern Aminos, we prioritize the quality and authenticity of every product we offer. 
              Each product undergoes third-party, multi-vial batch testing to verify purity, compound identity, 
              quantity, and endotoxin levels. In addition to this rigorous testing process, every vial 
              includes a unique batch number, allowing you to directly match your product to its 
              corresponding laboratory testing report.
            </p>
            <div className="login-prompt">
              <h4>Login for the full experience.</h4>
              <button className="btn-blue-pill">Login</button>
            </div>
          </div>
        </div>

        <div className="guarantee-row reverse">
          <div className="guarantee-image">
            <img src={labImg} alt="Laboratory equipment" />
          </div>
          <div className="guarantee-content">
            <h3>Customer Service and Experience Always Comes First</h3>
            <p>
              We understand that even though high quality research materials allows for the best most 
              reliable results in labratory settings, things like slow shipping, and poor customer service 
              can make already tedious research more of a headache. That is why here at Modern Aminos 
              our customer service and shipping teams work around the clock to ensure that you are 
              getting your material fast, and any shipping related inquries handled
            </p>
            <div className="login-prompt">
              <h4>Login for the full experience.</h4>
              <button className="btn-blue-pill">Login</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;