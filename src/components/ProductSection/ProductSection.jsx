import React, { useState } from 'react';
import './ProductSection.css';

const products = [
  {
    name: 'PLUMP JUICE',
    flavor: 'Coconut',
    color: 'Clear',
    price: '£18.00',
    image: 'https://i.imgur.com/nR9uNmy.png',
  },
  {
    name: 'PLUMP PEACH',
    flavor: 'Peach',
    color: 'Tinted',
    price: '£20.00',
    image: 'https://i.imgur.com/Mm4RLnb.png',
  },
  {
    name: 'PLUMP ROSE',
    flavor: 'Rose',
    color: 'Pink',
    price: '£19.00',
    image: 'https://i.imgur.com/DzDR4Uz.png',
  },
];

const ProductSection = () => {
  const [index, setIndex] = useState(0);
  const nextProduct = () => setIndex((index + 1) % products.length);

  const product = products[index];

  return (
    <section className="plump-section">
      <div className="left-card">
        <img
          src="https://i.imgur.com/FXiDQYQ.png"
          alt="Lips"
          className="lip-image"
        />
        <div className="text-overlay">
          <div className="tag">TRENDING ON TIKTOK</div>
          <h2 className="headline">
            YOUR LIPS<br />BUT JUICIER
          </h2>
        </div>
      </div>

      <div className="right-card">
        <img src={product.image} alt={product.name} className="gloss-image" />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.flavor} • {product.color}</p>
          <p className="price">{product.price}</p>
          <button className="add-btn">ADD TO CART</button>
        </div>
        <button className="arrow-btn" onClick={nextProduct}>→</button>
      </div>
    </section>
  );
};

export default ProductSection;
