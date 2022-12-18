import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import useNavigation from '../../../hooks/use-navigation';

import NavCloseIcon from './NavigationIcons/NavCloseIcon';

import NavigationList from './NavigationList';
import MobileNavigationSummary from './MobileNavigationSummary';
import {
  mobileRedmiData,
  mobileXiaomiData,
  mobileSmartDeviceData,
  tabletRedmiData,
  tabletSmartDeviceData,
  xiaomiData,
} from './NavigationImgData';

const getWindowSize = () => {
  return window.innerWidth;
};

const MobileNavigation = ({ showNavModal, closeNavModalHandler }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize);
  const {
    showXiaomiNavSum,
    showRedmiNavSum,
    showSmartDeviceNavSum,
    openXiaomiNavSumHandler,
    closeXiaomiNavSumHandler,
    openRedmiNavSumHandler,
    closeRedmiNavSumHandler,
    openSmartDeviceNavSumHandler,
    closeSmartDeviceNavSumHandler,
  } = useNavigation();

  const windowResizeHandler = () => {
    setWindowSize(getWindowSize);
  };

  window.addEventListener('resize', windowResizeHandler);

  return (
    <Fragment>
      <div
        className={`fixed z-30 top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.4)] font-lora opacity-0 duration-500 transition-all ease-[cubic-bezier(0.5,1,0.89,1] -translate-x-full lg:hidden ${
          showNavModal ? 'opacity-100 translate-x-0' : ''
        }`}
        onClick={() => closeNavModalHandler('overflow-y-hidden')}
      />
      <div
        className={`fixed z-30 top-0 left-0 w-10/12 h-screen px-6 py-4 font-lora bg-slate-100 opacity-0 duration-700 transition-all ease-[cubic-bezier(0.5,1,0.89,1] -translate-x-full lg:hidden ${
          showNavModal ? 'w-10/12 opacity-100 translate-x-0' : ''
        }`}
      >
        <Link
          to="/home"
          className="inline-block mb-10 text-blue-700 font-bold text-4xl"
        >
          Laon
        </Link>
        <button
          className="absolute top-4 -right-[12%] text-white md:-right-[7%]"
          onClick={() => closeNavModalHandler('overflow-y-hidden')}
        >
          <NavCloseIcon />
        </button>

        <ul className="flex flex-col space-y-12 text-xl text-gray-800 font-semibold">
          <div>
            <NavigationList
              text="Xiaomi Phones"
              onOpenNavSum={openXiaomiNavSumHandler}
            />
            {windowSize <= 768 &&
              !showRedmiNavSum &&
              !showSmartDeviceNavSum && (
                <MobileNavigationSummary
                  data={mobileXiaomiData}
                  showNavSum={showXiaomiNavSum}
                  onCloseNavSum={closeXiaomiNavSumHandler}
                  closeNavModalHandler={closeNavModalHandler}
                />
              )}
            {windowSize >= 768 &&
              !showRedmiNavSum &&
              !showSmartDeviceNavSum && (
                <MobileNavigationSummary
                  data={xiaomiData}
                  showNavSum={showXiaomiNavSum}
                  onCloseNavSum={closeXiaomiNavSumHandler}
                  closeNavModalHandler={closeNavModalHandler}
                />
              )}
          </div>

          <div>
            <NavigationList
              text="Redmi Phones"
              onOpenNavSum={openRedmiNavSumHandler}
            />
            {windowSize <= 768 &&
              !showXiaomiNavSum &&
              !showSmartDeviceNavSum && (
                <MobileNavigationSummary
                  data={mobileRedmiData}
                  showNavSum={showRedmiNavSum}
                  onCloseNavSum={closeRedmiNavSumHandler}
                  closeNavModalHandler={closeNavModalHandler}
                />
              )}
            {windowSize >= 768 &&
              !showXiaomiNavSum &&
              !showSmartDeviceNavSum && (
                <MobileNavigationSummary
                  data={tabletRedmiData}
                  showNavSum={showRedmiNavSum}
                  onCloseNavSum={closeRedmiNavSumHandler}
                  closeNavModalHandler={closeNavModalHandler}
                />
              )}
          </div>

          <div>
            <NavigationList
              text="Smart Device"
              onOpenNavSum={openSmartDeviceNavSumHandler}
            />
            {windowSize <= 768 && !showRedmiNavSum && !showXiaomiNavSum && (
              <MobileNavigationSummary
                data={mobileSmartDeviceData}
                showNavSum={showSmartDeviceNavSum}
                onCloseNavSum={closeSmartDeviceNavSumHandler}
                closeNavModalHandler={closeNavModalHandler}
              />
            )}
            {windowSize >= 768 && (
              <MobileNavigationSummary
                data={tabletSmartDeviceData}
                showNavSum={showSmartDeviceNavSum}
                onCloseNavSum={closeSmartDeviceNavSumHandler}
                closeNavModalHandler={closeNavModalHandler}
              />
            )}
          </div>

          <Link
            to="/products"
            className="products-link inline-block relative z-10 text-center md:w-36"
            onClick={() => closeNavModalHandler('overflow-y-hidden')}
          >
            All Products
          </Link>
        </ul>
      </div>
    </Fragment>
  );
};

export default MobileNavigation;
