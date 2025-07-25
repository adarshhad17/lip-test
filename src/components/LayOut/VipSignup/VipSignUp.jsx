import React from 'react';
import './VipSignup.css';

const VipSignup = () => {
  return (
    <div className="vip-container">
      <div className="vip-left">
        <h2>GET ON THE VIP LIST</h2>
        <p>Sign up for 15% off and be the first to know about our latest offers & news</p>
      </div>

      <div className="vip-right">
        <div className="form-inputs">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your email" />
        </div>
        <button className="signup-btn">SIGN UP</button>
        <p className="privacy-note">
          *By signing up, you agree to our <span>Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default VipSignup;
