import { Fragment } from 'react';

import HeroSection from '../components/HomePage/HeroSection';
import SmallBanner from '../components/HomePage/SmallBanner';

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <SmallBanner />
    </Fragment>
  );
};

export default HomePage;
