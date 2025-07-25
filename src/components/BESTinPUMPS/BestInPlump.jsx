import React, { useRef } from "react";
import "./BestInPlump.css";

import main from "../../assets/main.png";
import first from "../../assets/first.png";
import sec from "../../assets/sec.png";
import third from "../../assets/third.png";

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
    dots: 6,
    img: third,
  },
];

const BestInPlump = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div className="plump-container">
      <div className="plump-header">
        <h2 className="plump-heading">BEST IN PLUMP</h2>
        <button className="scroll-arrow" onClick={scrollRight}>→</button>
      </div>

      <div className="plump-scroll-wrapper">
        <div className="plump-scroll" ref={scrollRef}>
          <div className="main-card">
            <img src={main} alt="main" />
            <button className="shop-all-btn">SHOP ALL</button>
          </div>

          {products.map((product, idx) => (
            <div className="product-card" key={idx}>
              <div className="product-img-box">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <p className="price">{product.price}</p>
                <div className="dots">
                  {Array.from({ length: product.dots }).map((_, i) => (
                    <span className="dot" key={i}></span>
                  ))}
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
