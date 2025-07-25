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
    img: main,
  },
  {
    title: "EXTREME MATTE PLUMPING PRIMER",
    desc: "Extreme plumping lip primer",
    price: "£16.00",
    dots: 5,
    img: first,
  },
  {
    title: "PLUMP & FILL",
    desc: "Plumping lip liner",
    price: "£16.00",
    dots: 6,
    img: sec,
  },
  {
    title: "MORE",
    desc: "More products",
    price: "£15.00",
    dots: 4,
    img: third,
  },{
    title: "MORE",
    desc: "More products",
    price: "£15.00",
    dots: 4,
    img: third,
  },
];

const BestInPlump = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const [mainProduct, ...otherProducts] = products;

  return (
    <div className="plump-section">
      <h2 className="section-title">BEST IN PLUMP</h2>
      <div className="card-scroll-wrapper">
        <div className="card-row" ref={scrollRef}>
          {/* Main Card */}
          <div className="main-card">
            <img src={mainProduct.img} alt={mainProduct.title} />
            <button className="main-button">SHOP ALL</button>
          </div>

          {/* Product Cards */}
         {otherProducts.map((product, idx) => (
  <div className="product-wrapper" key={idx}>
    <div className="product-card">
      <img src={product.img} alt={product.title} />
    </div>
    <div className="product-info">
      <h3>{product.title}</h3>
      <p>{product.desc}</p>
      <p className="price">{product.price}</p>
      <div className="dots">
        {Array.from({ length: product.dots }).map((_, i) => (
          <span key={i} className="dot" />
        ))}
      </div>
    </div>
  </div>
))}

        </div>

        <button className="arrow-btn" onClick={scrollRight}>
          →
        </button>
      </div>
    </div>
  );
};

export default BestInPlump;
