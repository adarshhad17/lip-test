import React from "react";
import "./FeaturedLogos.css";

const FeaturedLogos = () => {
  return (
    <section className="featured-section">
      <h3 className="featured-title">FEATURED IN</h3>
      <div className="logo-grid">
        <span className="logo-text">Fabulous</span>
        <span className="logo-text">Closer</span>
        <span className="logo-text">REFINERY29</span>
        <span className="logo-text mailonline">
          <span className="mail">Mail</span><span className="online">Online</span>
        </span>
        <span className="logo-text thismorning">
          <span className="this">this</span> <span className="morning">morning</span>
        </span>
        <span className="logo-text">COSMOPOLITAN</span>
      </div>
    </section>
  );
};

export default FeaturedLogos;
