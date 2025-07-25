import React from "react";
import "./HeroSection.css";
import modelImg from "../../../assets/Hero.webp";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Left Side: Text */}
        <div className="text-section">
          <h1>
            BIG LIPS,<br />
            BIGGER ENERGY
          </h1>
          <p>
            Our famous lip liner lines, fills and plumps so you can cheat <br />
            your way to an instant lip lift.
          </p>
          <button className="shop-btn">SHOP PLUMP & FILL</button>
        </div>

        {/* Right Side: Image */}
        <div className="image-section">
          <img src={modelImg} alt="Model" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
