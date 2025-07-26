import React, { useRef } from "react";
import "./BestInPlump.css";

import main from "../../../assets/main.png";
import first from "../../../assets/first.png";
import sec from "../../../assets/sec.png";
import third from "../../../assets/third.png";

const products = [
  {
    id: 1,
    title: "PLUMP JUICE",
    desc: "Plumping & hydrating lip oil",
    price: "£18.00",
    image: first,
    variants: ["#f2b9c4", "#f2d6dc", "#f25774"],
  },
  {
    id: 2,
    title: "EXTREME MATTE PLUMPING PRIMER",
    desc: "Extreme plumping lip primer",
    price: "£16.00",
    image: sec,
    variants: [],
  },
  {
    id: 3,
    title: "PLUMP & FILL",
    desc: "Plumping lip liner",
    price: "£16.00",
    image: third,
    variants: ["#c27872", "#d68c7e", "#b1584a", "#cf5f5f", "#9a4a3f", "#80423a", "#703e3a"],
  },
];

const BestInPlump = () => {
  const scrollRef = useRef();

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="bestin-wrapper">
      <div className="bestin-header-row">
        <h2 className="bestin-heading">BEST IN PLUMP</h2>
        <button className="scroll-arrow-header" onClick={scrollRight}>➜</button>
      </div>

      <div className="card-scroll-container" ref={scrollRef}>
        {/* Main Card */}
        <div className="main-card">
          <img src={main} alt="Main" className="main-img" />
          <button className="shop-button">SHOP ALL</button>
        </div>

        {/* Product Cards */}
        {products.map((product) => (
          <div className="product-box" key={product.id}>
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.desc}</p>
              <p className="product-price">{product.price}</p>
              {product.variants.length > 0 && (
                <div className="variant-dots">
                  {product.variants.slice(0, 6).map((color, index) => (
                    <span
                      key={index}
                      className="variant-dot"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  {product.variants.length > 6 && (
                    <span className="variant-more">+{product.variants.length - 6}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestInPlump;
