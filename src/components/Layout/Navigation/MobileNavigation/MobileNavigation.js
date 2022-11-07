import { useState } from 'react';

import NavCloseIcon from '../NavigationIcons/NavCloseIcon';

import MobileNavigationSummary from './MobileNavigationSummary';
import MobileNavigationList from './MobileNavigationList';
import {
  mobileRedmiData,
  mobileXiaomiData,
  mobileSmartDeviceData,
  tabletRedmiData,
  tabletSmartDeviceData,
  xiaomiData,
} from '../NavigationImgData';

const getWindowSize = () => {
  return window.innerWidth;
};

const MobileNavigation = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize);
  const [showXiaomiNavSum, setShowXiaomiNavSum] = useState(false);
  const [showRedmiNavSum, setShowRedmiNavSum] = useState(false);
  const [showSmartDeviceNavSum, setShowSmartDeviceNavSum] = useState(false);

  const windowResizeHandler = () => {
    setWindowSize(getWindowSize);
  };

  window.addEventListener('resize', windowResizeHandler);

  const openXiaomiNavSumHandler = () => {
    setShowXiaomiNavSum(prevVal => !prevVal);
    setShowRedmiNavSum(false);
    setShowSmartDeviceNavSum(false);
  };

  const closeXiaomiNavSumHandler = () => {
    setShowXiaomiNavSum(false);
  };

  const openRedmiNavSumHandler = () => {
    setShowRedmiNavSum(prevVal => !prevVal);
    setShowXiaomiNavSum(false);
    setShowSmartDeviceNavSum(false);
  };

  const closeRedmiNavSumHandler = () => {
    setShowRedmiNavSum(false);
  };

  const openSmartDeviceNavSumHandler = () => {
    setShowSmartDeviceNavSum(prevVal => !prevVal);
    setShowXiaomiNavSum(false);
    setShowRedmiNavSum(false);
  };

  const closeSmartDeviceNavSumHandler = () => {
    setShowSmartDeviceNavSum(false);
  };

  return (
    <div className="z-10 fixed top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.4)] font-lora lg:hidden">
      <div className="w-10/12 h-screen px-6 py-4 bg-slate-100">
        <h2 className="mb-10 text-blue-700 font-bold text-4xl">Laon</h2>
        <button className="absolute top-4 right-[6%] text-white md:right-[10%]">
          <NavCloseIcon />
        </button>

        <ul className="flex flex-col space-y-12 text-xl text-gray-800 font-semibold">
          <div>
            <MobileNavigationList
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
                />
              )}
            {windowSize >= 768 &&
              !showRedmiNavSum &&
              !showSmartDeviceNavSum && (
                <MobileNavigationSummary
                  data={xiaomiData}
                  showNavSum={showXiaomiNavSum}
                  onCloseNavSum={closeXiaomiNavSumHandler}
                />
              )}
          </div>

          <div>
            <MobileNavigationList
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
                />
              )}
            {windowSize >= 768 &&
              !showXiaomiNavSum &&
              !showSmartDeviceNavSum && (
                <MobileNavigationSummary
                  data={tabletRedmiData}
                  showNavSum={showRedmiNavSum}
                  onCloseNavSum={closeRedmiNavSumHandler}
                />
              )}
          </div>

          <div>
            <MobileNavigationList
              text="Smart Device"
              onOpenNavSum={openSmartDeviceNavSumHandler}
            />
            {windowSize <= 768 && !showRedmiNavSum && !showXiaomiNavSum && (
              <MobileNavigationSummary
                data={mobileSmartDeviceData}
                showNavSum={showSmartDeviceNavSum}
                onCloseNavSum={closeSmartDeviceNavSumHandler}
              />
            )}
            {windowSize >= 768 && (
              <MobileNavigationSummary
                data={tabletSmartDeviceData}
                showNavSum={showSmartDeviceNavSum}
                onCloseNavSum={closeSmartDeviceNavSumHandler}
              />
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
