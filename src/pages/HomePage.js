import { Fragment } from 'react';

import HeroSection from '../components/HomePage/HeroSection/HeroSection';
import SmallBanner from '../components/HomePage/SmallBanner/SmallBanner';

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <SmallBanner />
    </Fragment>
  );
};

export default HomePage;
