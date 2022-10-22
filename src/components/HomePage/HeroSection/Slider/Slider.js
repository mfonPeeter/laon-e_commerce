import { useState } from 'react';

import logo1 from '../../../../assets/banners/img1.jpg';
import logo2 from '../../../../assets/banners/img2.jpg';
import logo3 from '../../../../assets/banners/img3.jpg';
import logo4 from '../../../../assets/banners/img4.jpg';
import logo5 from '../../../../assets/banners/img5.jpg';
import logo6 from '../../../../assets/banners/img6.jpg';
import BtnSlider from './BtnSlider';

const data = [
  { id: 1, logo: logo1 },
  { id: 2, logo: logo2 },
  { id: 3, logo: logo3 },
  { id: 4, logo: logo4 },
  { id: 5, logo: logo5 },
  { id: 6, logo: logo6 },
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const slideTimeout = setTimeout(() => {
    if (slideIndex !== data.length) setSlideIndex(prevSlide => prevSlide + 1);

    if (slideIndex === data.length) setSlideIndex(1);
  }, 6000);

  const nextSlide = () => {
    if (slideIndex !== data.length) setSlideIndex(prevSlide => prevSlide + 1);

    if (slideIndex === data.length) setSlideIndex(1);

    clearTimeout(slideTimeout);
  };

  const prevSlide = () => {
    if (slideIndex !== 1) setSlideIndex(prevSlide => prevSlide - 1);

    if (slideIndex == 1) setSlideIndex(data.length);

    clearTimeout(slideTimeout);
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <div className="relative hidden lg:block">
      {data.map((obj, index) => (
        <div
          key={obj.id}
          className={`absolute opacity-0 transition-opacity duration-1000 ${
            slideIndex === index + 1 ? 'opacity-100' : ''
          } `}
        >
          <img
            src={obj.logo}
            alt="Banners"
            className="w-full h-[90vh] object-cover"
          />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />

      <div className="absolute top-[540px] left-1/2 -translate-x-1/2 flex space-x-3">
        {data.map((obj, index) => (
          <div
            key={obj.id}
            onClick={() => moveDot(index + 1)}
            className={`w-3 h-3 border border-white rounded-full drop-shadow-lg cursor-pointer ${
              slideIndex === index + 1 ? 'bg-white' : ''
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
