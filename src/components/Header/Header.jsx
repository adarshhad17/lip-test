import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="shipping-banner">
        FREE UK SHIPPING ON ORDERS OVER £40
      </div>

      <nav className="top-bar">
        <div className="nav-left">
          <button>SHOP</button>
          <button>ABOUT</button>
          <button>LEARN</button>
        </div>
        <div className="nav-center">PROJECT</div>
        <div className="nav-right">
          <button>SEARCH</button>
          <button className="cart-btn">
            CART <span>0</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
