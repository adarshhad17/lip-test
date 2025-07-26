import './PlumpCard.css';
import image from '../../../assets/plum.png'; 

const PlumpCard = () => {
  return (
    <div className="plump-container">
      <div className="image-section">
        <img src={image} alt="Plump Faces" />
 <div className="vertical-text">
  YOU ARE YOUR BEST PROJECT &nbsp;&nbsp;&nbsp; YOU ARE YOUR BEST PROJECT &nbsp;&nbsp;&nbsp; YOU ARE YOUR BEST PROJECT
</div>


      </div>
      <div className="content-section">
        <h1>MADE TO PLUMP,<br />MADE FOR <br /> EVERYONE</h1>
        <p>
          We’re here to empower you to celebrate your natural beauty and have fun
          while <br />doing it. That’s why we’ve created derm-approved, clean and conscious
          plumpers <br />that you can actually feel good about obsessing over.
        </p>
        <button>DISCOVER MORE</button>
      </div>
    </div>
  );
};

export default PlumpCard;
