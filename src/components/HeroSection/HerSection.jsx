import React from 'react';
import "./HeroSection.css";
import hero from '../../assets/Hero.webp';

function HeroSection() {
  return (
    <div className="main-hero">
      {/* -------text-------- */}
      <div className="text-hero">
        <h1 className="hero-heading">
          BIG LIPS,<br />BIGGER ENERGY
        </h1>
        <p className="hero-description">
          Our famous lip liner lines, fills and plumps so you can cheat <br />
          your way to an instant lip lift.
        </p>
        <button className="hero-btn">SHOP PLUMP & FILL</button>
      </div>

      {/* -----------image--------- */}
      <div className="img-hero">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
}

export default HeroSection;
