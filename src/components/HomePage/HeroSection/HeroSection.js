// import { useState } from 'react';

// import Slider from './Slider/Slider';
import SliderAlternative from './SliderAlternative';

// const getWindowSize = () => {
//   return window.innerWidth;
// };

const HeroSection = () => {
  // const [windowSize, setWindowSize] = useState(getWindowSize);

  // const windowResizeHandler = () => {
  //   setWindowSize(getWindowSize);
  // };

  // window.addEventListener('resize', windowResizeHandler);

  // if (windowSize >= 1024) return <Slider />;

  // if (windowSize < 1024) return <SliderAlternative />;

  return <SliderAlternative />;
};

export default HeroSection;
