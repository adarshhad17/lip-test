import './ProjectShowcase.css';

import za from '../../../assets/za.png'
import zb from '../../../assets/zb.png';
import zc from '../../../assets/zc.png';
import zd from '../../../assets/zd.png';
import ze from '../../../assets/zb.png';
import zf from '../../../assets/zc.png';
import zg from '../../../assets/za.png';
import zh from '../../../assets/zb.png';
import zi from '../../../assets/zc.png';

const images = [za, zb, zc,zd,ze,zf,zg,zh,zi];

const ProjectShowcase = () => {
  return (
    <div className="showcase-container">
      <div className="header">
        <span className="handle">@PROJECT_COSMETICS</span>
        <button className="follow-btn">FOLLOW US</button>
      </div>

      <div className="card-row">
        {images.map((img, idx) => (
          <div className="card" key={idx}>
            <img src={img} alt={`person-${idx}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
