import { useState } from 'react';
import useNavigation from '../../../hooks/use-navigation';

import NavCloseIcon from './NavigationIcons/NavCloseIcon';

import NavigationList from './NavigationList';
import NavigationSummary from './NavigationSummary';
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

const MobileNavigation = () => {
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
    <div className="z-10 fixed top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.4)] font-lora lg:hidden">
      <div className="w-10/12 h-screen px-6 py-4 bg-slate-100">
        <h2 className="mb-10 text-blue-700 font-bold text-4xl">Laon</h2>
        <button className="absolute top-4 right-[6%] text-white md:right-[10%]">
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
                <NavigationSummary
                  data={mobileXiaomiData}
                  showNavSum={showXiaomiNavSum}
                  onCloseNavSum={closeXiaomiNavSumHandler}
                />
              )}
            {windowSize >= 768 &&
              !showRedmiNavSum &&
              !showSmartDeviceNavSum && (
                <NavigationSummary
                  data={xiaomiData}
                  showNavSum={showXiaomiNavSum}
                  onCloseNavSum={closeXiaomiNavSumHandler}
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
                <NavigationSummary
                  data={mobileRedmiData}
                  showNavSum={showRedmiNavSum}
                  onCloseNavSum={closeRedmiNavSumHandler}
                />
              )}
            {windowSize >= 768 &&
              !showXiaomiNavSum &&
              !showSmartDeviceNavSum && (
                <NavigationSummary
                  data={tabletRedmiData}
                  showNavSum={showRedmiNavSum}
                  onCloseNavSum={closeRedmiNavSumHandler}
                />
              )}
          </div>

          <div>
            <NavigationList
              text="Smart Device"
              onOpenNavSum={openSmartDeviceNavSumHandler}
            />
            {windowSize <= 768 && !showRedmiNavSum && !showXiaomiNavSum && (
              <NavigationSummary
                data={mobileSmartDeviceData}
                showNavSum={showSmartDeviceNavSum}
                onCloseNavSum={closeSmartDeviceNavSumHandler}
              />
            )}
            {windowSize >= 768 && (
              <NavigationSummary
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
