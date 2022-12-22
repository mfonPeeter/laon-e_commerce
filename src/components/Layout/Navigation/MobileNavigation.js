import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';

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
import laonLogo from '../../../assets/laon-logo.png';

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
        className={`fixed z-30 top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.4)] font-lora opacity-0 duration-700 transition-all -translate-x-full lg:hidden ${
          showNavModal ? 'opacity-100 translate-x-0' : ''
        }`}
        onClick={() => closeNavModalHandler('overflow-y-hidden')}
      />
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={showNavModal}
        timeout={700}
        classNames={{
          enterActive: 'mobile-navigation-open',
          exitActive: 'mobile-navigation-closed',
        }}
      >
        <div className="mobile-navigation">
          <Link to="/home" className="inline-block mb-8 outline-blue-800">
            <img src={laonLogo} alt="Laon Logo" className="w-[70px] h-[70px]" />
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
      </CSSTransition>
    </Fragment>
  );
};

export default MobileNavigation;
