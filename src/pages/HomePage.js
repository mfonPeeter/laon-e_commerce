import { Fragment } from 'react';

import HeroSection from '../components/HomePage/HeroSection';
import SmallBanner from '../components/HomePage/SmallBanner';
import StarProducts from '../components/HomePage/StarProducts';
import Videos from '../components/HomePage/Videos/Videos';

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <SmallBanner />
      <StarProducts />
      <Videos />
    </Fragment>
  );
};

export default HomePage;
