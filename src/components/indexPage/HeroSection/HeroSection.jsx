import './HeroSection.css';
import heroImg from '../../../assets/Hero.webp'; // update path to your image

const HeroSection = () => {
  return (
    <div className="hero-container">
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
