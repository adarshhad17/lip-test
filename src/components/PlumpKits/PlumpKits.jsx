import React from "react";
import "./PlumpKits.css";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";

const kits = [
  {
    id: 1,
    title: "THE FULL WORKS",
    desc: "Buff, prep & plump kit",
    price: "£42.00",
    oldPrice: "£54.00",
    discount: "22% OFF",
    image: one,
  },
  {
    id: 2,
    title: "FILTER FREE",
    desc: "Smooth, plump & prep kit",
    price: "£35.00",
    oldPrice: "£42.00",
    discount: "16% OFF",
    image: two,
  },
  {
    id: 3,
    title: "PLUMP & FILL LINER BUNDLES",
    desc: "Plumping lip liner kit",
    price: "£35.00",
    oldPrice: "£48.00",
    discount: "27% OFF",
    image: three,
  },
  {
    id: 4,
    title: "PREP & PLUMP",
    desc: "Prime, hydrate & plump kit",
    price: "£24.00",
    oldPrice: "£30.00",
    discount: "20% OFF",
    image: one,
  },
];

const PlumpKits = () => {
  return (
    <div className="plump-wrapper">
      <h1 className="plump-title">PLUMPING KITS</h1>
      <div className="kits-scroll">
        {kits.map((kit) => (
          <div className="kit-card" key={kit.id}>
            <div className="discount-badge">{kit.discount}</div>
            <div className="kit-image">
              <img src={kit.image} alt={kit.title} />
            </div>
            <div className="kit-info">
              <h3>{kit.title}</h3>
              <p>{kit.desc}</p>
              <div className="kit-prices">
                <span className="new-price">{kit.price}</span>
                <span className="old-price">{kit.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlumpKits;
