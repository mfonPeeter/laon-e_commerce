import img1 from '../../assets/products-specs/smart-devices-specs/mi-watch-specs.png';
import img2 from '../../assets/products-specs/smart-devices-specs/redmi-buds-3-pro-dark-specs.png';
import img5 from '../../assets/products-specs/smart-devices-specs/redmi-buds-3-pro-light-specs.png';
import img3 from '../../assets/products-specs/smart-devices-specs/redmi-watch-2-lite-specs.png';
import img4 from '../../assets/products-specs/smart-devices-specs/mi-smart-band-5-specs.png';

const StarProducts = () => {
  return (
    <section className="homepage-container mb-12 font-lora">
      <h2 className="mb-6 text-gray-700 text-2xl text-center font-semibold uppercase md:text-3xl">
        Star Products
      </h2>

      <div className="grid gap-y-3 grid-flow-row auto-rows-fr sm:grid-cols-2 sm:gap-x-3 lg:grid-cols-4 lg:gap-1 lg:auto-rows-auto">
        <a
          href="mi-watch"
          className="star-products-link p-4 bg-zinc-200 lg:row-span-2 lg:col-span-2"
        >
          <div>
            <h3 className="star-products-text">Mi Watch</h3>
            <img src={img1} alt="Mi Watch" />
          </div>
        </a>
        <a
          href="redmi-buds-3-pro"
          className="star-products-link p-4 bg-slate-200 "
        >
          <div>
            <h3 className="star-products-text">Redmi Buds 3 Pro</h3>
            <div className="flex justify-center">
              <img src={img2} alt="Redmi Buds 3 Pro" className="w-2/5 h-2/5" />
              <img src={img5} alt="Redmi Buds 3 Pro" className="w-2/5 h-2/5" />
            </div>
          </div>
        </a>
        <a
          href="redmi-watch-2-lite"
          className="star-products-link p-4 bg-slate-200 "
        >
          <div>
            <h3 className="star-products-text">Redmi Watch 2 Lite</h3>
            <img src={img3} alt="Redmi Watch 2 Lite" />
          </div>
        </a>
        <a
          href="mi-smart-band-5"
          className="star-products-link p-4 bg-zinc-200 lg:col-span-2"
        >
          <div>
            <h3 className="star-products-text">Mi Smart Band 5</h3>
            <img src={img4} alt="Mi Smart Band 5" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default StarProducts;
