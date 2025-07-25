import React from "react";
import "./FeatureStrip.css";

const features = [
  "CLINICALLY PROVEN TO PLUMP",
  "100% NATURAL",
  "VEGAN",
  "CRUELTY-FREE",
  
];

function FeatureStrip() {
  return (
    <div className="feature-strip-wrapper">
      <div className="feature-strip">
        {features.map((item, index) => (
          <div className="feature-item" key={index}>
            <span className="dot"></span>
            <span className="text">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureStrip;
