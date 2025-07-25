import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* SHOP Section */}
        <div className="footer-section">
          <h4 className="footer-title">SHOP</h4>
          <ul>
            <li>Lip</li>
            <li>Face</li>
            <li>Kits</li>
            <li>Shop All</li>
          </ul>
        </div>

        {/* ABOUT Section */}
        <div className="footer-section">
          <h4 className="footer-title">ABOUT</h4>
          <ul>
            <li>Our Story</li>
            <li>Clinically Proven</li>
          </ul>
        </div>

        {/* HELP Section */}
        <div className="footer-section">
          <h4 className="footer-title">HELP</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <i className="bi bi-meta" />
          <i className="bi bi-instagram" />
          <i className="bi bi-tiktok" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
