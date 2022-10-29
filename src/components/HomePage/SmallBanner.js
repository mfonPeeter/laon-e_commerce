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
    <section className="homepage-container grid gap-y-2 gap-x-4 mb-12 text-center sm:grid-cols-2 lg:grid-cols-3">
      {imgData.map(obj => (
        <div key={obj.id}>
          <a
            href={obj.link}
            className="inline-block transition-all duration-[400ms] hover:shadow-xl"
          >
            <img src={obj.img} alt={obj.link} className="object-cover" />
          </a>
        </div>
      ))}
    </section>
  );
};

export default SmallBanner;
