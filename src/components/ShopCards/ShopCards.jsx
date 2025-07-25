import React from "react";
import "./ShopCards.css";

import lip from '../../assets/lip.webp';
import face from '../../assets/face.webp';
import lip2 from '../../assets/lip-2.webp';

const cards = [
  { title: "LIP", image: lip },
  { title: "FACE", image: face },
  { title: "KITS", image: lip2 },
];

function ShopCards() {
  return (
    <div className="shop-cards-container">
      {cards.map((card, index) => (
        <div key={index} className="shop-card">
          <img src={card.image} alt={card.title} />
          <div className="shop-card-text">
            <span className="shop-text">SHOP</span>
            <h2>{card.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShopCards;
