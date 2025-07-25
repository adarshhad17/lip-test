import React from "react";
import "./SwatchStrip.css"; // CSS code below goes here
import imagefull from '../../../assets/image-horizontal.png'

const SwatchStrip = () => {
  return (
       <div className="image-scroll-container">
      <div className="image-card">
        <img
          src={imagefull}
          alt="Shop"
          className="image-content"
        />
      </div>
    </div>
  );
};

export default SwatchStrip;
