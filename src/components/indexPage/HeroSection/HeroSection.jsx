import './HeroSection.css';
import heroImg from '../../../assets/Hero.webp'; // update path to your image
import Header from '../../LayOut/Header/Header';
import "./Header.css";

const HeroSection = () => {
  return (
    <div className="hero-container">

    

    <div>
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

    </div>
    
      <div className="hero-content">
        <div className="text-section">
          <h1>FLUFFY IS BACK</h1>
          <p>
            Introducing the iconic fluffy whipped lip cream.
            Our most viral product is here to plump, soften, and hydrate your lips.
          </p>
          <button className="shop-btn">SHOP PLUMP & FILL</button>
        </div>
        <div className="image-section">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
