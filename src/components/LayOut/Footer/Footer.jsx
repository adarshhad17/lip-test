import React from "react";
import "./Footer.css";

import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-title">SHOP</h4>
          <ul>
            <li>Lip</li>
            <li>Face</li>
            <li>Kits</li>
            <li>Shop All</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">ABOUT</h4>
          <ul>
            <li>Our Story</li>
            <li>Clinically Proven</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">HELP</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-social">
          <FaFacebook />
          <FaInstagram />
          <FaTiktok />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
