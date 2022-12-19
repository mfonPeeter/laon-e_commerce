import { Link } from 'react-router-dom';

import img1 from '../../assets/products-specs/redmi-phones-specs/redmi-note-11-pro-5g-specs.png';
import img2 from '../../assets/products-specs/redmi-phones-specs/redmi-note-10-specs.png';
import img3 from '../../assets/products-specs/redmi-phones-specs/redmi-note-9-pro-specs.png';

const SmallBanner = () => {
  return (
    <section className="homepage-container grid gap-y-3 mb-12 font-lora sm:grid-cols-2 sm:gap-x-3 lg:grid-cols-3">
      <Link
        to="/products/prod_NXELwjYYNel3A4"
        className="small-banner-link px-10 py-6 bg-slate-200"
      >
        <div>
          <h3 className="small-banner-text">Redmi Note 11 Pro 5g</h3>
          <img src={img1} alt="Redmi Note 11 Pro 5g" />
        </div>
      </Link>
      <Link
        to="/products/prod_mOVKl466yLoprR"
        className="small-banner-link px-10 py-6 bg-zinc-200"
      >
        <div>
          <h3 className="small-banner-text">Redmi Note 10</h3>
          <img src={img2} alt="Redmi Note 10" />
        </div>
      </Link>
      <Link
        to="/products/prod_N7GKwbzzvXw3EX"
        className="small-banner-link px-10 py-6 bg-slate-200"
      >
        <div>
          <h3 className="small-banner-text">Redmi Note 9 Pro</h3>
          <img src={img3} alt="Redmi Note 9 Pro" />
        </div>
      </Link>
    </section>
  );
};

export default SmallBanner;
