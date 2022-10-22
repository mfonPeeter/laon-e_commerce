import LeftArrow from './SliderIcon/LeftArrow';
import RightArrow from './SliderIcon/RightArrow';

const BtnSlider = ({ moveSlide, direction }) => {
  return (
    <button
      onClick={moveSlide}
      className={`flex items-center justify-center w-16 h-16 py-[290px] bg-transparent absolute cursor-pointer ${
        direction === 'next'
          ? 'top-[220px] right-14 -translate-y-[40%]'
          : 'top-[220px] left-14 -translate-y-[40%]'
      }`}
    >
      {direction === 'next' ? <RightArrow /> : <LeftArrow />}
    </button>
  );
};

export default BtnSlider;
