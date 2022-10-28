import { useState } from 'react';

import img1 from '../../../assets/products-specs/mi-phones-specs/xiaomi-12T-pro-specs.webp';
import img2 from '../../../assets/products-specs/mi-phones-specs/xiaomi-12-Pro-specs.png';
import img3 from '../../../assets/products-specs/redmi-phones-specs/redmi-note-11-pro-specs.png';
import img4 from '../../../assets/products-specs/redmi-phones-specs/redmi-note-11-specs.png';
import img5 from '../../../assets/products-specs/redmi-phones-specs/redmi-note-10s-specs.png';
import img6 from '../../../assets/products-specs/redmi-phones-specs/redmi-note-10-pro-specs.png';

const data = [
  { id: 1, img: img1, title: 'Xiaomi 12T Pro' },
  { id: 2, img: img2, title: 'Xiaomi 12 Pro' },
  { id: 3, img: img3, title: 'Redmi Note 11 Pro' },
  { id: 4, img: img4, title: 'Redmi Note 11' },
  { id: 5, img: img5, title: 'Redmi Note 10S' },
  { id: 6, img: img6, title: 'Redmi Note 10 Pro' },
];

const HeroSection = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const slideTimeout = setTimeout(() => {
    if (slideIndex !== data.length) setSlideIndex(prevSlide => prevSlide + 1);

    if (slideIndex === data.length) setSlideIndex(1);
  }, 6000);

  const moveDot = index => {
    setSlideIndex(index);

    clearTimeout(slideTimeout);
  };

  return (
    <header className="flex flex-col space-y-10 items-center mb-4 px-10 pt-10 pb-20 text-center font-lora bg-gradient-to-r from-[#ECD8EF] via-[#FFFFFF] to-[#F5F4F7] md:flex-row md:space-y-0 md:space-x-10 md:h-[90vh] md:pb-10 md:pt-0 xl:px-20">
      <div className="md:w-1/2 md:text-left">
        <h1 className="mb-3 max-w-xl mx-auto text-4xl font-raleway font-bold lg:text-5xl lg:mx-0">
          Get <span className="text-blue-700">MI</span> phones at amazing prices
          from Laon's store
        </h1>
        <p className="mb-6 max-w-sm mx-auto font-raleway font-semibold md:mx-0">
          Discounts are given every last week of the month. Don't miss out!
        </p>
        <a href="all-products" className="products-link">
          All Products &rarr;
        </a>
      </div>

      <div className="relative w-full h-full md:w-1/2">
        {data.map((obj, index) => (
          <div
            key={obj.id}
            className={`absolute opacity-0 transition-opacity duration-1000 md:top-1/2 md:-translate-y-1/2 ${
              slideIndex === index + 1 ? 'opacity-100' : ''
            }`}
          >
            <img
              src={obj.img}
              alt="Banners"
              className="w-full h-full lg:w-11/12"
            />
            <p className="font-semibold">{obj.title}</p>
          </div>
        ))}

        <div className="move-dot-mt flex space-x-3 justify-center mt-[400px] md:mt-[470px] lg:mt-[510px] xl:mt-[530px]">
          {data.map((obj, index) => (
            <div
              key={obj.id}
              onClick={() => moveDot(index + 1)}
              className={`w-3 h-3 border border-gray-600 rounded-full drop-shadow-lg cursor-pointer ${
                slideIndex === index + 1 ? 'bg-gray-500' : ''
              }`}
            ></div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
