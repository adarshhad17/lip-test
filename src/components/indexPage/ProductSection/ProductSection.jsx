import React from "react";
import "./ProductSection.css";
import lipstick from '../../../assets/lipstick.png';
import secondd from '../../../assets/secondd.png';

const rightProducts = [
  {
    id: 1,
    title: "PLUMP JUICE",
    flavor: "Coconut",
    color: "Clear",
    price: "£18.00",
    image: secondd,
  },
];

const ProductSection = () => {
  return (
    <div>
      {/* Top Section: PRODUCTS PROVEN TO PLUMP */}
      <section className="proven-section">
        <h2 className="proven-heading">
          PRODUCTS PROVEN<br />TO PLUMP
        </h2>
        <p className="proven-description">
          Clean, conscious and clinically proven, our plumpers deliver real results so you can plump up your beauty, naturally.
        </p>
        <button className="proven-button">SEE THE RESULTS</button>
      </section>

      {/* Product Cards Section */}
      <div className="static-wrapper">
        {/* Static Left Card */}
        <div className="product-card trending">
          <img src={lipstick} alt="Trending" className="card-img" />
          <div className="overlay-content">
            <div className="trending-label">TRENDING ON TIKTOK</div>
            <h2 className="trending-title">YOUR LIPS <br /> BUT JUICIER</h2>
          </div>
        </div>

        {/* Right Product Card(s) */}
        {rightProducts.map((product) => (
          <div className="product-card right-product" key={product.id}>
            <img src={product.image} alt={product.title} className="product-imgg" />
            <div className="right-product-content">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-subtitle">
                {product.flavor} • {product.color}
              </p>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart">ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
