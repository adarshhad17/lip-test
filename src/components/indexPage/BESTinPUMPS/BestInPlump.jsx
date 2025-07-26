import React, { useRef } from "react";
import "./BestInPlump.css";

import main from "../../../assets/main.png";
import first from "../../../assets/first.png";
import sec from "../../../assets/sec.png";
import third from "../../../assets/third.png";

const products = [
  {
    title: "PLUMP JUICE",
    desc: "Plumping & hydrating lip oil",
    price: "£18.00",
    dots: 3,
    img: first,
  },
  {
    title: "EXTREME MATTE PLUMPING PRIMER",
    desc: "Extreme plumping lip primer",
    price: "£16.00",
    dots: 5,
    img: sec,
  },
  {
    title: "PLUMP & FILL",
    desc: "Plumping lip liner",
    price: "£16.00",
    dots: 8,
    img: third,
  },
];

const BestInPlump = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div className="bestin-container">
      <div className="bestin-header">
        <h2 className="bestin-title">BEST IN PLUMP</h2>
        <button className="bestin-arrow" onClick={scrollRight}>
          →
        </button>
      </div>

      <div className="scroll-wrapper">
        <div className="scroll-content" ref={scrollRef}>
          <div className="main-card">
            <img src={main} alt="main" />
            <button className="shop-btn">SHOP ALL</button>
          </div>

          {products.map((p, idx) => (
            <div className="product-cardd" key={idx}>
              <div className="product-img">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="product-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p className="price">{p.price}</p>
                <div className="dots">
                  {Array.from({ length: Math.min(p.dots, 5) }).map((_, i) => (
                    <span className="dot" key={i}></span>
                  ))}
                  {p.dots > 5 && (
                    <span className="dot more">+{p.dots - 5}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestInPlump;
