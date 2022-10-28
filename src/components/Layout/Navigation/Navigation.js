import { useState } from 'react';

import NavigationList from './NavigationList';
import NavigationSummary from './NavigationSummary';
import CartIcon from './NavigationIcons/CartIcon';
import { xiaomiData, redmiData, smartDeviceData } from './NavigationImgData';

const Navigation = () => {
  const [showXiaomiNavSum, setShowXiaomiNavSum] = useState(false);
  const [showRedmiNavSum, setShowRedmiNavSum] = useState(false);
  const [showSmartDeviceNavSum, setShowSmartDeviceNavSum] = useState(false);

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
    <div className="px-6 py-4 bg-gradient-to-r from-[#ECD8EF] via-[#FFFFFF] to-[#F5F4F7]">
      <nav className="container mx-auto max-w-screen-xl flex items-center justify-between font-lora font-semibold">
        {/* Menu & Logo Container*/}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button className="hamburger focus:outline-none lg:hidden">
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          <h2 className="text-blue-700 font-bold text-4xl">Laon</h2>
        </div>

        <div className="flex space-x-4 items-center sm:space-x-12">
          <ul className="z-10 hidden space-x-12 items-center lg:flex">
            <NavigationList
              text="Xiaomi Phones"
              onOpenNavSum={openXiaomiNavSumHandler}
              onCloseNavSum={closeXiaomiNavSumHandler}
            />
            <NavigationList
              text="Redmi Phones"
              onOpenNavSum={openRedmiNavSumHandler}
              onCloseNavSum={closeRedmiNavSumHandler}
            />
            <NavigationList
              text="Smart Device"
              onOpenNavSum={openSmartDeviceNavSumHandler}
              onCloseNavSum={closeSmartDeviceNavSumHandler}
            />
          </ul>
          <a href="#" className="products-link">
            All Products
          </a>

          <a
            href="#"
            className="relative flex items-center w-16 h-16 transition-colors hover:text-blue-700"
          >
            <CartIcon />
            <span>Cart</span>
            <span className="absolute top-3 right-8 flex items-center justify-center text-xs w-4 h-4 text-white bg-blue-800 rounded-full">
              1
            </span>
          </a>
        </div>
      </nav>

      {!showRedmiNavSum && !showSmartDeviceNavSum && (
        <NavigationSummary
          data={xiaomiData}
          showNavSum={showXiaomiNavSum}
          onCloseNavSum={closeXiaomiNavSumHandler}
        />
      )}
      {!showXiaomiNavSum && !showSmartDeviceNavSum && (
        <NavigationSummary
          data={redmiData}
          showNavSum={showRedmiNavSum}
          onCloseNavSum={closeRedmiNavSumHandler}
        />
      )}
      {!showXiaomiNavSum && !showRedmiNavSum && (
        <NavigationSummary
          data={smartDeviceData}
          showNavSum={showSmartDeviceNavSum}
          onCloseNavSum={closeSmartDeviceNavSumHandler}
        />
      )}
    </div>
  );
};

export default Navigation;
