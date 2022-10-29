import { Fragment } from 'react';

import HeroSection from '../components/HomePage/HeroSection';
import SmallBanner from '../components/HomePage/SmallBanner';
import StarProducts from '../components/HomePage/StarProducts';

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <SmallBanner />
      <StarProducts />
    </Fragment>
  );
};

export default HomePage;
