import React from 'react';

import img1 from '../../assets/home-page/small-banners/redmi-note-10-small-banner.jpg';
import img2 from '../../assets/home-page/small-banners/mi-10t-small-banner.jpg';
import img3 from '../../assets/home-page/small-banners/redmi-note-9pro-small-banner.jpg';

const imgData = [
  { id: 1, img: img1, link: 'redmi-note-10' },
  { id: 2, img: img2, link: 'mi-10t' },
  { id: 3, img: img3, link: 'redmi-note-9pro' },
];

const SmallBanner = () => {
  return (
    <section className="grid gap-y-2 gap-x-4 container mx-auto max-w-screen-xl mb-10 px-6 text-center sm:grid-cols-2 lg:grid-cols-3 md:px-10">
      {imgData.map(obj => (
        <div key={obj.id}>
          <a
            href={obj.link}
            className="inline-block transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <img src={obj.img} alt={obj.link} />
          </a>
        </div>
      ))}
    </section>
  );
};

export default SmallBanner;
