import { Fragment } from 'react';

import HeroSection from '../components/HomePage/HeroSection';
import SmallBanner from '../components/HomePage/SmallBanner';
import StarProducts from '../components/HomePage/StarProducts';
import Videos from '../components/HomePage/Videos/Videos';
import Footer from '../components/HomePage/Footer';

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <SmallBanner />
      <StarProducts />
      <Videos />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
